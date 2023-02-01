import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function SocialAccounts() {
  return (
    <div className="container ">
      <h4 className=" text-3xl my-6  bg-clip-text">Where to find me</h4>
      <div className="flex  space-x-4 ">
        <div className="flex-column justify-center text-center">
          <BsTwitter className="h-12 w-12 cursor-pointer fill-blue-500" />
          <span className="max-auto w-full">@T_Sayin</span>
        </div>
        <div className="flex-column justify-center text-center">
          <BsLinkedin className="h-12 w-12 cursor-pointer fill-blue-500" />
          <span className="max-auto w-full">@titusdishon</span>
        </div>
        <div className="flex-column justify-center text-center">
          <MdEmail className="h-12 w-12 cursor-pointer fill-blue-500" />
          <span className="max-auto w-full">@titusdishon</span>
        </div>
        <div className="flex-column justify-center text-center">
          <BsGithub className="h-12 w-12 cursor-pointer fill-black-500" />
          <span className="max-auto w-full">@titusdishon</span>
        </div>
      </div>
    </div>
  );
}
