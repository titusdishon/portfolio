import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function SocialAccounts() {
  return (
    <div className="flex justify-center ">
      <div className="flex-column justify-center text-center">
        <BsTwitter className="h-12 w-12 mx-12 cursor-pointer fill-blue-500" />
        <span className="max-auto w-full">@T_Sayin</span>
      </div>
      <div className="flex-column justify-center text-center">
        <BsLinkedin className="h-12 w-12 mx-12 cursor-pointer fill-blue-500" />
        <span className="max-auto w-full">@titusdishon</span>
      </div>
      <div className="flex-column justify-center text-center">
        <MdEmail className="h-12 w-12 mx-12 cursor-pointer fill-blue-500" />
        <span className="max-auto w-full">@titusdishon</span>
      </div>
      <div className="flex-column justify-center text-center">
        <BsGithub className="h-12 w-12 mx-12 cursor-pointer fill-black-500" />
        <span className="max-auto w-full">@titusdishon</span>
      </div>
    </div>
  );
}
