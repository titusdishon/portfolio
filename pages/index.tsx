import Header from "./sections/header";
import SocialAccounts from "./sections/social-accounts";
import Summary from "./sections/summary";
import Footer from "./sections/footer";
import NavBar from "./sections/nav";

export default function Home() {
  return (
    <div className="p-0">
      <NavBar />
      <Header />
      <SocialAccounts />
      <Summary />
      <Footer />
    </div>
  );
}
