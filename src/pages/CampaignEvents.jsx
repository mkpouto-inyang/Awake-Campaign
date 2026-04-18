import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import EventCard from "../components/EventCard";
import { useEvents } from "../hooks/useEvents";

const CampaignEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");
  const navigate = useNavigate();

  const { isPending, isError, data, error } = useEvents();

  const handleEventClick = (eventId) => {
    navigate(`/campaign-events/${eventId}`);
  };

  const generateMonths = (startYear, startMonth) => {
    const months = [];
    const now = new Date();

    let year = startYear;
    let month = startMonth; // 0-based

    while (
      year < now.getFullYear() ||
      (year === now.getFullYear() && month <= now.getMonth())
    ) {
      const date = new Date(year, month);

      months.push({
        value: `${year}-${String(month + 1).padStart(2, "0")}`,
        label: date.toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        }),
      });

      month++;
      if (month > 11) {
        month = 0;
        year++;
      }
    }

    return months.reverse(); // newest first
  };

  const months = generateMonths(2025, 10); // November 2023

  if (isError) {
    console.log(error.message);
    return <span>Error</span>;
  }

  const events = data ?? [];

  // const filteredEvents = events.filter((event) => {
  //   const categoryMatch =
  //     selectedCategory === "all" || event.category === selectedCategory;

  //   const eventDate = new Date(event.date);
  //   const eventMonth = eventDate.getMonth() + 1;
  //   const eventYear = eventDate.getFullYear();

  //   const monthMatch =
  //     selectedMonth === "all" ||
  //     (selectedMonth === "2023-11" &&
  //       eventMonth === 11 &&
  //       eventYear === 2023) ||
  //     (selectedMonth === "2023-12" &&
  //       eventMonth === 12 &&
  //       eventYear === 2023) ||
  //     (selectedMonth === "2024-01" && eventMonth === 1 && eventYear === 2024) ||
  //     (selectedMonth === "2024-02" && eventMonth === 2 && eventYear === 2024) ||
  //     (selectedMonth === "2024-03" && eventMonth === 3 && eventYear === 2024) ||
  //     (selectedMonth === "2024-04" && eventMonth === 4 && eventYear === 2024);

  //   return categoryMatch && monthMatch;
  // });
const filteredEvents = events.filter((event) => {
    const categoryMatch =
      selectedCategory === "all" || event.category === selectedCategory;

    const eventDate = new Date(event.date);
    const eventMonthValue = `${eventDate.getFullYear()}-${String(
      eventDate.getMonth() + 1
    ).padStart(2, "0")}`;

    const monthMatch =
      selectedMonth === "all" || eventMonthValue === selectedMonth;

    return categoryMatch && monthMatch;
  });


  return (
    <div className="min-h-screen bg-white py-10 sm:py-14 lg:py-20">
      {/* Campaign Stats */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-xl bg-teal-primary px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-semibold text-white sm:text-2xl lg:text-4xl">
              Campaign Achievements
            </h2>
            <p className="hidden lg:block mt-3 text-sm leading-relaxed text-gray-700 lg:text-base">
              Measurable impact we've achieved in cervical cancer prevention
              across Nigeria through powerful events and initiatives
            </p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              { number: "144k", label: "People Reached" },
              { number: "100+", label: "Women Screened" },
              { number: "0", label: "Women Vaccinated" },
              { number: "3", label: "Events Completed" },
            ].map((stat, index) => (
              <div
                key={index}
                className="rounded-lg bg-white/10 px-2 py-3 text-center md:bg-transparent"
              >
                <div className="text-2xl font-bold text-white lg:text-3xl">
                  {stat.number}
                </div>
                <div className="mt-1 text-xs leading-tight text-white/90 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section id="events-section" className="bg-white py-8 sm:py-10 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="w-full sm:w-auto">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Month
              </label>
              {/* <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-teal-primary focus:outline-none sm:min-w-[220px] sm:text-sm"
              >
                <option value="all">All Months</option>
                <option value="2023-11">November 2023</option>
                <option value="2023-12">December 2023</option>
                <option value="2024-01">January 2024</option>
                <option value="2024-02">February 2024</option>
                <option value="2024-03">March 2024</option>
                <option value="2024-04">April 2024</option>
              </select> */}
  <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-teal-primary focus:outline-none sm:min-w-[220px]"
              >
                <option value="all">All Months</option>
                {months.map((month) => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="bg-white pb-10 pt-2 sm:pb-14 ">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {isPending
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-64 animate-pulse rounded-2xl bg-gray-100"
                  />
                ))
              : filteredEvents.map((event) => (
                  <EventCard
                    key={event._id}
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    venue={event.venue}
                    attended={`${event.attended} people`}
                    image={event.thumbnailUrl}
                    onClick={() => handleEventClick(event._id)}
                    showViewDetails={true}
                  />
                ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="py-12 text-center sm:py-16">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                No events found
              </h3>
              <p className="mx-auto mb-6 max-w-md text-sm text-gray-600 sm:text-base">
                Try adjusting your filters to discover more events.
              </p>
              <div className="flex justify-center">
                <Button
                  className="text-sm mt-4"
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedMonth("all");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CampaignEvents;
