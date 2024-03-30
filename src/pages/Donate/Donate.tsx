import { Suspense, lazy } from "react";
import Loading from "../../Errors/Loading";

const HeroLazy = lazy(() => import("./Hero"));
const MultiformLazy = lazy(() => import("./Multiform"));
const ContactLazy = lazy(() => import("../Home/Contact"));
const FooterLazy = lazy(() => import("../../components/Footer"));

const Donate = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HeroLazy />
      <MultiformLazy />
      <ContactLazy />
      <FooterLazy />
    </Suspense>
  );
};

export default Donate;
