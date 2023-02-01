import Header from "./sections/header";
import SocialAccounts from "./sections/social-accounts";
import AboutMe from "./sections/about-me";
import Footer from "./sections/footer";
import NavBar from "./sections/nav";

export default function Home() {
  return (
    <div className="md:container mx-auto overflow-auto sm:p-0 xs:p-0 md:p-2">
      <NavBar />
      <Header />
      <SocialAccounts />
      <AboutMe />
      <Footer />
    </div>
  );
}
