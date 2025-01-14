import React from "react";
import { styles } from "../styles/style";

const PrivacyPolicy = () => {
  return (
    <div className="text-black dark:text-white bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Title Section */}
        <h1 className={`${styles.title} text-center text-4xl lg:text-6xl font-bold mb-8 leading-tight`}>
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        
        {/* Intro Paragraph */}
        <p className="text-lg lg:text-2xl text-center font-Poppins mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Your privacy is our priority. Learn how we collect, use, and protect your personal data on our platform.
        </p>

        {/* Content Section */}
        <div className="w-full lg:w-4/5 mx-auto bg-gradient-to-r from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl rounded-xl p-8 lg:p-12">
          {[
            {
              title: "Information We Collect",
              content: "We collect personal information, including your name, email, and usage data, to improve our services and offer a seamless experience."
            },
            {
              title: "How We Use Your Information",
              content: "To deliver and manage our services. To improve platform functionality and performance. To communicate important updates and offers. To ensure data security and prevent fraud.",
              isList: true,
              listItems: [
                "To deliver and manage our services.",
                "To improve platform functionality and performance.",
                "To communicate important updates and offers.",
                "To ensure data security and prevent fraud."
              ]
            },
            {
              title: "Data Protection",
              content: "We implement robust security measures, including encryption and password protection, to safeguard your data from unauthorized access."
            },
            {
              title: "Your Rights",
              content: "You have the right to access, modify, or delete your personal data at any time."
            }
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6 hover:shadow-2xl transition-transform transform hover:-translate-y-1 hover:scale-105 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                {section.title}
              </h2>
              {section.isList ? (
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.listItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-[16px] lg:text-[18px] leading-8 text-gray-700 dark:text-gray-300 font-Poppins">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="text-center mt-12">
          <span className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
            Your trust is our greatest asset, and we are committed to protecting your privacy.
          </span>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
