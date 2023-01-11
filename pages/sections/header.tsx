import Image from "next/image";
import MyImage from "../../public/titus-dishon.jpg";

export default function Header() {
  return (
    <div className="flex-col justify-center ">
      <Image
        className="w-60 h-80 my-12 mx-auto rounded-xl  hover:w-80 hover:h-80 "
        alt="TITUS DISHON"
        src={MyImage}
      />
      <h3 className="mx-auto text-center text-3xl font-extrabold w-full my-6 w-80 mx-auto bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Titus Mutiso Dishon
      </h3>
      <h3 className="mx-auto text-center text-xl font-extrabold w-full my-6 w-80 mx-auto bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Software Engineer
      </h3>
    </div>
  );
}
