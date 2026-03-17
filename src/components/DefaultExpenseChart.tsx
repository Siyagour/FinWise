/**
 * Default expense pie chart shown to NEW users (no chat history).
 * Keeps the exact same layout and copy as the original Home graph section.
 */
import { PieChart } from '@mui/x-charts';

export default function DefaultExpenseChart() {
  return (
    <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[minmax(0,2fr),minmax(0,1.4fr)] items-center">
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-fin-green-900 dark:text-fin-green-100 mb-4">
          Track Your Overall Expenses
        </h2>
        <p className="text-gray-700 dark:text-gray-300 font-medium mb-6">
          Get a quick visual breakdown of where your money is going each month. Use this view to
          spot spending patterns, adjust your budget, and stay aligned with your financial goals.
        </p>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 font-medium">
          <li>• See how much goes to essentials vs. lifestyle</li>
          <li>• Identify categories where you can optimize spending</li>
          <li>• Combine with AI chat to plan smarter budget adjustments</li>
        </ul>
      </div>
      <div className="bg-white dark:bg-fin-green-900 rounded-2xl border border-fin-green-200 dark:border-fin-green-800 p-6 flex items-center justify-center">
        <PieChart
          width={320}
          height={320}
          series={[
            {
              data: [
                { id: 0, value: 35, label: 'Housing' },
                { id: 1, value: 20, label: 'Food' },
                { id: 2, value: 15, label: 'Transportation' },
                { id: 3, value: 10, label: 'Savings' },
                { id: 4, value: 20, label: 'Other' },
              ],
              innerRadius: 40,
              outerRadius: 120,
              paddingAngle: 4,
              cornerRadius: 5,
              startAngle: -45,
              endAngle: 225,
              cx: 160,
              cy: 160,
            },
          ]}
        />
      </div>
    </div>
  );
}
