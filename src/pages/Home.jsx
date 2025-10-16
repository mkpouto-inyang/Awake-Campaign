import HeroSection from "../components/HeroSection";
import JoinTheMovementSection from "../components/JoinTheMovementSection";
import PartnersSection from "../components/PartnersSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import TestimonialSection from "../components/TestimonialSection";
import WhatWeDoSection from "../components/WhatWeDoSection";

const Home = () => {
    return ( 
        <div>
             <HeroSection/>
             <ProblemSection/>
             <SolutionSection/>
             <PartnersSection/>
             <WhatWeDoSection/>
             <JoinTheMovementSection/>
             <TestimonialSection/>
        </div>
     );
}
 
export default Home;