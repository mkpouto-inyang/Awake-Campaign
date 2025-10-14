import InfiniteScroll from "./InfiniteScrollBox";

const PartnersSection = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="font-bold text-[20px] md:text-[38px] mdlg:text-[40px] lg:text-[50px] text-blue-dark text-center lg:mb-10">
          Our Partners
        </h1>
      </div>

        <p className="text-[12px] smd:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] max-w-6xl  text-blue-dark leading-relaxed text-center px-2 xl:px-0 mx-auto mb-12 md:mb-20">
        Our work is made possible through the support of our trusted partners who share our vision of a Nigeria free from cervical cancer
      </p>

      <InfiniteScroll/>

      <p className="text-[12px] smd:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] max-w-6xl text-blue-dark leading-relaxed text-center px-2 xl:px-0 mx-auto mb-12 md:mb-20">
        Interested in partnering with us?
        <a href="/contact" className="text-orange underline hover:text-orange- ml-2">
          Get in touch
        </a>
      </p>
    </div>
  );
};

export default PartnersSection;
