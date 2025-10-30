import '../custom-css/animations.css'
import CountUpNumber from './CountUpNumber';

const ProblemSection = () => {
  return (
    <div className="px-[20px] md:px-[24px] bg-blue-dark text-white py-[60px] md:py-[80px] lg:py-[130px] ">
      <div className="flex justify-center ">
        <h1 className="font-bold text-[20px] md:text-[38px] mdlg:text-[40px] lg:text-[50px] autoShow ">
          The Problem We’re Facing
        </h1>
      </div>

      <p className=" autoShow text-[12px] smd:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] max-w-6xl  text-text-grey-light leading-relaxed text-center mt-6 lg:mt-4 px-2 xl:px-0 mx-auto mb-12 md:mb-20 md:w-[87%]">
        Cervical cancer is the second most common cancer among women in Nigeria,
        yet it’s largely preventable and treatable when detected early.
        Thousands of women lose their lives each year due to lack of awareness,
        limited access to screening, and delayed treatment.
      </p>

      <div className=" mt-10 mb-10 flex flex-wrap justify-center gap-x-[20px] lg:gap-x-[44px] gap-y-8 max-w-6xl mx-auto">
        <div className="autoScaleIn p-5 md:p-[40px] shadow-md bg-white rounded-[8px] text-center flex-[1_0_250px] max-w-[340px]">
          <p className="text-orange text-[20px] lg:text-3xl font-semibold mb-1">
            <CountUpNumber target={12000} duration={800}/>+
          </p>
          <p className=" text-[12px] md:text-sm lg:text-base text-blue-dark">
            New cases annually in Nigeria
          </p>
        </div>

        <div className="autoScaleIn p-5 md:p-[40px] shadow-md bg-white rounded-[8px] text-center flex-[1_0_250px] max-w-[340px]">
          <p className="text-orange text-[20px] lg:text-3xl font-semibold">
            <CountUpNumber target={8000} duration={800}/>+
          </p>
          <p className="text-[12px] md:text-sm lg:text-base text-blue-dark">
            Deaths per year
          </p>
        </div>

        <div className="autoScaleIn p-5 md:p-[40px] shadow-md bg-white rounded-[8px] text-center flex-[1_0_250px] max-w-[340px]">
          <p className="text-orange text-[20px] lg:text-3xl font-semibold">
            1 in {' '} 
            <CountUpNumber target={53} duration={800}/>
            
          </p>
          <p className="text-[12px] md:text-sm lg:text-base text-blue-dark">
            Women at Risk
          </p>
        </div>
      </div>

      <div className="max-w-4xl flex flex-col items-center mx-auto bg-teal-dark py-7 lg:px-10 rounded-[8px] lg:mt-20 autoScaleIn">
        <h2 className="font-bold text-[20px] md:text-[25px] mdlg:text-[28px] lg:text-[30px]">But there’s hope</h2>
        <p className="text-[12px] smd:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] max-w-6xl text-gray-100 leading-relaxed text-center mt-6 lg:mt-4 px-2 xl:px-0 mx-auto mb-4">
        With regular screening, HPV vaccination, and increased awareness, we can dramatically reduce these numbers. That’s why the AWAKE campaign exists- to educate, empower and save lives through prevention.
      </p>
      </div>
    </div>
  );
};

export default ProblemSection;
