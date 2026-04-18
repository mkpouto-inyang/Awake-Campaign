import Calendar from "../assets/icons/calendar.svg";
import Location from "../assets/icons/location.svg";
import Users from "../assets/icons/grayUsers.svg";
import Clock from "../assets/icons/gray-clock.svg";

const EventCard = ({
  title,
  date,
  time,
  venue,
  attended,
  image,
  onClick,
  showViewDetails = false,
}) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const parsed = new Date(dateString);
    if (isNaN(parsed)) return dateString;

    return parsed.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      className={`group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col ${
        onClick ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
    >
      <div className="h-48 bg-gray-100 relative overflow-hidden flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 leading-snug ">
          {title}
        </h3>

        <div className="space-y-2 mb-4 text-[12px] md:text-sm text-gray-600">
          {date && (
            <div className="flex items-start gap-3">
              <img src={Calendar} alt="Calendar Icon" className="w-4 h-4" />
              <span className="font-medium">Date:</span>
              <span>{formatDate(date)}</span>
            </div>
          )}

          {time && (
            <div className="flex items-start gap-3">
              <img src={Clock} alt="Time Icon" className="w-4 h-4" />
              <span className="font-medium">Time:</span>
              <span>{time}</span>
            </div>
          )}

          {venue && (
            <div className="flex items-start gap-3">
              <img src={Location} alt="Location Icon" className="w-4 h-4" />
              <span className="font-medium">Venue:</span>
              <span className="">{venue}</span>
            </div>
          )}

          {attended && (
            <div className="flex items-start gap-3">
              <img src={Users} alt="Users Icon" className="w-4 h-4" />
              <span className="font-medium">Attended:</span>
              <span>{attended}</span>
            </div>
          )}
        </div>

        {showViewDetails && (
          <div className="text-center mt-auto">
            <span className="text-teal-primary text-[12px] md:text-sm font-medium">
              View details →
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
