import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import { PortableText } from '@portabletext/react'
import { client } from "../lib/sanityClient"
import { singleEventByIdQuery } from "../lib/queries";
import { useQuery } from "@tanstack/react-query";

const portableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-6 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-5 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 mb-3 leading-relaxed">{children}</p>
    ),
  },
};

const EventDetail = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { eventId } = useParams();

  
  const fetchSingleEvent = async (eventId) => {
    let event = await client.fetch(singleEventByIdQuery, {id: eventId})

    if (!event) {
      throw new Error("Event not found")
    }

    return event
  }

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['events', eventId],
    queryFn: () => fetchSingleEvent(eventId),
    enabled: !!eventId
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    console.log(error.message)
    return <span>Error</span>
  }

  const event = data



  // Auto-transition images every 4 seconds
  useEffect(() => {
    if (!event || !event.gallery || event.gallery.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % event.gallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [event]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/campaign-events")}
            >
              ← Back to Events
            </Button>
          </div>
          {/* <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
              {event.category === "screening" && "Documentary Screening"}
              {event.category === "medical" && "Medical Outreach"}
              {event.category === "community" && "Community Engagement"}
              {event.category === "workplace" && "Workplace Wellness"}
            </span>
          </div> */}
          {/* Editable Title */}
          <div className="group relative">
              <div className="flex items-center gap-3">
                <h1 className="text-xl md:text-3xl font-bold mb-6 text-teal-700 leading-tight">
                  {event.title}
                </h1>
              
              </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="max-w-7xl">
          {/* Event Images */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-teal-700">Event Gallery</h2>
            </div>

            {/* Main Image */}
            <div className="mb-8 relative group shadow-md">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative shadow-xl">
                <img
                  src={event.gallery[currentImageIndex]}
                  alt={`${event.title} - Main event photo`}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105 cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                />

                {/* Navigation Arrows */}
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === 0 ? event.gallery.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) => (prev + 1) % event.gallery.length
                    )
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Image Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {event.title} - Photo {currentImageIndex + 1} of{" "}
                    {event.gallery.length}
                  </p>
                </div>

                {/* Image indicator dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {event.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
                        index === currentImageIndex
                          ? "bg-white border-white scale-110"
                          : "bg-white/50 border-white/50 hover:bg-white/80 hover:border-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {event.gallery.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl group relative ${
                    index === currentImageIndex
                      ? "ring-3 ring-teal-500 ring-offset-3 shadow-lg"
                      : "hover:scale-105"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${event.title} - Photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Photo Number */}
                  <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Details */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-teal-700 mb-4">
              Event Overview
            </h2>

            <div className="group relative mb-8">
                <div className="relative">
                  <div className="prose prose-gray max-w-none">
                      <PortableText value={event.overview} components={portableTextComponents} />
                  </div>
                </div>
            </div>

            {/* <h3 className="text-xl font-bold text-teal-700 mb-4">
              Key Outcomes
            </h3> */}
            {/* <ul className="space-y-3 mb-2">
              {event.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-3 h-3 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul> */}

            {/* <h3 className="text-xl font-bold text-teal-700 mb-4">
              Event Partners
            </h3> */}
            {/* <div className="flex flex-wrap gap-3">
              {event.partners.map((partner, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium"
                >
                  {partner}
                </span>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Full-screen Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full z-10 backdrop-blur-sm transition-all duration-300"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) =>
                  prev === 0 ? event.gallery.length - 1 : prev - 1
                );
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-4 rounded-full backdrop-blur-sm transition-all duration-300"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(
                  (prev) => (prev + 1) % event.gallery.length
                );
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-4 rounded-full backdrop-blur-sm transition-all duration-300"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Modal Image */}
            <img
              src={event.gallery[currentImageIndex]}
              alt={`${event.title} - Photo ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-cover rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Modal Caption */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-lg font-medium mb-2">{event.title}</p>
              <p className="text-sm opacity-80">
                Photo {currentImageIndex + 1} of {event.gallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
