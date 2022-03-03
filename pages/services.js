import WelcomeServices from "../components/services/welcome.component";
import FrontendServices from "../components/services/frontEnd.component";
import BackendServices from "../components/services/backEnd.component";
import DesignServices from "../components/services/design.component";

const Services = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-screen fixed bg-[#f8f8ff] dark:bg-backDark left-0 right-0"></div>
      <WelcomeServices />
      <FrontendServices />
      <BackendServices />
      <DesignServices />
    </div>
  );
};

export default Services;
