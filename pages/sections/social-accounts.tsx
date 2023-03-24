import { BsTwitter, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export default function SocialAccounts() {
  return (
    <div className="container p-3">
      <h4 className=" text-4xl my-6  bg-clip-text font-bold leading-snug hover:opacity-75">
        How to find me
      </h4>
      <div className="flex lg:space-x-4 flex-wrap ">
        <a
          href="https://twitter.com/T__sayin"
          className="flex cursor-pointer items-center px-4 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="a"
        >
          <BsTwitter className="h-8 w-8 mx-2" /> @T_Sayin
        </a>
        <a
          href="https://www.linkedin.com/in/titusdishon/"
          target="_blank"
          className="flex cursor-pointer items-center px-4 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="a"
          rel="noreferrer"
        >
          <FaLinkedinIn className="h-8 w-8 mx-2" /> @titusdishon
        </a>
        <a
          href="mailto:titusdisho@gmail.com"
          target="_blank"
          className="flex cursor-pointer items-center px-4 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="a"
          rel="noreferrer"
        >
          <MdEmail className="h-8 w-8  mx-2" /> @titusdishon
        </a>
        <a
          href="https://github.com/titusdishon"
          target="_blank"
          className="flex cursor-pointer items-center px-4 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="a"
          rel="noreferrer"
        >
          <BsGithub className="h-8 w-8 mx-2" /> @titusdishon
        </a>
      </div>
    </div>
  );
}
