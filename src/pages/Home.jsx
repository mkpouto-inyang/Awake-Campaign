import HeroSection from "../components/HeroSection";
import JoinTheMovementSection from "../components/JoinTheMovementSection";
import PartnersSection from "../components/PartnersSection";
import ProblemSection from "../components/ProblemSection";
import ScreeningCentres from "../components/ScreeningCenterSection";
import SolutionSection from "../components/SolutionSection";
import TestimonialSection from "../components/TestimonialSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import { LoadScript } from "@react-google-maps/api";

const Home = () => {
  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={["places"]}
    >
      <div>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PartnersSection />
        <WhatWeDoSection />
        <JoinTheMovementSection />
        <TestimonialSection />
        <ScreeningCentres />
      </div>
    </LoadScript>
  );
};

export default Home;
