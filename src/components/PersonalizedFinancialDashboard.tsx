/**
 * PersonalizedFinancialDashboard
 *
 * Shown only to RETURNING users (they have chat history in localStorage).
 *
 * WHY CHECK LOCALSTORAGE HERE?
 * - We read chat history from the same key the Chat page writes to, so we can
 *   derive a mock "financial summary" from past conversations. In production,
 *   this would be replaced by an API that returns summary + chart data (e.g.
 *   GET /dashboard/summary) so we don't store sensitive analytics in the client.
 *
 * WHY CONDITIONAL RENDERING (in Home)?
 * - New users get a generic, welcoming chart. Returning users get a dashboard
 *   that feels tailored to them, increasing engagement. One component tree,
 *   two branches — no layout duplication.
 *
 * SCALING TO BACKEND:
 * - Replace localStorage read with: const res = await fetch('/api/dashboard/summary', { headers: { Authorization: `Bearer ${token}` } });
 * - Use res.json() for summary text and chart series. Keep this component's
 *   structure; only the data source and possibly the number of charts change.
 */
import { useMemo } from 'react';
import { PieChart, LineChart } from '@mui/x-charts';
import { CHAT_HISTORY_STORAGE_KEY } from '../utils/userUtils';
import type { StoredChatMessage } from '../utils/userUtils';

/** Mock summary and chart data derived from chat history (MVP). Later from API. */
function useMockFinancialSummary() {
  return useMemo(() => {
    let raw: string | null = null;
    try {
      raw = localStorage.getItem(CHAT_HISTORY_STORAGE_KEY);
    } catch {
      raw = null;
    }

    const history: StoredChatMessage[] = raw ? (JSON.parse(raw) as StoredChatMessage[]) : [];

    // Build a mock "advice" paragraph. In production, backend would generate this.
    const hasIncome = history.some(
      (m) => m.role === 'user' && /earn|income|salary|per month|k per/i.test(m.message)
    );
    const hasInvest = history.some(
      (m) => m.role === 'assistant' && /invest|savings|emergency/i.test(m.message)
    );
    let advice =
      'Based on your conversations, focus on building an emergency fund and keeping expenses under 50% of income.';
    if (hasIncome && hasInvest) {
      advice =
        'You’re already thinking about income and investing — consider automating savings and reviewing your expense split monthly.';
    } else if (hasIncome) {
      advice =
        'You’ve shared income context; next step is to set a savings rate (e.g. 20%) and track expense categories.';
    }

    // Mock expense distribution (would come from backend in production)
    const expenseData = [
      { id: 0, value: 32, label: 'Housing' },
      { id: 1, value: 22, label: 'Food' },
      { id: 2, value: 14, label: 'Transport' },
      { id: 3, value: 12, label: 'Savings' },
      { id: 4, value: 20, label: 'Other' },
    ];

    // Mock savings growth over months (would come from backend)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const savingsValues = [2, 4.2, 5.5, 7, 8.5, 10];

    return { advice, expenseData, months, savingsValues };
  }, []);
}

export default function PersonalizedFinancialDashboard() {
  const { advice, expenseData, months, savingsValues } = useMockFinancialSummary();

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Final Financial Advice Summary */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-fin-green-900 dark:text-fin-green-100 mb-4">
          Your Financial Summary
        </h2>
        <p className="text-gray-700 dark:text-gray-300 font-medium max-w-3xl">
          {advice}
        </p>
      </div>

      {/* Two charts: expense distribution (pie) + savings growth (line) */}
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        <div className="bg-white dark:bg-fin-green-900 rounded-2xl border border-fin-green-200 dark:border-fin-green-800 p-6">
          <h3 className="text-lg font-semibold text-fin-green-900 dark:text-fin-green-100 mb-4">
            Expense distribution
          </h3>
          <div className="flex justify-center">
            <PieChart
              width={280}
              height={280}
              series={[
                {
                  data: expenseData,
                  innerRadius: 40,
                  outerRadius: 100,
                  paddingAngle: 4,
                  cornerRadius: 5,
                  cx: 140,
                  cy: 140,
                },
              ]}
            />
          </div>
        </div>

        <div className="bg-white dark:bg-fin-green-900 rounded-2xl border border-fin-green-200 dark:border-fin-green-800 p-6">
          <h3 className="text-lg font-semibold text-fin-green-900 dark:text-fin-green-100 mb-4">
            Savings growth (projected)
          </h3>
          <div className="flex justify-center">
            <LineChart
              xAxis={[{ scaleType: 'point', data: months }]}
              series={[{ data: savingsValues, label: 'Savings (k)' }]}
              width={320}
              height={260}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
