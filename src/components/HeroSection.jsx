import womenImage from '../assets/static-images/women-image.png';

const HeroSection = () => {
  return (
    <section className="w-full bg-teal-light h-[800px] flex flex-col items-center">
      <div className="relative text-center flex items-center justify-center w-fit">
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
    </section>
  );
};

export default HeroSection;
