import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <ul className="flex w-full items-center justify-center sticky bg-gray-100 h-16 top-0">
      <li className="mx-6">
        <Link href="/">Home</Link>
      </li>
      <li className="mx-6">
        <Link href="/components/experience">Experience</Link>
      </li>
      <li className="mx-6">
        <Link href="/components/projects">Projects</Link>
      </li>
      <li className="mx-6">
        <Link href="/components/blogs">Blogs</Link>
      </li>
    </ul>
  );
}
