import Calendar from "../assets/icons/calendar.svg";
import Location from "../assets/icons/location.svg";
import Users from "../assets/icons/grayUsers.svg";


const EventCard = ({ title, date, location, attendees, image }) => {
  return (
    <div>
        <div className=" max-w-[400px] mb-12 rounded-[10px] shadow-lg bg-white mx-auto">
        <img src={image} alt={title} className="w-full h-auto rounded-t-[10px]" />

        <div className="p-[20px]">
            <p className="text-[#101828] font-semibold text-[16px] md:text-[18px] lg:text-[20px] mb-[20px]">
            {title}
            </p>

            <div className="flex gap-[16px] items-center mb-2">
            <img src={Calendar} alt="Calendar Icon" className="w-[14px] h-[14px] lg:w-4 lg:h-4" />
            <p className="text-[#4A5565] text-[13px]  md:text-[14px] lg:text-base">{date}</p>
            </div>

            <div className="flex gap-[16px] items-center mb-2">
            <img src={Location} alt="Location Icon" className="w-[14px] h-[14px] lg:w-4 lg:h-4" />
            <p className="text-[#4A5565] text-[13px] md:text-[14px] lg:text-base">{location}</p>
            </div>

            <div className="flex gap-[16px] items-center">
            <img src={Users} alt="User Icon" className="w-[14px] h-[14px] lg:w-4 lg:h-4" />
            <p className="text-[#4A5565] text-[13px] md:text-[14px] lg:text-base">{attendees}</p>
            </div>
        </div>

        <div className="p-5">
            <button className="border border-[#D9D9D9] bg-white text-[#101828] w-full font-medium px-2 py-2 sm:px-6 sm:py-3 rounded-[6px] text-[12px] md:text-[14px] lg:text-[16px] ">
            Learn More
            </button>
        </div>
        </div>
    </div>
  );
};

export default EventCard;
