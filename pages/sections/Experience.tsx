import React, { useState } from "react";
import  BulletIcon  from "../components/icons/BulletPoint";

export default function Experience() {
  const [selectedTab, setSelectedTab] = useState("dvt");

  const handleTabClick = (tabId: React.SetStateAction<string>) => {
    setSelectedTab(tabId);
  };

  return (
    <div className="mx-auto max-w-[974px] px-6 py-8 " id="experience">
      <h1 className="mb-6 text-4xl font-bold">Experience</h1>

      <div className="mx-auto flex max-w-[974px] bg-background">
        <div className="w-1/4">
          <nav className="sticky top-0 p-4 dark:bg-black">
            <div className=" border-l-2 border-blue-300">
              <div
                onClick={() => handleTabClick("dvt")}
                className={`${
                  selectedTab === "dvt"
                    ? " border-l-2 border-blue-500  text-blue-500"
                    : "hover:text-blue-300 dark:hover:bg-gray-700"
                } ml-[-2px] w-full cursor-pointer rounded-none px-4 py-5 text-left`}
              >
                DVT
              </div>
              <div
                onClick={() => handleTabClick("proto-energy")}
                className={`${
                  selectedTab === "proto-energy"
                    ? " border-l-2 border-blue-500 text-blue-500"
                    : "hover:text-blue-300 dark:hover:bg-gray-700"
                } ml-[-2px] w-full cursor-pointer rounded-none px-4 py-5 text-left`}
              >
                Proto Energy
              </div>

              <div
                onClick={() => handleTabClick("catch-taxi")}
                className={`${
                  selectedTab === "catch-taxi"
                    ? " border-l-2 border-blue-500 text-blue-500"
                    : "hover:text-blue-300 dark:hover:bg-gray-700"
                } ml-[-2px] w-full cursor-pointer rounded-none px-4 py-5 text-left`}
              >
                Catch Taxi
              </div>

              <div
                onClick={() => handleTabClick("jibutel")}
                className={`${
                  selectedTab === "jibutel"
                    ? " border-l-2 border-blue-500 text-blue-500"
                    : "hover:text-blue-300 dark:hover:bg-gray-700"
                } ml-[-2px] w-full cursor-pointer rounded-none px-4 py-5 text-left`}
              >
                Jibutel
              </div>
            </div>
          </nav>
        </div>
        <div className="w-3/4 p-4">
          {selectedTab === "dvt" && (
            <section>
              <h2 className="mb-4 text-2xl font-semibold">DVT</h2>
              <ul className="list-inside space-y-3 text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <BulletIcon />
                  Setup Micro-Frontends using NX, Material Ui and
                  react-hook-forms Reactjs and Webpack. Setup CI/CD pipelines
                  using Jenkins and Bitbucket.
                </li>
                <li className="flex items-center">
                  <BulletIcon />
                  State management with context API and module federation.
                </li>
                <li className="flex items-center">
                  <BulletIcon />
                  Implementing design wireframes. Implemented e2e and unit tests
                  with React testing library and jest.
                </li>
                <li className="flex items-center">
                  <BulletIcon />
                  Serverless computing with AWS CDK and Lambda functions and
                  Node js.
                </li>
                <li className="flex items-center">
                  <BulletIcon />
                  System maintenance of existing PPL legacy systems.
                </li>
                <li className="flex items-center">
                  <BulletIcon />
                  Task refinement and complexity estimation with Product owner
                  and Scrum master.
                </li>
                <li className="flex items-center">
                  <BulletIcon />
                  Support and collaboration during development.
                </li>
                <li className="flex items-center">
                  <BulletIcon />
                  Sprint reviews and presentations to business stake-holders.
                </li>
                <li className="flex items-center">
                  <BulletIcon />
                  Feature documentations.
                </li>
              </ul>
            </section>
          )}
          {selectedTab === "proto-energy" && (
            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                Proto Energy Limited
              </h2>
              <ul className="list-inside list-disc space-y-3">
                <li className="flex items-center">
                  <BulletIcon />
                  Created the Pro gas mini-app on Safaricom M-Pesa supper
                  application using javascript and xml.
                </li>
                <li className="flex items-center">
                  <BulletIcon /> Created a modern dashboard for supply chain
                  management increasing the efficiency of the sales and
                  logistics team by more than 70% using React js, Typescript and
                  Redux.{" "}
                </li>
                <li className="flex items-center">
                  <BulletIcon /> Implemented Backend services with Nodejs and
                  MySQL and REST APIS. Implemented e2e and unit tests with React
                  testing library and jest.
                </li>
                <li className="flex items-center">
                  <BulletIcon /> Provided mentorship to junior developers . Task
                  refinement and complexity estimation with Product owner and
                  Scrum master.
                </li>
                <li className="flex items-center">
                  <BulletIcon /> High level effort estimation. Sprint reviews
                  and presentations to business stake-holders. Feature
                  documentations.
                </li>
              </ul>
            </section>
          )}
          {selectedTab === "catch-taxi" && (
            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                Catch Taxi Limited
              </h2>
              <ul className="list-inside list-disc space-y-3">
                <li className="flex items-center">
                  <BulletIcon />
                  Created a registration system that allowed for registration of
                  70% of all Catch taxi drivers using React js, Material ui,
                  Typescript and redux.
                </li>
                <li className="flex items-center">
                  <BulletIcon /> Implemented unit tests using React testing
                  library and Jest.
                </li>
                <li className="flex items-center">
                  <BulletIcon />
                  Implemented e2e tests using cypress. Backend development with
                  Nodejs , PostgreSQL and Graphql.
                </li>
                <li className="flex items-center">
                  <BulletIcon /> Integrate google maps increasing fleet
                  visibility by 80% Trained and assigned tasks to junior
                  engineers.
                </li>
                <li className="flex items-center">
                  <BulletIcon />
                  Task refinement and complexity estimation with Product owner
                  and Scrum master.
                </li>
                <li className="flex items-center">
                  <BulletIcon /> High level effort estimation. Sprint reviews
                  and presentations to business stake-holders. Feature
                  documentations.
                </li>
              </ul>
            </section>
          )}
          {selectedTab === "jibutel" && (
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Jibutel Limited</h2>
              <ul className="list-inside list-disc space-y-3">
                <li className="flex items-center">
                  <BulletIcon />
                  Gained training on Linux server configurations and software
                  deployment.
                </li>
                <li className="flex items-center">
                  <BulletIcon />
                  Used Node.js, TypeScript, React JS, and MySQL to develop a
                  record tracking system.
                </li>
                <li className="flex items-center">
                  <BulletIcon />
                  Presentation and meetings with stakeholders to draw the
                  project road map.
                </li>
              </ul>
            </section>
          )}
        </div>
      </div>
      </div>
  );
}
