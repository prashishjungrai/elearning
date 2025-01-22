import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import Loader from "../../Loader/Loader";
import { useGetCoursesAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import { styles } from "@/app/styles/style";

type Props = {};

const CourseAnalytics = (props: Props) => {
  const { data, isLoading } = useGetCoursesAnalyticsQuery({});

  // Fallback data in case API is not providing the data yet
  const analyticsData = data?.length
    ? data
    : [
        { name: "Jun 2023", uv: 3 },
        { name: "July 2023", uv: 2 },
        { name: "August 2023", uv: 5 },
        { name: "Sept 2023", uv: 7 },
        { name: "October 2023", uv: 2 },
        { name: "Nov 2023", uv: 5 },
        { name: "December 2023", uv: 7 },
      ];

  const minValue = 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="h-screen">
          {/* Title Section */}
          <div className="mt-[50px]">
            <h1 className={`${styles.title} px-5 !text-start`}>
              Courses Analytics
            </h1>
            <p className={`${styles.label} px-5`}>
              Last 12 months analytics data{" "}
            </p>
          </div>

          {/* Chart Section */}
          <div className="w-full h-[90%] flex items-center justify-center">
          <ResponsiveContainer width="90%" height="50%">
  <BarChart width={150} height={300} data={analyticsData}>
    <XAxis
      dataKey="name"
      tick={{
        fontSize: 12,
        fill: "#333",
      }}
      interval={0}
      angle={-45}
      dy={10}
      tickLine={false}
    />
    <YAxis domain={[minValue, "auto"]} />
    <Bar dataKey="uv" fill="#3faf82" barSize={40}>
      <LabelList dataKey="uv" position="top" />
    </Bar>
  </BarChart>
</ResponsiveContainer>

          </div>
        </div>
      )}
    </>
  );
};

export default CourseAnalytics;
