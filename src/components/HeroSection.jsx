import womenImage from '../assets/static-images/women-image.png';

const HeroSection = () => {
  return (
    <section className="w-full bg-teal-light h-[800px]">
      <div className=" px-4 text-center">
        <h1
          className="text-[70px] md:text-[140px] lg:text-[200px] font-bold text-transparent bg-clip-text bg-cover bg-center inline-block"
          style={{
            backgroundImage: `url(${womenImage})`,
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
