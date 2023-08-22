import React from "react";

export default function Portfolio() {
  return (
    <div
      className="animate-background mx-auto max-w-[974px] bg-background px-6 py-8"
      id="portfolio"
    >
      <div className="container">
      <h1 className="mb-6 text-2xl font-bold text-blue-500 light:bg-gray-100 rounded-tr-[500px] rounded-br-[500px] text-blue-500">Portfolio</h1>
        <p className="mb-8 text-lg">
          I&apos;ve crafted digital solutions across various industries.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg light:bg-gray-100  p-6 shadow-sm">
            <h3 className="mb-2 text-xl light:text-gray-600 font-semibold">
              Transport and Logistics
            </h3>
            <p className="mb-4 dark:text-gray-400">
              Revolutionizing the way goods move efficiently.
            </p>
          </div>

          <div className="rounded-lg light:bg-gray-100  p-6 shadow-sm">
            <h3 className="mb-2 text-xl  light:text-black-600 font-semibold">Lottery</h3>
            <p className="mb-4 dark:text-gray-400">
              Building lottery gaming systems using various technologies to improve user experience 
            </p>
          </div>
          <div className="rounded-lg light:bg-gray-100 p-6 shadow-sm">
            <h3 className="mb-2 text-xl light:text-gray-600 font-semibold">Supply Chain</h3>
            <p className="mb-4 dark:text-gray-400">
              Building goods tracking systems to improve the supply chain system from manufacturer to end user 
            </p>
          </div>

          <div className="rounded-lg light:bg-gray-100  p-6 shadow-sm">
            <h3 className="mb-2 light:text-gray-400 text-xl font-semibold">
              Government Tracking Systems
            </h3>
            <p className="mb-4 dark:text-gray-400">
              Enhancing transparency and efficiency through technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
