import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    "name": "Sita Sharma",
    "avatar": "https://randomuser.me/api/portraits/women/5.jpg",
    "profession": "Student | Kathmandu University",
    "comment":
    "I explored eLearning, a website that provides a wide range of courses on various tech-related topics. I was impressed with the platform's comprehensiveness, catering to learners with different skill levels and interests. If you're looking to expand your knowledge and abilities in the tech industry, I highly recommend checking out eLearning!",
  },
  {
    "name": "Kamal Oli",
    "avatar": "https://randomuser.me/api/portraits/men/3.jpg",
    "profession": "Software Engineer | Nepal Telecom",
    "comment":
    "Thanks for your amazing programming tutorial channel! Your teaching style is engaging, and the quality of your tutorials is excellent. Your ability to simplify complex topics and cover various programming languages is commendable. The practical applications and real-world examples you use solidify the theoretical knowledge and provide valuable insights. Your audience engagement fosters a supportive learning environment. Thank you for your dedication, expertise, and passion for teaching programming, and keep up the fantastic work!",
  },
  {
    "name": "Aruna Thapa",
    "avatar": "https://randomuser.me/api/portraits/women/6.jpg",
    "profession": "Web Developer | Freelancer",
    "comment":
    "eLearning's content is exceptional. What impressed me most was the videos' thoroughness, covering everything in detail. This allows beginners to complete an entire project just by watching the videos. Thank you so much. I'm very excited for the following videos. Keep up the fantastic work!",
  },
  {
    "name": "Dipesh Rai",
    "avatar": "https://randomuser.me/api/portraits/men/4.jpg",
    "profession": "IT Support Specialist | Local Company",
    "comment":
    "Join eLearning! They focus on practical applications, not just theory behind programming languages or frameworks. I took a course on building a web application, and it was very helpful in understanding the different stages involved in creating a project from scratch. Overall, I highly recommend eLearning to anyone looking to improve their programming skills and build real-world projects. eLearning is a great resource to take your skills to the next level!",
  },
  {
    "name": "Nisha Gurung",
    "avatar": "https://randomuser.me/api/portraits/women/7.jpg",
    "profession": "Data Analyst | International Organization",
    "comment":
    "eLearning offers a vast array of courses on various tech-related subjects, and I found the experience to be very rewarding. The platform provides a comprehensive selection of courses that cater to learners with varying skill levels and interests. If you're aiming to enhance your knowledge and abilities in the tech field, I strongly recommend checking out eLearning!",
  },
  {
    "name": "Bikram Magar",
    "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
    "profession": "Web Designer | Advertising Agency",
    "comment":
    "eLearning is a fantastic platform that provides a plethora of courses on a wide range of tech-related topics. I was very impressed with the platform's comprehensiveness, catering to learners with different skill levels and interests. If you're looking to expand your knowledge and abilities in the tech industry, I highly recommend checking out eLearning!",
  },
]

const Reviews = (props: Props) => {
  return (
  <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
      <div className="800px:w-[50%] w-full">
        <Image
        src={require("../../../public/assests/business-img.png")}
        alt="business"
        width={700}
        height={700}
        />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
            
          </p>
        </div>
        <br />
        <br />
       </div>
       <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-20px]">
        {reviews &&
            reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
        </div>
  </div>
  );
};

export default Reviews;
