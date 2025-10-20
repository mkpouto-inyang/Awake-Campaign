import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";
import LoginModal from "../components/LoginModal";

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [editingField, setEditingField] = useState(null);
  const [editValues, setEditValues] = useState({});
  const [showImageManager, setShowImageManager] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");
  const { isAuthenticated, user, logout } = useAuth();

  // Mock event data - in a real app, this would come from an API or state management
  const events = [
    {
      id: 1,
      title:
        "Documentary Premiere - 'Awake: The Fight Against Cervical Cancer'",
      category: "screening",
      date: "2023-11-15",
      time: "7:00 PM",
      location: "Lagos Continental Hotel, Victoria Island",
      description:
        "Official premiere of our documentary with panel discussion featuring medical experts and survivors.",
      status: "completed",
      attendees: 450,
      impact: "Reached 2.3M viewers through media coverage",
      fullDescription: `The documentary premiere marked the official launch of the Awake Campaign. The event brought together healthcare professionals, survivors, advocates, and media personalities for a powerful evening of storytelling and education.

The screening was followed by a panel discussion featuring Dr. Adaora Okonkwo (Lead Oncologist at LUTH), Sarah Ibrahim (Cervical Cancer Survivor), and Funmi Ajao (Health Advocate). The discussion centered on early detection, prevention strategies, and the importance of regular screening.

Media coverage from the event reached over 2.3 million Nigerians through television, radio, and digital platforms. The premiere generated significant social media engagement with #AwakeCampaign trending for 48 hours.`,
      gallery: [
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop", // Healthcare awareness event
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop", // Conference/panel discussion
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop", // Medical conference
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop", // Audience at event
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop", // Healthcare professionals
        "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=600&h=400&fit=crop", // Media coverage
      ],
      partners: [
        "Lagos State Ministry of Health",
        "LUTH",
        "Nigerian Medical Association",
      ],
      outcomes: [
        "Documentary distributed to 50+ healthcare facilities",
        "1,200 follow-up screening appointments booked",
        "500+ healthcare workers trained on early detection",
      ],
    },
    {
      id: 2,
      title: "Community Screening Tour - Surulere",
      category: "screening",
      date: "2023-11-22",
      time: "4:00 PM",
      location: "Surulere Community Center",
      description:
        "Free documentary screening with health talks and Q&A session with healthcare professionals.",
      status: "completed",
      attendees: 320,
      impact: "150 women registered for follow-up screenings",
      fullDescription: `Our first community screening tour brought the Awake documentary directly to the heart of Surulere community. The event was organized in partnership with local community leaders and the Surulere Local Government Area.

The screening was preceded by health talks in both English and Yoruba to ensure maximum comprehension. Dr. Kemi Adesanya provided expert commentary and answered questions from the audience.

The impact was immediate and measurable - 150 women registered for follow-up screenings at nearby health centers, and the community formed a women's health support group that continues to meet monthly.`,
      gallery: [
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=450&fit=crop", // Community gathering
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop", // Health education
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop", // Community health worker
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop", // Medical professionals
        "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&h=400&fit=crop", // Community support
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop", // Q&A session
      ],
      partners: ["Surulere LGA", "Community Health Workers Association"],
      outcomes: [
        "150 women registered for screenings",
        "Monthly support group established",
        "5 community health ambassadors trained",
      ],
    },
    // Add more events as needed
  ];

  const [eventsData, setEventsData] = useState(events);
  const event = eventsData.find((e) => e.id === parseInt(eventId));

  const startEditing = (field, currentValue) => {
    setEditingField(field);
    setEditValues({ ...editValues, [field]: currentValue });
  };

  const cancelEditing = () => {
    setEditingField(null);
    setEditValues({});
  };

  const saveEdit = (field) => {
    const updatedEvents = eventsData.map((e) =>
      e.id === parseInt(eventId) ? { ...e, [field]: editValues[field] } : e
    );
    setEventsData(updatedEvents);

    // Save to localStorage for persistence
    localStorage.setItem("awake_events", JSON.stringify(updatedEvents));

    setEditingField(null);
    setEditValues({});
  };

  const addImage = () => {
    if (!newImageUrl.trim()) return;

    const updatedEvents = eventsData.map((e) =>
      e.id === parseInt(eventId)
        ? { ...e, gallery: [...e.gallery, newImageUrl.trim()] }
        : e
    );
    setEventsData(updatedEvents);
    localStorage.setItem("awake_events", JSON.stringify(updatedEvents));
    setNewImageUrl("");
  };

  const removeImage = (imageIndex) => {
    const updatedEvents = eventsData.map((e) =>
      e.id === parseInt(eventId)
        ? {
            ...e,
            gallery: e.gallery.filter((_, index) => index !== imageIndex),
          }
        : e
    );
    setEventsData(updatedEvents);
    localStorage.setItem("awake_events", JSON.stringify(updatedEvents));

    // Reset current image index if needed
    if (currentImageIndex >= event.gallery.length - 1) {
      setCurrentImageIndex(0);
    }
  };

  // Load events from localStorage on mount
  useEffect(() => {
    const savedEvents = localStorage.getItem("awake_events");
    if (savedEvents) {
      setEventsData(JSON.parse(savedEvents));
    }
  }, []);

  // Auto-transition images every 4 seconds
  useEffect(() => {
    if (!event?.gallery || event.gallery.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % event.gallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [event?.gallery]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-4">
            Event Not Found
          </h1>
          <Button onClick={() => navigate("/campaign-events")}>
            Back to Events
          </Button>
        </div>
      </div>
    );
  }

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

            {/* Admin Controls */}
            {/* <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">
                    Welcome, {user.name}
                  </span>
                  <Button variant="outline" size="sm" onClick={logout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowLoginModal(true)}
                >
                  Admin Login
                </Button>
              )}
            </div> */}
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
            {editingField === "title" ? (
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={editValues.title || ""}
                  onChange={(e) =>
                    setEditValues({ ...editValues, title: e.target.value })
                  }
                  className="text-xl md:text-3xl font-bold text-teal-700 leading-tight bg-transparent border-2 border-teal-300 rounded-lg px-3 py-2 focus:outline-none focus:border-teal-500"
                  autoFocus
                />
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => saveEdit("title")}>
                    Save
                  </Button>
                  <Button variant="outline" size="sm" onClick={cancelEditing}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <h1 className="text-xl md:text-3xl font-bold mb-6 text-teal-700 leading-tight">
                  {event.title}
                </h1>
                {isAuthenticated && (
                  <button
                    onClick={() => startEditing("title", event.title)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-gray-100 rounded-lg"
                    title="Edit title"
                  >
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                )}
              </div>
            )}
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
              {isAuthenticated && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowImageManager(!showImageManager)}
                >
                  {showImageManager ? "Hide" : "Manage Images"}
                </Button>
              )}
            </div>

            {/* Image Management Panel */}
            {isAuthenticated && showImageManager && (
              <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Add New Image
                </h3>
                <div className="flex gap-3 mb-4">
                  <input
                    type="url"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    placeholder="Enter image URL (e.g., https://images.unsplash.com/...)"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                  <Button onClick={addImage} disabled={!newImageUrl.trim()}>
                    Add Image
                  </Button>
                </div>
                <p className="text-sm text-gray-600">
                  Add high-quality images related to this event. Recommended
                  size: 800x600px or larger.
                </p>
              </div>
            )}

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

                  {/* Admin Delete Button */}
                  {isAuthenticated && event.gallery.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage(index);
                      }}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md"
                      title="Delete image"
                    >
                      <svg
                        className="w-3 h-3"
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
                  )}

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

            {/* Editable Description */}
            <div className="group relative mb-8">
              {editingField === "fullDescription" ? (
                <div className="flex flex-col gap-3">
                  <textarea
                    value={editValues.fullDescription || ""}
                    onChange={(e) =>
                      setEditValues({
                        ...editValues,
                        fullDescription: e.target.value,
                      })
                    }
                    className="w-full min-h-[200px] text-gray-700 leading-relaxed text-lg bg-transparent border-2 border-teal-300 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 resize-vertical"
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => saveEdit("fullDescription")}
                    >
                      Save
                    </Button>
                    <Button variant="outline" size="sm" onClick={cancelEditing}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <div className="prose prose-gray max-w-none">
                    {event.fullDescription
                      .split("\n\n")
                      .map((paragraph, index) => {
                        // Check if paragraph contains bullet points or list items
                        if (
                          paragraph.includes("•") ||
                          paragraph.includes("-") ||
                          /^\d+\./.test(paragraph)
                        ) {
                          const lines = paragraph.split("\n");
                          return (
                            <ul
                              key={index}
                              className="mb-4 text-teal-700 leading-relaxed text-lg list-disc pl-6"
                            >
                              {lines.map((line, lineIndex) => (
                                <li key={lineIndex} className="mb-1">
                                  {line.replace(/^[•\-]|\d+\.\s*/g, "")}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return (
                          <p
                            key={index}
                            className="mb-2 text-gray-700 leading-relaxed text-lg"
                          >
                            {paragraph}
                          </p>
                        );
                      })}
                  </div>
                  {isAuthenticated && (
                    <button
                      onClick={() =>
                        startEditing("fullDescription", event.fullDescription)
                      }
                      className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-gray-100 rounded-lg"
                      title="Edit description"
                    >
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              )}
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

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
};

export default EventDetail;
