import Footer from "./components/Footer";
import CustomNavbar from "./components/NavBar";
import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Introduction from "./sections/Introduction";

export default function Home() {
  return (
    <div >
      <CustomNavbar />
      <Introduction />
      <AboutMe/>
      <Experience/>
      <Footer/>
    </div>
  );
}
