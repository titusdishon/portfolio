import React, { useState } from "react";
import BulletIcon from "../components/icons/BulletPoint";
import DVT from "./experience/Dvt";
import ProtoEnergy from "./experience/ProtoEnergy";
import CatchTaxi from "./experience/CatchTaxi";
import Jibutel from "./experience/Jibutel";

// Define a type for the tab years object
type TabYears = {
  [key: string]: string;
};

export default function Experience() {
  const [selectedTab, setSelectedTab] = useState("dvt");

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
  };

  // Use the defined type for tabYears
  const tabYears: TabYears = {
    dvt: "April 2022 - Present",
    "proto-energy": "Marh, 2021 - April, 2022",
    "catch-taxi": "Nov, 2019 -  March 2021",
    jibutel: " Dec, 2017 - Nov, 2019",
  };

  return (
    <div className="mx-auto max-w-[974px] px-6 py-8" id="experience">
      <h1 className="mb-6 rounded-br-[500px] rounded-tr-[500px] text-2xl font-bold text-blue-500 light:bg-gray-100 ">
        Experience
      </h1>
      <div className="mx-auto flex max-w-[974px] flex-col bg-background md:flex-row">
        <div className="w-full md:w-1/4">
          <nav className="p-0 py-4 dark:bg-black md:sticky md:top-0">
            <div className="md:border-l-2 md:border-blue-300">
              {/* Iterate through the tabs and add years */}
              {Object.keys(tabYears).map((tabId) => (
                <div
                  key={tabId}
                  onClick={() => handleTabClick(tabId)}
                  className={`${
                    selectedTab === tabId
                      ? "rounded-br-[500px] rounded-tr-[500px] bg-gray-100 text-blue-500 "
                      : "hover:text-blue-300 dark:hover:bg-gray-700"
                  } w-full cursor-pointer px-4 py-3 text-left`}
                >
                  {tabId.charAt(0).toUpperCase() + tabId.slice(1)}{" "}
                  {/* Capitalize the first letter */}
                  <br />
                  <span className="text-xs text-gray-500">
                    {tabYears[tabId]}
                  </span>
                </div>
              ))}
            </div>
          </nav>
        </div>
        <div className="w-full p-4 md:w-3/4">
          {selectedTab === "dvt" && <DVT />}
          {selectedTab === "proto-energy" && <ProtoEnergy />}
          {selectedTab === "catch-taxi" && <CatchTaxi />}
          {selectedTab === "jibutel" && <Jibutel />}
        </div>
      </div>
    </div>
  );
}
