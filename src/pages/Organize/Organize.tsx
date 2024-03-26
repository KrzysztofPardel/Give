import { Suspense, lazy } from "react";
import Loading from "../../Errors/Loading";

const HeroLazy = lazy(() => import("./Hero"));
const OrganizeStepsLazy = lazy(() => import("./OrganizeSteps"));
const MultiformLazy = lazy(() => import("./Multiform"));
const ContactLazy = lazy(() => import("../Home/Contact"));
const FooterLazy = lazy(() => import("../../components/Footer"));

const Organize = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HeroLazy />
      {/* <OrganizeStepsLazy /> */}
      <MultiformLazy />
      {/* <ContactLazy /> */}
      <FooterLazy />
    </Suspense>
  );
};

export default Organize;
