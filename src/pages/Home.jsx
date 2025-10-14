import HeroSection from "../components/HeroSection";
import PartnersSection from "../components/PartnersSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import WhatWeDoSection from "../components/WhatWeDoSection";

const Home = () => {
    return ( 
        <div>
             <HeroSection/>
             <ProblemSection/>
             <SolutionSection/>
             <PartnersSection/>
             <WhatWeDoSection/>
        </div>
     );
}
 
export default Home;