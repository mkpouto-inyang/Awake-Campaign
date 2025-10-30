import clock from "../assets/icons/dark-clock.svg";
import donateHeart from "../assets/icons/donate-heart.svg";
import Button from "./Button";
import award from "../assets/icons/award.svg"
import shareIcon from "../assets/icons/share.svg"

const JoinTheMovementSection = () => {
  return (
    <>
<section className="bg-[#E4F8F3]/70 pt-[80px] pb-[100px] px-5">
  <div className="max-w-[1200px] mx-auto">
    <div className="flex justify-center autoShow">
      <h1 className="font-bold text-[20px] md:text-[38px] lg:text-[50px] text-blue-dark text-center mb-3 lg:mb-6">
        Join the Movement
      </h1>
    </div>

    <p className="text-[12px] md:text-[14px] lg:text-[18px] max-w-4xl text-[#4A5565] text-center mx-auto mb-10 autoShow">
      Together, we can raise awareness, save lives, and bring hope.
    </p>

    <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mt-10 md:mt-20 ">
      {/* Donate Card */}
      <div className="bg-white shadow-md rounded-[10px] w-[320px] lg:w-[360px] p-6 flex flex-col justify-between min-h-[350px] autoShow">
        <div className="flex flex-col items-center gap-5">
          <div className="bg-[#D5F5EC] rounded-full p-3">
            <img src={donateHeart} alt="Donate" className="w-6 h-6" />
          </div>
          <h3 className="text-[#101828] font-semibold text-xl lg:text-2xl text-center">Donate</h3>
          <p className="text-[#4A5565] text-sm lg:text-base text-center">
            Your contribution helps fund screening programs, educational materials, and support services for women in need.
          </p>
        </div>

        <Button variant="primary" className="mt-6 mb-4 w-full text-[14px] lg:text-base">
          Make a Donation
        </Button>
      </div>

      {/* Challenge Card */}
      <div className="bg-white shadow-md rounded-[10px] w-[320px] lg:w-[360px] p-6 flex flex-col justify-between min-h-[350px] autoShow">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-[#D5F5EC] rounded-full p-3">
            <img src={award} alt="Challenge" className="w-6 h-6" />
          </div>
          <h3 className="text-[#101828] font-semibold text-xl lg:text-2xl text-center">Join the Challenge</h3>
          <p className="bg-[#FBF6CB] text-[#101828] px-4 py-1 text-sm rounded-full">
            Winner gets ₦ 200,000
          </p>
          <p className="text-[#4A5565] text-sm lg:text-base text-center">
            Create a mini project to spread cervical cancer awareness in your community, incorporating the AWAKE film.
          </p>
        </div>

        <Button variant="primary" className="mt-6 mb-4 w-full text-[14px] lg:text-base">
          Take the Challenge
        </Button>
      </div>

      {/* Share Story Card */}
      <div className="bg-white shadow-md rounded-[10px] w-[320px] lg:w-[360px] p-6 flex flex-col justify-between min-h-[370px] autoShow">
        <div className="flex flex-col items-center gap-5">
          <div className="bg-[#D5F5EC] rounded-full p-3">
            <img src={shareIcon} alt="Share Story" className="w-6 h-6" />
          </div>
          <h3 className="text-[#101828] font-semibold text-xl lg:text-2xl text-center">Share Your Story</h3>
          <p className="text-[#4A5565] text-sm lg:text-base text-center">
            Your experience can inspire others. Share your story of prevention, survival, or loss to help save lives.
          </p>
        </div>

        <Button variant="primary" className="mt-6 mb-4 w-full text-[14px] lg:text-base">
          Share Your Story
        </Button>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default JoinTheMovementSection;
