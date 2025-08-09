import Layout from "./Layout";
import React, { useEffect, useRef } from 'react';

function NotFound() {
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const splitTextIntoSpans = (element) => {
      if (!element) return;
      const text = element.textContent.trim();
      const words = text.split(/\s+/);
      element.innerHTML = words
        .map((word, index) => `<span class="inline-block opacity-0 animate-fadeIn" style="animation-delay: ${index * 0.2}s">${word}</span>`)
        .join(' ');
    };

    splitTextIntoSpans(heading1Ref.current);
    splitTextIntoSpans(heading2Ref.current);
    splitTextIntoSpans(paragraphRef.current);
  }, []);

  return (
    <Layout>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}
      </style>
      <div className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <h1
          ref={heading1Ref}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800"
          aria-label="Welcome to learning with us"
        >
          សូមស្វាគមន៍មកកាន់ការសិក្សាជាមួយ
        </h1>
        <h2
          ref={heading2Ref}
          className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-gray-800"
          aria-label="This page does not exist, you can return to the homepage"
        >
          ទំព័រនេះពុំមានទេ អ្នកអាចត្រឡប់ចូលទំព័រដើម
        </h2>
        <p
          ref={paragraphRef}
          className="text-gray-700 max-w-xl text-center text-base sm:text-lg"
          aria-label="This is a summary about us. We are a team providing high-quality education and tips for success in the Bac II exam. Welcome to learning with Beltei!"
        >
          នេះគឺជាខ្លឹមសារសង្ខេបសម្រាប់អំពីយើង។ យើងជាក្រុមផ្តល់ជូននូវការអប់រំដែលមានគុណភាពខ្ពស់ និងគន្លឹះសម្រាប់ជោគជ័យក្នុងការប្រឡងបាក់ឌុប។ សូមស្វាគមន៍មកកាន់ការសិក្សាជាមួយ ប៊ែលធី!
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            ទំព័រដើម
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;