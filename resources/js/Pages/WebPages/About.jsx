import Layout from "./Layout";
import React from 'react';

function About() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
          សង្ខេប
        </h1>
        <p className="text-gray-700 max-w-xl text-center text-base sm:text-lg">
          នេះគឺជាខ្លឹមសារសង្ខេបសម្រាប់អំពីយើង។ យើងជាក្រុមផ្តល់ជូននូវការអប់រំដែលមានគុណភាពខ្ពស់ និងគន្លឹះសម្រាប់ជោគជ័យក្នុងការប្រឡងបាក់ឌុប។ សូមស្វាគមន៍មកកាន់ការសិក្សាជាមួយ ប៊ែលធី!
        </p>
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            ទាក់ទងមកយើង
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default About;