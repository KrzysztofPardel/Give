import Footer from "../../components/Footer";
import AboutUs from "./AboutUs";
import FourSteps from "./FourSteps";
import Hero from "./Hero";
import ThreeColumns from "./ThreeColumns";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <ThreeColumns />
      <FourSteps />
      <AboutUs />
      <WhoWeHelp />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
