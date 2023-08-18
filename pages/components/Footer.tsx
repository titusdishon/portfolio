import { Avatar } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="m-4 rounded-lg max-w-[974px] px-6 py-8 mx-auto">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="mb-4 flex items-center sm:mb-0"
          >
            
            <Avatar
              src="/logo-no-bg.png"
              className="p-1 h-12 w-12 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
              TITUS.M.DISHON
            </span>
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About Me
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Experience
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            TMD™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
