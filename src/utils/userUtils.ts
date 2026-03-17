/**
 * User utility functions for FinWise MVP
 *
 * WHY LOCALSTORAGE IN MVP?
 * - No backend yet: we need a place to persist "user state" (e.g. chat history)
 *   so we can tell new vs returning users and show personalized content.
 * - localStorage is synchronous, has no setup, and works offline — ideal for
 *   quick iteration and demos.
 *
 * SECURITY LIMITATIONS (MVP):
 * - Data lives only on this device and can be cleared by the user or browser.
 * - Not encrypted; anyone with device access can read it. Do NOT store
 *   passwords or sensitive PII here in production.
 * - No cross-device sync or backup.
 *
 * LATER (PRODUCTION):
 * - Replace with: authenticated API (e.g. JWT) + backend DB storing chat/history.
 * - checkIfReturningUser() would become: call API e.g. GET /me/session or
 *   GET /chat/history; if 200 and history length > 0, treat as returning user.
 * - Same UI logic: we only switch the source of "has history" from localStorage
 *   to server response.
 */

/** Key used in localStorage for chat history. Keep in sync with Chat.tsx */
export const CHAT_HISTORY_STORAGE_KEY = 'finwise_chat_history';

/**
 * Shape of one chat message as stored (matches what we persist from Chat).
 * Using a simple structure so we can later align with backend API response.
 *
 * Example structure for chatHistory in localStorage (finwise_chat_history):
 * [
 *   { role: "user", message: "I earn 50k per month" },
 *   { role: "assistant", message: "You should invest 20%" }
 * ]
 */
export interface StoredChatMessage {
  role: 'user' | 'assistant';
  message: string;
  /** Optional; add timestamp when persisting for ordering/analytics */
  timestamp?: string;
}

/**
 * Determines if the current user is "returning" (has prior chat interactions).
 *
 * - Used on Home to decide: show default expense chart vs personalized dashboard.
 * - We check localStorage because in this MVP we don't have a backend; chat
 *   history is persisted locally. In production, this would be replaced by
 *   an API call that returns whether the user has history.
 *
 * @returns true if chatHistory exists in localStorage and has at least one message
 */
export function checkIfReturningUser(): boolean {
  try {
    const raw = localStorage.getItem(CHAT_HISTORY_STORAGE_KEY);
    if (raw == null || raw === '') return false;

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return false;

    // "Returning" = has had at least one real conversation (user sent something)
    const hasUserMessage = parsed.some(
      (m: StoredChatMessage) => m && m.role === 'user' && typeof m.message === 'string' && m.message.length > 0
    );
    return hasUserMessage;
  } catch {
    // Invalid JSON or localStorage disabled
    return false;
  }
}
