import Header from "./sections/header";
import NavBar from "./sections/nav";

export default function Home() {
  return (
    <div className="container lg:w-6/12 p-10 ">
      <NavBar />
      <Header />
    </div>
  );
}
