import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'How does FinWise AI provide financial advice?',
    answer: 'FinWise uses advanced artificial intelligence algorithms trained on financial data and best practices to provide personalized recommendations. Our AI analyzes your questions and provides guidance based on established financial principles and market insights.',
  },
  {
    question: 'Is FinWise a replacement for a human financial advisor?',
    answer: 'FinWise provides AI-powered insights to help you understand your finances, track expenses, and make smarter decisions. However, it is not a replacement for a licensed financial advisor. For complex financial planning or investment advice, we recommend consulting a professional advisor.',
  },
  {
    question: 'How secure is my financial information?',
    answer: 'We take security seriously. All data is encrypted using industry-standard protocols, and we follow strict privacy policies. We never share your information with third parties.',
  },
  {
    question: 'What types of financial questions can I ask?',
    answer: 'You can ask about budgeting, saving strategies, investment options, retirement planning, debt management, tax planning, and general financial best practices. Our AI is designed to handle a wide range of financial topics.',
  },
  {
    question: 'Is FinWise free to use?',
    answer: 'FinWise offers both free and premium tiers. Basic financial guidance is available for free, while advanced features and personalized investment strategies are available through our premium subscription.',
  },
  {
    question: 'How accurate is the financial advice provided?',
    answer: 'Our AI is trained on reputable financial sources and best practices. However, financial markets are unpredictable, and individual circumstances vary. We recommend using our advice as a starting point and consulting with professionals for major financial decisions.',
  },
  {
    question: 'Can I upload financial documents for analysis?',
    answer: 'Yes! You can upload documents such as bank statements, investment reports, or budget spreadsheets. Our AI can analyze these documents to provide more personalized advice. All uploaded files are processed securely.',
  },
  {
    question: 'Does FinWise provide investment recommendations?',
    answer: 'We provide general investment guidance and strategies based on your goals and risk tolerance. However, we do not provide specific stock picks or investment product recommendations. Always do your own research and consider consulting with a licensed investment advisor.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-fin-green-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-fin-green-900 dark:text-fin-green-100 mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-fin-green-200 dark:border-fin-green-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-fin-green-50 dark:bg-fin-green-900 hover:bg-fin-green-100 dark:hover:bg-fin-green-800 transition-colors"
              >
                <span className="font-semibold text-fin-green-900 dark:text-fin-green-100 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-fin-green-600 dark:text-fin-green-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-fin-green-600 dark:text-fin-green-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white dark:bg-fin-green-950">
                  <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
