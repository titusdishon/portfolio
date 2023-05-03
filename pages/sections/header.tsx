import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Logo from "../../public/titusdishon.png";
import Image from "next/image";
import Link from "next/link";

dayjs.extend(relativeTime);

export default function Header() {
  const beginning = dayjs("2017-12-01");
  const experience = () => {
    return dayjs(beginning).toNow(true);
  };

  return (
    <div className="container justify-center">
      <div className="text-xl text-center bg-clip-text ">
        <Image className="w-150 h-150 mx-auto" alt="TITUS DISHON" src={Logo} />

        <p> Hi, My name is</p>
        <p>
          <span className="lg:text-3xl my-6 text-cyan-500  font-bold  bg-clip-text ">
            Titus M. Dishon
          </span>
        </p>
      </div>

      <div className="py-3 text-center">
        <Link
          type="Link"
          href="https://www.linkedin.com/in/titusdishon/"
          className="text-white bg-[#0077B5] hover:bg-[#0077B5]/90 focus:ring-4 focus:outline-none focus:ring-[#0077B5]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#0077B5]/55 mr-2 mb-2"
        >
          <svg
            className="w-4 h-4 mr-2 -ml-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="linkedin"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.5C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.6 416H69.2V192h66.4v224zm-33.2-256c-22.8 0-41.2-18.4-41.2-41.2 0-22.8 18.4-41.2 41.2-41.2s41.2 18.4 41.2 41.2c0 22.8-18.4 41.2-41.2 41.2zM416 416h-66.4V304c0-24.9-.5-57.1-34.6-57.1-34.6 0-39.9 27-39.9 54.9V416h-66.4V192h64.3v29.3h.9c8.9-16.8 30.7-34.6 63.4-34.6 68 0 80.6 44.8 80.6 103.1V416z"
            ></path>
          </svg>
          LinkedIn
        </Link>

        <Link
          type="Link"
          href="https://twitter.com/T__sayin"
          className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
        >
          <svg
            className="w-4 h-4 mr-2 -ml-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="twitter"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
            ></path>
          </svg>
          Twitter
        </Link>
        <Link
          type="Link"
          href="https://github.com/titusdishon"
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
        >
          <svg
            className="w-4 h-4 mr-2 -ml-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path
              fill="currentColor"
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            ></path>
          </svg>
          Github
        </Link>
        <Link
          type="Link"
          href="https://stackoverflow.com/users/8512080/tdishon"
          className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-orange-400 mr-2 mb-2"
        >
          <svg
            className="w-4 h-4 mr-2"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="stack-overflow"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M340.1 403.2l40.8-247.2C385.3 128 364.7 96 336 96H48c-28.7 0-49.3 32-25.9 56.1l40.8 247.2C79.9 424 100.6 448 128 448h128c27.4 0 48-24 36.1-44.8zM192 384h-64v-32h64v32zm0-64h-64v-32h64v32z"
            ></path>
          </svg>
          Stack Overflow
        </Link>
      </div>
      <p className="mb-3 mt-3">
        A software engineer with over {experience()} years of experience in
        frontend development, Reactjs, Typescript unit testing, e2e testing,
        Golang, PostgreSQL, and Node.js. I&apos;m passionate about building
        scalable and efficient software solutions that meet the needs of users
        and businesses alike.
      </p>
      <p className="mb-3">
        As a frontend developer, I specialize in Reactjs and have extensive
        experience building responsive and interactive user interfaces. I also
        have a strong background in Typescript unit testing and e2e testing,
        which allows me to ensure the quality and reliability of my code.
      </p>
      <p className="mb-3">
        In addition to my frontend development skills, I&apos;m also proficient
        in Golang and have experience building backend systems using PostgreSQL
        and Node.js. This gives me a comprehensive understanding of the full
        software development stack, from the frontend to the backend.
      </p>
      <p className="mb-3">
        If you&apos;re looking for a software engineer who can help you build
        high-quality, reliable software solutions, look no further. I&apos;m
        excited to work with you and help bring your ideas to life.
      </p>

      <div className="mx-auto text-center py-3">
        Transforming Ideas into Reality?
      </div>
      <div className="mx-auto text-center">
        <Link
          type="Link"
          href="/pages/projects"
          className="cyan-500-700 border border-cyan-500 hover:bg-cyan-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-500 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:focus:ring-cyan-500 dark:hover:bg-cyan-500"
        >
          Check My Portfolio
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
