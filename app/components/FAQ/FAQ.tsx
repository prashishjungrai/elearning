import { styles } from '@/app/styles/style';
import { useGetHeroDataQuery } from '@/redux/features/layout/layoutApi';
import React, { useEffect, useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';

type Props = {};

const FAQ = (props: Props) => {
  const { data } = useGetHeroDataQuery('FAQ', {});
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      setQuestions(data.layout?.faq || []);
    }
  }, [data]);

  const toggleQuestion = (id: string) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="bg-gray-50  py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`${styles.title} text-center text-3xl md:text-4xl font-extrabold`}>
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600   mt-2">
          Have a question? We’ve got answers.
        </p>
        
        <div className="mt-10 space-y-6">
          {questions?.map((q, index) => (
            <div
              key={q._id || index}
              
              className={`border rounded-lg shadow-sm  p-5 bg-white transition-all duration-300 
              hover:shadow-md  hover:border-blue-500 `}
            >
              <button
                className="flex items-center justify-between w-full text-left focus:outline-none"
                onClick={() => toggleQuestion(q._id)}
              >
                <span className="font-medium text-lg text-gray-900 ">
                  {q.question}
                </span>
                <span className="ml-4">
                  {activeQuestion === q._id ? (
                    <HiMinus className="h-6 w-6 text-gray-700 " />
                  ) : (
                    <HiPlus className="h-6 w-6 text-gray-700 " />
                  )}
                </span>
              </button>
              {activeQuestion === q._id && (
                <div className="mt-3 text-gray-700  ">
                  <p>{q.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
