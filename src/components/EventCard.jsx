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
    // <div
    //   className={`group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 ${
    //     onClick ? "cursor-pointer" : ""
    //   }`}
    //   onClick={onClick}
    // >
    //   <div className="h-48 bg-gray-100 relative overflow-hidden">
    //     <img
    //       src={image}
    //       alt={title}
    //       className="w-full h-full object-cover"
    //     />
    //   </div>

    //   <div className="p-6">
    //     <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight line-clamp-2">
    //       {title}
    //     </h3>


    //     {showViewDetails && (
    //       <div className="text-center">
    //         <span className="text-teal-primary text-sm font-medium group-hover:text-teal-primary transition-colors">
    //           View details →
    //         </span>
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div
  className={`group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col ${
    onClick ? "cursor-pointer" : ""
  }`}
  onClick={onClick}
>
  <div className="h-48 bg-gray-100 relative overflow-hidden flex-shrink-0">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover"
    />
  </div>

  <div className="p-6 flex flex-col flex-1">
    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight line-clamp-2 min-h-[56px]">
      {title}
    </h3>

          <div className="space-y-2 mb-4 text-sm text-gray-600">
          {date && (
            <div className="flex items-center gap-3">
              <img src={Calendar} alt="Calendar Icon" className="w-4 h-4" />
              <span className="font-medium">Date:</span>
              <span>{formatDate(date)}</span>
            </div>
          )}

          {time && (
            <div className="flex items-center gap-3">
              <img src={Clock} alt="Time Icon" className="w-4 h-4" />
              <span className="font-medium">Time:</span>
              <span>{time}</span>
            </div>
          )}

          {venue && (
            <div className="flex items-center gap-3">
              <img src={Location} alt="Location Icon" className="w-4 h-4" />
              <span className="font-medium">Venue:</span>
              <span className="line-clamp-1">{venue}</span>
            </div>
          )}

          {attended && (
            <div className="flex items-center gap-3">
              <img src={Users} alt="Users Icon" className="w-4 h-4" />
              <span className="font-medium">Attended:</span>
              <span>{attended}</span>
            </div>
          )}
        </div>

    {showViewDetails && (
      <div className="text-center mt-auto">
        <span className="text-teal-primary text-sm font-medium">
          View details →
        </span>
      </div>
    )}
  </div>
</div>
  );
};

export default EventCard;