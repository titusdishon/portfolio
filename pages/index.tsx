import Header from "./sections/header";
import SocialAccounts from "./sections/social-accounts";
import AboutMe from "./sections/about-me";
import Footer from "./sections/footer";
import NavBar from "./sections/nav";

export default function Home() {
  return (
    <div className="p-0 overflow-auto">
      <NavBar />
      <Header />
      <SocialAccounts />
      <AboutMe />
      <Footer />
    </div>
  );
}
