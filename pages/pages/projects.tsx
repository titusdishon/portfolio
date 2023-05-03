import NavBar from "../sections/nav";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="container lg:w-6/12 p-10">
      <NavBar />
      <ul className="mb-8 space-y-4 text-left mt-8 ">
        <li className="pb-3 sm:pb-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <a
                href="https://github.com/titusdishon/go-concepts"
                className="text-2xl font-medium "
              >
                Simple Bank Application
              </a>
              <p className="text-lg mt-3">
                <a href="https://github.com/titusdishon/go-concepts">
                  Simple transactional application developed as part of the
                  golang masterclass training
                </a>
              </p>
              <p className="text-lg mt-3">
                <a href="https://github.com/titusdishon/go-concepts">
                  In development ....
                </a>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
