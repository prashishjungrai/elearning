import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black   bg-gray-50  py-16">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Title Section */}
        <h1 className={`${styles.title} text-center text-4xl lg:text-6xl font-bold mb-8 leading-tight`}>
          About <span className="text-gradient">Us</span>
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg lg:text-2xl text-center font-Poppins mb-12 text-gray-700 max-w-3xl mx-auto">
          Empowering learners, transforming futures — we are dedicated to making quality education accessible, engaging, and effective for everyone.
        </p>

        {/* Content Section */}
        <div className="w-full lg:w-4/5 mx-auto bg-gradient-to-r from-blue-50 to-gray-100 shadow-2xl rounded-xl p-8 lg:p-12">
          {[
            {
              title: "Who We Are",
              content: "We are an innovative e-learning platform dedicated to bridging the gap between knowledge and learners worldwide. With an emphasis on user experience, robust security, and interactive tools, our platform creates an engaging learning environment for both instructors and students."
            },
            {
              title: "What We Offer",
              content: "We offer a range of features designed to create an immersive learning experience.",
              isList: true,
              listItems: [
                "Interactive and structured courses with high-quality resources.",
                "Seamless communication through Q&A sections.",
                "Advanced content protection and encrypted data security.",
                "Real-time analytics for performance tracking.",
                "Access anytime, anywhere from any device."
              ]
            },
            {
              title: "Our Mission",
              content: "To empower individuals by providing affordable, accessible, and high-quality education, fostering growth and innovation in every learner."
            },
            {
              title: "Our Vision",
              content: "To become a leading global platform for online learning, where education knows no boundaries."
            }
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white  p-6 rounded-lg shadow-md mb-6 hover:shadow-2xl transition-transform transform hover:-translate-y-1 hover:scale-105 hover:bg-blue-50  hover:text-blue-700 "
            >
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-900  ">
                {section.title}
              </h2>
              {section.isList ? (
                <ul className="list-disc pl-6 text-gray-700  grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.listItems.map((item, i) => (
                    <li
                      key={i}
                      className="p-2 rounded-md transition-all duration-300 hover:bg-blue-100  hover:text-blue-700 "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[16px] lg:text-[18px] leading-8 text-gray-700  font-Poppins">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-12">
          <span className="text-xl lg:text-2xl font-bold text-gray-900  ">
            Join us on this journey of learning, growth, and endless possibilities.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
