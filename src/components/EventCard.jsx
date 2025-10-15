import Calendar from "../assets/icons/calendar.svg";
import Location from "../assets/icons/location.svg";
import Users from "../assets/icons/grayUsers.svg";

const EventCard = ({ title, date, location, attendees, image }) => {
  return (
    <div className=" max-w-[400px] rounded-[10px] shadow-lg bg-white mx-auto">
      <img src={image} alt={title} className="w-full h-auto rounded-t-[10px]" />

      <div className="p-[20px]">
        <p className="text-[#101828] font-semibold text-[20px] mb-[20px]">
          {title}
        </p>

        <div className="flex gap-[16px] items-center mb-2">
          <img src={Calendar} alt="Calendar Icon" className="w-4 h-4" />
          <p className="text-[#4A5565]">{date}</p>
        </div>

        <div className="flex gap-[16px] items-center mb-2">
          <img src={Location} alt="Location Icon" className="w-4 h-4" />
          <p className="text-[#4A5565]">{location}</p>
        </div>

        <div className="flex gap-[16px] items-center">
          <img src={Users} alt="User Icon" className="w-4 h-4" />
          <p className="text-[#4A5565]">{attendees}</p>
        </div>
      </div>

      <div className="p-5">
        <button className="border border-[#D9D9D9] bg-white text-[#101828] w-full font-medium py-[12px] rounded-[6px]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EventCard;
