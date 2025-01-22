import React, { FC } from "react";
import CoursePlayer from "../../../utils/CoursePlayer";
import { styles } from "../../../../app/styles/style";
import Ratings from "../../../../app/utils/Ratings";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseData: any;
  handleCourseCreate: () => void;
  isEdit?: boolean;
};

const CoursePreview: FC<Props> = ({
  courseData,
  handleCourseCreate,
  setActive,
  active,
  isEdit,
}) => {
  const discountPercentage =
    courseData?.estimatedPrice > 0
      ? ((courseData.estimatedPrice - courseData.price) /
          courseData.estimatedPrice) *
        100
      : 0;
  const discountPercentagePrice = discountPercentage.toFixed(0);

  const prevButton = () => {
    setActive(active - 1);
  };

  const createCourse = () => {
    handleCourseCreate();
  };

  return (
    <div className="w-[80%] m-auto py-5 mb-5 text-black">
      <div className="w-full relative bg-gray-100 p-5 rounded-md">
        <div className="w-full mt-10">
          {courseData?.demoUrl ? (
            <CoursePlayer videoUrl={courseData.demoUrl} title={courseData?.title} />
          ) : (
            <p className="text-red-500 text-lg">Demo video not available.</p>
          )}
        </div>

        <div className="flex flex-wrap items-start mt-10">
          {/* Key Features Section */}
          <div className="w-full lg:w-1/2 pr-5">
            <h2 className="text-[20px] font-bold text-gray-800">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 mt-3">
              <li>Full lifetime access</li>
              <li>Certificate of completion</li>
              <li>Premium Support</li>
              <li>Study Resources</li>
            </ul>
          </div>

          {/* Buy Now Section */}
          <div className="w-full lg:w-1/2 flex justify-end items-center">
            <div className="text-center">
              <div className="flex items-center mb-4 justify-center">
                <h1 className="text-[25px] text-gray-800 font-bold">
                  {courseData?.price === 0 ? "Free" : `$${courseData?.price}`}
                </h1>
                {courseData?.estimatedPrice > 0 && (
                  <>
                    <h5 className="pl-3 text-[20px] line-through text-gray-500">
                      ${courseData?.estimatedPrice}
                    </h5>
                    <h4 className="pl-5 text-[22px] text-green-600 font-medium">
                      {discountPercentagePrice}% Off
                    </h4>
                  </>
                )}
              </div>
              <button
                disabled={courseData?.price === 0}
                className={`${
                  courseData?.price === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600"
                } text-white py-2 px-12 rounded`}
              >
                Buy Now {courseData?.price ? `$${courseData?.price}` : ""}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10">
        <h1 className="text-[25px] font-bold text-gray-800">
          {courseData?.name}
        </h1>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center">
            <Ratings rating={0} />
            <span className="ml-2 text-gray-600">0 Reviews</span>
          </div>
          <span className="text-gray-600">0 Students</span>
        </div>

        <div className="mt-8">
          <h2 className="text-[20px] font-bold text-gray-800">What You Will Learn</h2>
          {courseData?.benefits?.length > 0 ? (
            courseData.benefits.map((item: any, index: number) => (
              <div className="flex items-center mt-2" key={index}>
                <IoCheckmarkDoneOutline size={20} className="text-green-600" />
                <span className="ml-2 text-gray-700">{item.title}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No benefits listed for this course.</p>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-[20px] font-bold text-gray-800">Prerequisites</h2>
          {courseData?.prerequisites?.length > 0 ? (
            courseData.prerequisites.map((item: any, index: number) => (
              <div className="flex items-center mt-2" key={index}>
                <IoCheckmarkDoneOutline size={20} className="text-green-600" />
                <span className="ml-2 text-gray-700">{item.title}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No prerequisites listed for this course.</p>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-[20px] font-bold text-gray-800">Course Details</h2>
          <p className="text-gray-700 mt-3 whitespace-pre-line">
            {courseData?.description || "No description available."}
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <button
          onClick={prevButton}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded"
        >
          Prev
        </button>
        <button
          onClick={createCourse}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded"
        >
          {isEdit ? "Update" : "Create"}
        </button>
      </div>
    </div>
  );
};

export default CoursePreview;
//updated
//the preview includes a loading message and an error message if something goes wrong (like no video URL or API failure). It checks if the video data is fetched before showing the video. This makes it user-friendly because the user knows what's happening while the video loads or if there’s an issue.Tt gives feedback to the user, improving the overall experience, especially if there are delays or errors.