import HeroSection from "../components/HeroSection";
import JoinTheMovementSection from "../components/JoinTheMovementSection";
import KeyPartnerSection from "../components/KeyPartnerSection";
import PartnersSection from "../components/PartnersSection";
import ProblemSection from "../components/ProblemSection";
import ScreeningCentres from "../components/ScreeningCenterSection";
import SolutionSection from "../components/SolutionSection";
import TestimonialSection from "../components/TestimonialSection";
import WhatWeDoSection from "../components/WhatWeDoSection";

const Home = () => {
  return (
      <div>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <KeyPartnerSection/>
        {/* <PartnersSection /> */}
        {/* <WhatWeDoSection /> */}
        <JoinTheMovementSection />
        <TestimonialSection />
        <ScreeningCentres />
      </div>
  );
};
export default Home;
