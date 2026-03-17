// Thin client for talking to an AI API.
// For MVP we still mock responses, but this function is structured so you can
// later plug in a real backend (OpenAI, custom API, etc.) without changing
// the Chat UI.

export type ChatRole = 'user' | 'assistant' | 'system';

export interface ChatMessagePayload {
  role: ChatRole;
  content: string;
}

/**
 * Call the AI agent.
 *
 * MVP behaviour:
 * - If VITE_AI_API_URL is set, it will POST the conversation there.
 * - If the request fails or no URL is set, it falls back to a local
 *   deterministic mock response so the UI still works offline.
 */
export async function callAiAgent(
  messages: ChatMessagePayload[],
): Promise<string> {
  // Vite exposes env vars on import.meta.env in the runtime bundle, but TypeScript
  // doesn't know about that type by default in this project, so we cast.
  const meta = import.meta as unknown as { env?: Record<string, string | undefined> };
  const apiUrl = meta.env?.VITE_AI_API_URL as string | undefined;

  // Simple mock used when we don't have a backend yet.
  const fallback = (): string => {
    const lastUser = [...messages].reverse().find((m) => m.role === 'user');
    if (!lastUser) {
      return 'Tell me a bit about your income, expenses, and financial goals so I can help you build a plan.';
    }
    return `I’ve read your latest question: "${lastUser.content}"

A sensible next step is to:
- Keep essential expenses under ~50% of your income
- Automate savings (for example 20% of income) towards an emergency fund and long-term goals
- Match investments to your time horizon and risk tolerance.`;
  };

  if (!apiUrl) {
    return fallback();
  }

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // In production you would also send Authorization: Bearer <JWT> here.
      },
      body: JSON.stringify({ messages }),
    });

    if (!res.ok) {
      return fallback();
    }

    const data = (await res.json()) as { reply?: string };
    if (!data.reply) {
      return fallback();
    }

    return data.reply;
  } catch {
    // Network errors, CORS, timeouts, etc.
    return fallback();
  }
}

