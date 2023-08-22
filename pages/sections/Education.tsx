import React from "react";
import BulletIcon from "../components/icons/BulletPoint";
type DotData = {
  school: string;
  year: number;
  grade: string;
};
const VerticalDots: React.FC<{ data: DotData[] }> = ({ data }) => {
  return (
    <div className="flex items-center">
      {data.map((item, index) => (
        <div key={index} className="flex items-center">
          {/* Dot */}
          <div className="h-4 w-4 rounded-full bg-black"></div>
          {/* Vertical Line (except for the last item) */}
          {index < data.length - 1 && <div className="h-10 w-1 bg-black"></div>}
          {/* Information */}
          <div className="ml-2">
            <div className="font-semibold">{item.school}</div>
            <div>{`Year: ${item.year}`}</div>
            <div>{`Grade: ${item.grade}`}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default function Education() {
  const dotsData: DotData[] = [
    {
      school: "School A",
      year: 2022,
      grade: "A+",
    },
    {
      school: "School B",
      year: 2023,
      grade: "B",
    },
    {
      school: "School C",
      year: 2024,
      grade: "A",
    },
  ];
  return (
    <div
      className="animate-background mx-auto max-w-[974px] bg-background px-6 py-8"
      id="education"
    >
      <h1 className="mb-6 text-2xl font-bold  light:bg-gray-100 rounded-tr-[500px] rounded-br-[500px] text-blue-500">Education</h1>
      <ul className="list-none ">
        <li className="relative flex items-center">
          <BulletIcon />
          <div className="pt-10">
            <p>Moi University </p>
            <p className=" text-gray-500 dark:text-gray-400">2014-2018</p>
            <p className=" text-gray-500 dark:text-gray-400">BSC Computer Science</p>
          </div>
        </li>
        <li className="relative flex items-center">
          <BulletIcon />
          <div className="pt-10">
            <p>ST Mary&apos;s Viwandani Sec School </p>
            <p className=" text-gray-500 dark:text-gray-400">High school diploma</p>
            <p className=" text-gray-500 dark:text-gray-400">2010-2013</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
