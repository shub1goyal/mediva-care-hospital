import { buildFallbackReply, buildSystemPrompt } from "../src/chatKnowledge.js";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL_FALLBACKS = [
  "openrouter/free",
  "openai/gpt-oss-20b:free",
  "qwen/qwen3-next-80b-a3b-instruct:free",
  "deepseek/deepseek-v4-flash:free"
];

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  let body = request.body || {};
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const userMessage = String(body.message || "").slice(0, 900);
  const page = String(body.page || "/").slice(0, 120);
  const history = Array.isArray(body.history) ? body.history.slice(-6) : [];
  const fallback = buildFallbackReply(userMessage);

  if (!userMessage.trim()) {
    return response.status(200).json({ mode: "fallback", reply: fallback });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return response.status(200).json({
      mode: "fallback",
      reason: "missing_api_key",
      reply: fallback
    });
  }

  try {
    const upstream = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": request.headers.origin || "https://mediva-care-hospital.vercel.app",
        "X-Title": "Mediva Care Hospital Prototype"
      },
      body: JSON.stringify({
        models: MODEL_FALLBACKS,
        messages: [
          { role: "system", content: buildSystemPrompt(page) },
          ...history
            .filter((item) => item && (item.role === "user" || item.role === "assistant"))
            .map((item) => ({
              role: item.role,
              content: String(item.content || "").slice(0, 700)
            })),
          { role: "user", content: userMessage }
        ],
        temperature: 0.45,
        max_completion_tokens: 420
      })
    });

    if (!upstream.ok) {
      throw new Error(`OpenRouter responded ${upstream.status}`);
    }

    const data = await upstream.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      throw new Error("OpenRouter returned an empty response");
    }

    return response.status(200).json({
      mode: "ai",
      model: data.model || "openrouter/free",
      reply
    });
  } catch (error) {
    return response.status(200).json({
      mode: "fallback",
      reason: error.message,
      reply: fallback
    });
  }
}
