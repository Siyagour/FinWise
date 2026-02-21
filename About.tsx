export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-fin-green-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-fin-green-900 dark:text-fin-green-100 mb-6">
          About Us
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fin-green-800 dark:text-fin-green-200 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
              At FinWise, we believe that everyone deserves access to expert financial guidance. 
              Our mission is to democratize financial advice by leveraging cutting-edge AI technology 
              to provide personalized, accessible, and reliable financial insights to users worldwide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fin-green-800 dark:text-fin-green-200 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
              FinWise is an innovative financial technology platform that combines artificial intelligence 
              with financial expertise to help individuals make informed financial decisions. Our team 
              consists of experienced financial advisors, data scientists, and technology experts 
              dedicated to creating the best possible financial guidance experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fin-green-800 dark:text-fin-green-200 mb-4">
              What We Offer
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 font-medium space-y-2">
              <li>Personalized financial advice tailored to your unique situation</li>
              <li>Investment strategy recommendations based on your goals and risk tolerance</li>
              <li>Budget planning and expense management guidance</li>
              <li>Market analysis and trend insights</li>
              <li>24/7 availability for your financial questions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fin-green-800 dark:text-fin-green-200 mb-4">
              Our Values
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-fin-green-700 dark:text-fin-green-300 mb-2">
                  Transparency
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  We believe in clear, honest communication about financial matters and our services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-fin-green-700 dark:text-fin-green-300 mb-2">
                  Security
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Your financial data and privacy are our top priorities. We employ bank-level security measures.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-fin-green-700 dark:text-fin-green-300 mb-2">
                  Accessibility
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Financial advice should be available to everyone, regardless of their financial situation.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
