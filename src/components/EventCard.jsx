import Calendar from "../assets/icons/calendar.svg";
import Location from "../assets/icons/location.svg";
import Users from "../assets/icons/grayUsers.svg";
import Clock from "../assets/icons/gray-clock.svg";

const EventCard = ({ event, onEventClick }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-NG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => onEventClick(event._id)}
    >
      <div className="h-48 bg-gray-100 relative overflow-hidden">
        <img src={event.thumbnailUrl} alt={event.title} />
        {/* <div className="absolute top-4 right-4 z-10">
          <span className="bg-green-100 text-green-800 text-xs px-3 py-1.5 rounded-full font-medium">
            Completed
          </span>
        </div> */}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight line-clamp-2">
          {event.title}
        </h3>

        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <img src={Calendar} alt="Calendar Icon" className="w-4 h-4" />
            <span className="font-medium">Date:</span>
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={Clock} alt="Time Icon" className="w-4 h-4" />
            <span className="font-medium">Time:</span>
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={Location} alt="Location Icon" className="w-4 h-4" />
            <span className="font-medium">Venue:</span>
            <span className="line-clamp-1">{event.venue}</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={Users} alt="Users Icon" className="w-4 h-4" />
            <span className="font-medium">Attended:</span>
            <span>{event.attended} people</span>
          </div>
        </div>

        {/* <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
          {event.description}
        </p>

        <div className="bg-teal-50 rounded-lg p-3 mb-4">
          <div className="text-sm text-teal-800">
            <span className="font-medium">Impact: </span>
            {event.impact}
          </div>
        </div> */}

        <div className="text-center">
          <span className="text-teal-primary text-sm font-medium group-hover:text-teal-primary transition-colors">
            View details →
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard