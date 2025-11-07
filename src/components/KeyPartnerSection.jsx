import sebecclyLogo from "../assets/icons/company-logos/Sebeccly-logo.svg";

const KeyPartnerSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 mb-16">
      {/* Title */}
      <div className="flex justify-center autoShow mb-6">
        <h1 className="font-bold text-[20px] md:text-[38px] lg:text-[50px] text-blue-dark text-center mb-10">
          Our Key Partner
        </h1>
      </div>

      <div className="flex justify-center px-4 md:px-6 lg:px-10 mt-10 mb-16 autoShow">
        <div className="relative bg-teal-dark rounded-2xl shadow-xl max-w-4xl w-full text-center px-6 md:px-12 pb-10 md:pb-14">
          {/* Floating Logo */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">

            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden ">
              <img
                src={sebecclyLogo}
                alt="Sebeccly Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-16 md:text-base text-white leading-relaxed ">
            <h3 className="font-bold text-[18px] md:text-2xl mb-4">
              Sebeccly Cancer Care
            </h3>

            <p className="mb-4 text-sm md:text-base">
              Founded in 2006, Sebeccly is a non-profit dedicated to improving
              cancer survival rates in Nigeria through awareness, screening, and
              patient support.
            </p>
            <p className="text-sm md:text-base">
              They're known for initiatives like the <strong>#12KLLP</strong>{" "}
              Guinness World Record breast cancer campaign,{" "}
              <strong>#TimeToScreen</strong> (screening over 12,000 women), and{" "}
              <strong>#ChangeHerCancerStory</strong>, which funds treatment for
              indigent patients.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <p className="text-[12px] smd:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-blue-dark leading-relaxed text-center mt-12 md:mt-20 autoShow">
        Interested in partnering with us?
        <a
          href="/contact"
          className="text-orange underline hover:text-orange- ml-2"
        >
          Get in touch
        </a>
      </p>
    </div>
  );
};

export default KeyPartnerSection;
