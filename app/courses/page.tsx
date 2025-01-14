"use client"; 
// This directive specifies that this file is a Client Component in Next.js.
// Client Components are rendered in the browser and can use React hooks, event listeners, etc.

import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";
import Loader from "../components/Loader/Loader";
import Header from "../components/Header";
import Heading from "../utils/Heading";
import { styles } from "../styles/style";
import CourseCard from "../components/Course/CourseCard";
import Footer from "../components/Footer";

type Props = {};

// ---------------------------------------------------------
//  **LoadingComponent**
// A fallback component to show a loader while data or components are loading.
// This ensures a consistent loading experience.
const LoadingComponent = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Loader />
    </div>
  );
};

// ---------------------------------------------------------
//  **CourseContent Component**
// - Handles displaying the list of courses.
// - Allows filtering courses based on categories and search terms.
// - Manages client-side hydration issues using `useEffect` and `useState`.
const CourseContent = () => {
  const searchParams = useSearchParams(); // Access query parameters from the URL.
  const search = searchParams?.get("title"); // Get the "title" parameter for searching courses.

  // Fetch all courses data from Redux API.
  const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
  // Fetch layout data, specifically categories.
  const { data: categoriesData } = useGetHeroDataQuery("Categories", {});

  // State to store filtered courses.
  const [courses, setcourses] = useState([]);
  // State to track the selected category.
  const [category, setCategory] = useState("All");
  // State to prevent hydration mismatch.
  const [mounted, setMounted] = useState(false);

  //  Ensure the component is mounted before rendering to avoid hydration mismatch.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update the list of courses based on the selected category and search term.
  useEffect(() => {
    if (!data?.courses) return; // If courses data is not available, exit.

    if (category === "All") {
      // Show all courses if "All" is selected.
      setcourses(data.courses);
    } else {
      // Filter courses based on the selected category.
      setcourses(
        data.courses.filter((item: any) => item.categories === category)
      );
    }

    // Apply search filter if a search term exists.
    if (search) {
      setcourses(
        data.courses.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [data, category, search]); // Trigger this effect when `data`, `category`, or `search` changes.

  // Extract categories from layout data.
  const categories = categoriesData?.layout?.categories || [];

  //  Prevent rendering until the component is mounted.
  if (!mounted) return null;
  //  Show a loading spinner while data is loading.
  if (isLoading) return <LoadingComponent />;

  return (
    <div className="w-[95%] 800px:w-[85%] m-auto min-h-[70vh]">
      {/* Page metadata and SEO optimization */}
      <Heading
        title={"All courses - Elearning"}
        description={"Elearning is a programming community."}
        keywords={
          "programming community, coding skills, expert insights, collaboration, growth"
        }
      />
      <br />
      {/* Category Filter Buttons */}
      <div className="w-full flex items-center flex-wrap">
        {/* All Category Button */}
        <div
          className={`h-[35px] ${
            category === "All" ? "bg-[crimson]" : "bg-[#5050cb]"
          } m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer text-white`}
          onClick={() => setCategory("All")}
        >
          All
        </div>
        {/* Dynamic Category Buttons */}
        {categories &&
          categories.map((item: any, index: number) => (
            <div key={index}>
              <div
                className={`h-[35px] ${
                  category === item.title ? "bg-[crimson]" : "bg-[#5050cb]"
                } m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer text-white`}
                onClick={() => setCategory(item.title)}
              >
                {item.title}
              </div>
            </div>
          ))}
      </div>

      {/* Display message if no courses are found */}
      {courses && courses.length === 0 && (
        <p
          className={`${styles.label} justify-center min-h-[50vh] flex items-center`}
        >
          {search
            ? "No courses found!"
            : "No courses found in this category. Please try another one!"}
        </p>
      )}

      <br />
      <br />
      {/* Display the list of courses */}
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
        {courses &&
          courses.map((item: any, index: number) => (
            <CourseCard item={item} key={index} />
          ))}
      </div>
    </div>
  );
};

// ---------------------------------------------------------
//  **Page Component**
// - Serves as the root component for this page.
// - Includes the Header, CourseContent, and Footer components.
// - Manages hydration mismatch using `useEffect` and `useState`.
const Page = (props: Props) => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  //  Ensure the component is fully mounted before rendering.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until mounted to avoid hydration mismatch.
  if (!mounted) return null;

  return (
    <div>
      <Header
        route={route}
        setRoute={setRoute}
        open={open}
        setOpen={setOpen}
        activeItem={1}
      />
      <Suspense fallback={<LoadingComponent />}>
        {/* Display the main content */}
        <CourseContent />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Page;
