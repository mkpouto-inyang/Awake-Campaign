import womenImage from '../assets/static-images/women-image.png';
import cancerRibbon from '../assets/icons/cancer-ribbon.svg'
import Button from './Button';

const HeroSection = () => {
  return (
    <section className="w-full bg-teal-light h-[800px] flex flex-col items-center">
        <div></div>
      <div className="relative text-center flex items-center  w-fit">
        {/* Shadow text (underneath) */}
        <h1
          className="absolute top-1.5 left-1 text-[70px] smd:text-[100px] md:text-[120px] mdlg:text-[140px] lg:text-[180px] lgxl:text-[220px] xl:text-[280px] font-bold text-black/40 blur-[5px] select-none"
          aria-hidden="true"
        >
          AWAKE
        </h1>

        {/* Foreground text (with image) */}
        <h1
          className="relative text-[70px] md:text-[120px] smd:text-[100px] mdlg:text-[140px] lg:text-[180px] lgxl:text-[220px] xl:text-[280px] font-bold text-transparent bg-clip-text bg-cover bg-center inline-block"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${womenImage})`,
            backgroundPosition: '50% 90%',
            backgroundSize: 'cover',
          }}
        >
          AWAKE
        </h1>
      </div>

      <div>
        <img 
            src={cancerRibbon} 
            alt="cancer Ribbon"
            className='w-4 h-4 md:w-7 md:h-7 mdlg:mt-[-40px]'
        />
      </div>

      <div>
         <p className='text-[11px] md:text-[18px] lg:text-[22px] mt-3 font-semibold text-teal-darkest'>Eyes Open. Take Action. Help Others Do the Same</p>
      </div>

        <div className="px-5">
        <p className="text-[12px] smd:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] max-w-7xl mx-auto text-gray-700 leading-relaxed text-center mt-6 lg:mt-4">
            Through film, <i>Awake</i> shines a light on cervical cancer in Nigeria.
            We raise awareness, spark conversations, and help women take action for their health.
        </p>
        </div>

        <div className="mt-12 px-4">
            <Button
                variant="primary"
                className="
                text-xs smd:text-sm md:text-base
                px-6 md:px-8 lg:px-10
                py-2 lg:py-3 rounded-[6px]"
            >
                Join the Movement
            </Button>
        </div>
    </section>
  );
};

export default HeroSection;
