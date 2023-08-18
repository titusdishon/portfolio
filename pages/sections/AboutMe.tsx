import React from "react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="mx-auto flex max-w-[974px] flex-col bg-background px-6 py-8 md:flex-row">
      <div className="flex-grow pr-8 md:w-2/3">
        <h1 className="mb-6 text-4xl font-bold">About Me</h1>
        <p className="text-text mt-4 py-2 text-base">
         I&apos;m a passionate software engineer skilled in crafting seamless user
          experiences using <strong>React.js</strong> and{" "}
          <strong>TypeScript</strong>. My front-end expertise allows me to
          architect elegant and scalable UI components.
        </p>
        <p className="text-text mt-4 py-2 text-base">
          On the back end, I&apos;m  proficient in <strong>Golang</strong> and{" "}
          <strong>Node.js</strong> for building high-performance and reliable
          services. For databases, I&apos;m  well-versed in{" "}
          <strong>PostgreSQL</strong> and <strong>SQL</strong> for structured
          data, as well as <strong>MongoDB</strong> for flexible NoSQL
          solutions.
        </p>
        <p className="text-text mt-4 py-2 text-base">
          Leveraging <strong>AWS</strong>, I deploy and manage applications at
          scale. Quality is paramount, and I ensure code integrity through
          rigorous <strong>testing</strong> practices including unit,
          integration, and end-to-end testing.
        </p>
        <p className="text-text mt-4 py-2 text-base">
          I&apos;m  enthusiastic about exploring innovative technologies and
          contributing to cutting-edge projects.
        </p>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/3">
        <Image
          width={700}
          height={700}
          src="/titusdishon.png"
          className="h-full w-full rounded-lg object-cover shadow-md"
          alt="profile"
        />
      </div>
    </div>
  );
}
