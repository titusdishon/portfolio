import Footer from "./components/Footer";
import CustomNavbar from "./components/NavBar";
import SocialMedia from "./components/SocialMedia";
import AboutMe from "./sections/AboutMe";
import Contacts from "./sections/Contacts";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Introduction from "./sections/Introduction";
import Portfolio from "./sections/Portfolio";

export default function Home() {
  return (
    <div >
      <CustomNavbar />
      <Introduction />
      <AboutMe/>
      <Education/>
      <Experience/>
      <Portfolio/>
      <Contacts/>
      <Footer/>
    </div>
  );
}
