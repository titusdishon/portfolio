import { BsTwitter, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export default function SocialAccounts() {
  return (
    <div className="container p-3">
      <h4 className=" text-3xl my-6  bg-clip-text text-sm uppercase font-bold leading-snug hover:opacity-75">Where to find me</h4>
      <div className="flex lg:space-x-4 flex-wrap ">
        <button
          className="flex bg-blue-500 text-white active:bg-pink-600 font-bold uppercase items-center px-4 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <BsTwitter className="h-8 w-8 cursor-pointer mx-2" />{" "}
          @T_Sayin
        </button>
        <button
            className="flex  bg-blue-500 text-white active:bg-pink-600 font-bold uppercase items-center px-4 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
        >
          <FaLinkedinIn className="h-8 w-8 cursor-pointer mx-2" />{" "}
          @titusdishon
        </button>
        <button
            className="flex bg-blue-500 text-white active:bg-pink-600 font-bold uppercase items-center px-4 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
        >
          <MdEmail className="h-8 w-8 cursor-pointer mx-2" />{" "}
          @titusdishon
        </button>
        <button
            className="flex bg-blue-500 text-white active:bg-pink-600 font-bold uppercase items-center px-4 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
        >
          <BsGithub className="h-8 w-8 cursor-pointer mx-2" />{" "}
          @titusdishon
        </button>
      </div>
    </div>
  );
}
