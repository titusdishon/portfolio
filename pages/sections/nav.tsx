import Link from "next/link";

export default function NavBar() {
  return (
    <ul className="flex w-full items-center justify-center sticky bg-gray-100 h-16 top-0 m-0 p-0">
      <li className="mx-6">
        <Link href="/">Home</Link>
      </li>
      <li className="mx-6">
        <Link href="/pages/projects">Projects</Link>
      </li>
      <li className="mx-6">
        <Link href="/pages/blogs">Blog</Link>
      </li>
      <li className="mx-6">
        <Link href="/pages/contacts">Contacts</Link>
      </li>
    </ul>
  );
}
