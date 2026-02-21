export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white dark:bg-fin-green-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-fin-green-900 dark:text-fin-green-100 mb-6">
          Disclaimer
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fin-green-800 dark:text-fin-green-200 mb-4">
              General Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
              The information provided by FinWise ("we," "us," or "our") on this website and through 
              our AI financial advisor service is for general informational purposes only. All information 
              is provided in good faith, however we make no representation or warranty of any kind, express 
              or implied, regarding the accuracy, adequacy, validity, reliability, availability, or 
              completeness of any information on the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fin-green-800 dark:text-fin-green-200 mb-4">
              Not Financial Advice
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
              The content provided by FinWise is not intended to be, and should not be construed as, 
              professional financial advice, investment advice, or any other type of advice. The information 
              provided is general in nature and may not be suitable for your specific financial situation. 
              You should consult with a qualified financial advisor, accountant, or other professional 
              before making any financial decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fin-green-800 dark:text-fin-green-200 mb-4">
              Investment Risks
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
              All investments carry risk, including the potential loss of principal. Past performance 
              does not guarantee future results. The value of investments can go up as well as down, 
              and you may not get back the amount you invested. We do not guarantee any specific 
              investment outcomes or returns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fin-green-800 dark:text-fin-green-200 mb-4">
              No Endorsement
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
              Any mention of specific financial products, services, companies, or strategies does not 
              constitute an endorsement or recommendation. We are not affiliated with any financial 
              institutions, investment firms, or product providers unless explicitly stated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fin-green-800 dark:text-fin-green-200 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
              In no event shall FinWise, its directors, employees, partners, agents, suppliers, or 
              affiliates be liable for any indirect, incidental, special, consequential, or punitive 
              damages, including without limitation, loss of profits, data, use, goodwill, or other 
              intangible losses, resulting from your use of our service or reliance on any information 
              provided.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fin-green-800 dark:text-fin-green-200 mb-4">
              AI Limitations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
              Our AI financial advisor is powered by artificial intelligence and machine learning 
              algorithms. While we strive for accuracy, AI systems may occasionally provide incomplete, 
              inaccurate, or outdated information. Always verify important financial information through 
              multiple sources and consult with qualified professionals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fin-green-800 dark:text-fin-green-200 mb-4">
              Changes to Disclaimer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
              We reserve the right to update this disclaimer at any time. We will notify users of any 
              material changes by posting the new disclaimer on this page and updating the "Last Updated" 
              date. Your continued use of our service after any changes constitutes acceptance of the 
              new disclaimer.
            </p>
          </section>

          <div className="mt-8 p-6 bg-fin-green-100 dark:bg-fin-green-900 rounded-lg border border-fin-green-200 dark:border-fin-green-800">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Last Updated: February 16, 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
