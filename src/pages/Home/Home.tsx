import Footer from "../../components/Footer";
import FourSteps from "./FourSteps";
import Hero from "./Hero";
import ThreeColumns from "./ThreeColumns";

// import { Link, animateScroll as scroll } from "react-scroll";
// {/* <Link to="section1"></Link> */}
const Home = () => {
  return (
    <>
      <Hero />
      <ThreeColumns />
      <FourSteps />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
