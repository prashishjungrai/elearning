import Ratings from "@/app/utils/Ratings";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";

// Keeping the original Props type
type Props = {
  item: any;
  isProfile?: boolean;
};

const CourseCard: FC<Props> = ({ item, isProfile }) => {
  // Simple null check for thumbnail url
  const thumbnailUrl = item?.thumbnail?.url || "";

  // Only render if we have an item
  if (!item) {
    return null;
  }

  return (
    <Link
      href={!isProfile ? `/course/${item._id}` : `course-access/${item._id}`}
    >
      <div className="w-full min-h-[35vh] backdrop-blur border border-[#00000015] rounded-lg p-3 shadow-sm transition-transform transform hover:shadow-2xl hover:-translate-y-1 hover:scale-105 hover:bg-blue-50  hover:text-blue-700">
        {/* Only render Image if thumbnailUrl exists */}
        {thumbnailUrl && (
          <Image
            src={thumbnailUrl}
            width={500}
            height={300}
            style={{ objectFit: "contain" }}
            className="rounded w-full"
            alt={item?.name || "Course Thumbnail"}
          />
        )}
        <br />
        <h1 className="font-Poppins text-[16px] text-black">
          {item.name}
        </h1>
        <div className="w-full flex items-center justify-between pt-2">
          <Ratings rating={item.ratings} />
          <h5
            className={`text-black ${isProfile && "hidden 800px:inline"}`}
          >
            {item.purchased} Students
          </h5>
        </div>
        <div className="w-full flex items-center justify-between pt-3">
          <div className="flex">
            <h3 className="text-black">
              {item.price === 0 ? "Free" : item.price + "$"}
            </h3>
            <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-black">
              {item.estimatedPrice}$
            </h5>
          </div>
          <div className="flex items-center pb-3">
            <AiOutlineUnorderedList size={20} fill="#fff" />
            <h5 className="pl-2 text-black">
              {item.courseData?.length} Lectures
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
