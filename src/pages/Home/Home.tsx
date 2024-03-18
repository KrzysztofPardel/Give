import { Suspense, lazy } from "react";
import Loading from "../../Errors/Loading";

const HeroLazy = lazy(() => import("./Hero"));
const ThreeColumnsLazy = lazy(() => import("./ThreeColumns"));
const FourStepsLazy = lazy(() => import("./FourSteps"));
const AboutLazy = lazy(() => import("./AboutUs"));
const WhoWeHelpLazy = lazy(() => import("./WhoWeHelp"));
const ContactLazy = lazy(() => import("../Home/Contact"));
const FooterLazy = lazy(() => import("../../components/Footer"));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      {/* <HeroLazy /> */}
      {/* <ThreeColumnsLazy /> */}
      {/* <FourStepsLazy /> */}
      {/* <AboutLazy /> */}
      {/* <WhoWeHelpLazy /> */}
      {/* <ContactLazy /> */}
      <FooterLazy />
    </Suspense>
  );
};

export default Home;
