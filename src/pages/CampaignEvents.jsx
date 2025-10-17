import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const CampaignEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");
  const navigate = useNavigate();

  const handleEventClick = (eventId) => {
    navigate(`/campaign-events/${eventId}`);
  };

  const eventCategories = [
    { id: "all", label: "All Events" },
    { id: "screening", label: "Documentary Screenings" },
    { id: "medical", label: "Medical Outreach" },
    { id: "community", label: "Community Engagement" },
    { id: "workplace", label: "Workplace Wellness" },
  ];

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
      image: "/api/placeholder/400/250",
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
      image: "/api/placeholder/400/250",
    },
    {
      id: 3,
      title: "Free Cervical Cancer Screening & Vaccination Drive",
      category: "medical",
      date: "2023-11-29",
      time: "9:00 AM - 4:00 PM",
      location: "Lagos University Teaching Hospital (LUTH)",
      description:
        "Comprehensive screening and vaccination program for women and girls aged 9-45.",
      status: "completed",
      attendees: 680,
      impact: "500 women screened, 250 vaccinated",
      image: "/api/placeholder/400/250",
    },
    {
      id: 4,
      title: "Mother-Daughter Day Special",
      category: "community",
      date: "2024-03-08",
      time: "10:00 AM - 2:00 PM",
      location: "Tafawa Balewa Square, Lagos Island",
      description:
        "International Women's Day event bringing mothers and daughters together for health education.",
      status: "completed",
      attendees: 850,
      impact: "400 mother-daughter pairs participated",
      image: "/api/placeholder/400/250",
    },
    {
      id: 5,
      title: "Men Who Champion Her Forum",
      category: "community",
      date: "2024-01-18",
      time: "6:00 PM",
      location: "Civic Centre, Victoria Island",
      description:
        "Forum empowering men to become advocates for cervical cancer prevention in their communities.",
      status: "completed",
      attendees: 280,
      impact: "200+ men pledged as community advocates",
      image: "/api/placeholder/400/250",
    },
    {
      id: 6,
      title: "Workplace Wellness Pop-up - First Bank HQ",
      category: "workplace",
      date: "2023-12-10",
      time: "12:00 PM - 3:00 PM",
      location: "First Bank Headquarters, Marina",
      description:
        "On-site health screenings, vaccinations, and educational sessions for employees.",
      status: "completed",
      attendees: 420,
      impact: "300 employees screened, 180 vaccinated",
      image: "/api/placeholder/400/250",
    },
    {
      id: 7,
      title: "University Campus Tour - University of Lagos",
      category: "screening",
      date: "2024-02-14",
      time: "2:00 PM",
      location: "UNILAG Main Auditorium",
      description:
        "Educational screening and awareness program targeting young women in higher education.",
      status: "completed",
      attendees: 600,
      impact: "450 students registered for health programs",
      image: "/api/placeholder/400/250",
    },
    {
      id: 8,
      title: "Faith Community Outreach - Redeemed Christian Church",
      category: "community",
      date: "2024-04-21",
      time: "11:00 AM",
      location: "RCCG City of David Parish, Ikeja",
      description:
        "Sunday service documentary screening followed by health education and free consultations.",
      status: "completed",
      attendees: 750,
      impact: "500+ congregation members educated",
      image: "/api/placeholder/400/250",
    },
  ];

  const filteredEvents = events.filter((event) => {
    const categoryMatch =
      selectedCategory === "all" || event.category === selectedCategory;
    const eventDate = new Date(event.date);
    const eventMonth = eventDate.getMonth() + 1;
    const eventYear = eventDate.getFullYear();
    const monthMatch =
      selectedMonth === "all" ||
      (selectedMonth === "2023-11" &&
        eventMonth === 11 &&
        eventYear === 2023) ||
      (selectedMonth === "2023-12" &&
        eventMonth === 12 &&
        eventYear === 2023) ||
      (selectedMonth === "2024-01" && eventMonth === 1 && eventYear === 2024) ||
      (selectedMonth === "2024-02" && eventMonth === 2 && eventYear === 2024) ||
      (selectedMonth === "2024-03" && eventMonth === 3 && eventYear === 2024) ||
      (selectedMonth === "2024-04" && eventMonth === 4 && eventYear === 2024);

    return categoryMatch && monthMatch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* <div className="mb-2">
            <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
              Film-Driven Healthcare Campaign
            </span>
          </div> */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Our Impact <span className="text-teal-primary">Stories</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Discover the powerful events and initiatives we've completed in our
            mission to prevent cervical cancer across Nigeria
          </p>
        </div>
      </div>

      {/* Campaign Stats */}
      <div className="bg-[#14b8a6] max-w-7xl mx-auto rounded-xl py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-2">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Campaign Achievements
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              Measurable impact we've achieved in cervical cancer prevention
              across Nigeria
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "4,350",
                label: "People Reached",
              },
              {
                number: "800+",
                label: "Women Screened",
              },
              {
                number: "430",
                label: "Women Vaccinated",
              },
              {
                number: "8",
                label: "Events Completed",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white py-12 border-b" id="events-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-6 items-left justify-between">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-200 rounded-lg px-4 py-3 bg-white min-w-[200px] focus:border-teal-500 transition-all duration-200"
                >
                  {eventCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Month
                </label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="border border-gray-200 rounded-lg px-4 py-3 bg-white min-w-[180px] focus:border-teal-500 transition-all duration-200"
                >
                  <option value="all">All Months</option>
                  <option value="2023-11">November 2023</option>
                  <option value="2023-12">December 2023</option>
                  <option value="2024-01">January 2024</option>
                  <option value="2024-02">February 2024</option>
                  <option value="2024-03">March 2024</option>
                  <option value="2024-04">April 2024</option>
                </select>
              </div>
            </div>
            {/* <div className="text-gray-600 text-sm">
              Showing {filteredEvents.length} of {events.length} events
            </div> */}
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleEventClick(event.id)}
              >
                <div className="h-48 bg-gray-100 relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
                      {
                        eventCategories.find((cat) => cat.id === event.category)
                          ?.label
                      }
                    </span>
                  </div>
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
                    <div className="flex items-center">
                      <span className="w-16 font-medium">Date:</span>
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-16 font-medium">Time:</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-16 font-medium">Venue:</span>
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-16 font-medium">Attended: </span>
                      <span>{event.attendees} people</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {event.description}
                  </p>

                  <div className="bg-teal-50 rounded-lg p-3 mb-4">
                    <div className="text-sm text-teal-800">
                      <span className="font-medium">Impact: </span>
                      {event.impact}
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="text-teal-600 text-sm font-medium group-hover:text-teal-700 transition-colors">
                      View details →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                No events found
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Try adjusting your filters to discover more events.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedMonth("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action Section */}
      {/* <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Want to Host an Event?
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Help us reach more communities by hosting a documentary screening or 
            medical outreach event in your area.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              variant="primary"
              onClick={() => console.log("Host event clicked")}
            >
              Host an Event
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => console.log("Partner with us clicked")}
            >
              Partner with Us
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Free Film Access",
                desc: "Get access to our documentary and screening materials",
              },
              {
                title: "Medical Support",
                desc: "Connect with healthcare professionals in your area",
              },
              {
                title: "Marketing Kit",
                desc: "Receive promotional materials and digital assets",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CampaignEvents;
