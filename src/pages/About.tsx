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
              At FinWise, we believe that managing personal finances shouldn't feel overwhelming or complicated. Our mission is to make financial clarity accessible to everyone by using intelligent technology that helps people understand, track, and improve their financial decisions.
            <br></br>
With the right insights and guidance, anyone can build better financial habits and move closer to their financial goals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-fin-green-800 dark:text-fin-green-200 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
              FinWise is a financial technology platform focused on simplifying personal finance through intelligent automation and data-driven insights. By combining artificial intelligence, expense tracking, and financial analytics, we aim to help individuals better understand their financial behavior and make smarter money decisions.
<br></br>
Our goal is to build tools that make financial awareness simple, accessible, and practical for everyday users.
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
                  Your financial data and privacy are our top priorities. We use secure authentication and encrypted systems to protect user information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-fin-green-700 dark:text-fin-green-300 mb-2">
                  Accessibility
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Financial insights shouldn't be limited to experts. Our goal is to make intelligent financial guidance available to everyone.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
