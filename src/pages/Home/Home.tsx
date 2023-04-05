import Footer from "../../components/Footer";
import AboutUs from "./AboutUs";
import FourSteps from "./FourSteps";
import Hero from "./Hero";
import ThreeColumns from "./ThreeColumns";
import WhoWeHelp from "./WhoWeHelp";
import Form from "./Form";

// import { Link, animateScroll as scroll } from "react-scroll";
// {/* <Link to="section1"></Link> */}
const Home = () => {
  return (
    <>
      <Hero />
      <ThreeColumns />
      <FourSteps />
      <AboutUs />
      <WhoWeHelp />
      <Form />
      <Footer />
    </>
  );
};

export default Home;
