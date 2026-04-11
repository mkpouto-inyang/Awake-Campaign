import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import Button from "../components/Button";
import Calendar from "../assets/icons/calendar.svg";
import Clock from "../assets/icons/gray-clock.svg";
import Location from "../assets/icons/location.svg";
import Users from "../assets/icons/grayUsers.svg";
import { client } from "../lib/sanityClient";
import { singleEventByIdQuery } from "../lib/queries";

const portableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-2xl md:text-3xl font-bold mt-6 mb-4 text-gray-900">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg md:text-xl font-semibold mt-6 mb-3 text-gray-900">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 mb-4 leading-8 text-[15px] md:text-base">
        {children}
      </p>
    ),
  },
};

const EventDetail = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  const fetchSingleEvent = async (eventId) => {
    const returnedEvent = await client.fetch(singleEventByIdQuery, { id: eventId });
    return returnedEvent;
  };

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const returnedEvent = await fetchSingleEvent(eventId);
        setEvent(returnedEvent);
      } catch (error) {
        console.error("Failed to load event:", error);
      }
    };

    loadEvent();
  }, [eventId]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);

    if (isNaN(date)) return dateString;

    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <Button onClick={() => navigate("/campaign-events")}>
            Back to Events
          </Button>
        </div>
      </div>
    );
  }

  const mainImage = event.thumbnailUrl || event.gallery?.[0] || "";
  const galleryImages = (event.gallery || []).slice(0, 9);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-10 pb-16">
        <div className="mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/campaign-events")}
          >
            ← Back to Events
          </Button>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6 max-w-5xl">
          {event.title}
        </h1>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 text-gray-700 mb-8">
          {event.date && (
            <div className="flex items-center gap-2">
              <img src={Calendar} alt="Calendar icon" className="w-4 h-4" />
              <span>{formatDate(event.date)}</span>
            </div>
          )}

          {event.time && (
            <div className="flex items-center gap-2">
              <img src={Clock} alt="Clock icon" className="w-4 h-4" />
              <span>{event.time}</span>
            </div>
          )}

          {event.venue && (
            <div className="flex items-center gap-2">
              <img src={Location} alt="Location icon" className="w-4 h-4" />
              <span className="line-clamp-1">{event.venue}</span>
            </div>
          )}

          {event.attended && (
            <div className="flex items-center gap-2">
              <img src={Users} alt="Users icon" className="w-4 h-4" />
              <span>{event.attended} people attended</span>
            </div>
          )}
        </div>

        {mainImage && (
          <div className="mb-12">
            <div className="w-full h-[240px] sm:h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-sm">
              <img
                src={mainImage}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Event Overview</h2>
          <div className="prose prose-gray max-w-none">
            <PortableText
              value={event.overview}
              components={portableTextComponents}
            />
          </div>
        </section>

        {galleryImages.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Gallery</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden bg-gray-100 border border-gray-200"
                >
                  <img
                    src={image}
                    alt={`${event.title} gallery image ${index + 1}`}
                    className="w-full h-56 object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default EventDetail;