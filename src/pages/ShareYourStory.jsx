import { useState } from "react";
import Button from "../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const stories = [
  {
    name: "Ngozi, 54",
    text: "At 32, I went for my first cervical cancer screening through a free community program. The doctors found precancerous cells early, and I was able to get treatment before it was too late. Today, I share my story so other women can take screening seriously. Early detection truly saves lives.",
  },
  {
    name: "Anonymous",
    text: "Before hearing about the Awake campaign, I had never heard about cervical cancer at all. This initiative has opened my eyes to being more cautious of my health",
  },
  {
    name: "Daniel, 28",
    text: "I lost my elder sister to cervical cancer when she was only 39. Watching her suffer opened my eyes to how dangerous silence and stigma can be. Since then, I’ve made it my mission to speak to men and families about supporting the women in their lives to get screened and vaccinated.",
  },
  {
    name: "Blessing, 42",
    text: "Cervical cancer took my mother when I was young. Joining the AWAKE campaign helped me heal and turn my pain into purpose. Now, I volunteer to spread awareness and help women access screening in rural areas.",
  },
];

const ShareYourStory = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    story: "",
    consent: false,
  });
  const [selectedStory, setSelectedStory] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, age, story, consent } = formData;

    try {
      const res = await fetch("https://formspree.io/f/mnnlalwo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          story,
          consent: consent ? "Yes" : "No",
          _subject: "New Story Submission",
        }),
      });

      if (res.ok) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000); // hide after 4s
        setFormData({ name: "", age: "", story: "", consent: false });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      alert("Network error. Try again later.");
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      {/* Featured Stories (Now Slider) */}
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mb-12"
      >
        {stories.map((story, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => setSelectedStory(story)}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition h-full flex flex-col justify-between"
            >
              <p className="text-gray-800 text-sm lg:text-base line-clamp-6">
                {story.text}
              </p>
              <p className="mt-4 text-teal-primary font-semibold">
                {story.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/90  flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-xl animate-fade-in">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl font-bold. cursor-pointer"
              onClick={() => setSelectedStory(null)}
            >
              &times;
            </button>
            <h3 className="text-teal-primary font-semibold text-lg mb-2">
              {selectedStory.name}
            </h3>
            <p className="text-gray-800 text-sm whitespace-pre-line">
              {selectedStory.text}
            </p>
          </div>
        </div>
      )}

      {/* Story Submission Form */}
      {/* <div className="bg-white shadow-lg p-6 rounded-xl mb-12">
        <h2 className="text-xl font-semibold text-blue-dark mb-4">
          Share your own story
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name (or Anonymous)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
          />
          <textarea
            name="story"
            value={formData.story}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us your story..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
          ></textarea>

          <label className="flex items-start gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              required
              className="mt-1 accent-teal-primary"
            />
            <span>
              I consent to my story being featured on AWAKE’s social media and
              other campaign platforms.
            </span>
          </label>

          <Button type="submit" variant="primary" className="w-full text-sm lg:text-base">
            Submit Story
          </Button>
        </form>
      </div> */}

      <div className="bg-white shadow-lg p-6 rounded-xl mb-12 relative">
        {showToast && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-100 text-black px-6 py-3 rounded shadow-lg z-50 animate-fade-in-out">
            🎉 Thank you for sharing your story to inspire others.
          </div>
        )}

        <h2 className="text-xl font-semibold text-blue-dark mb-4">
          Share your own story
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name (or Anonymous)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
            required
          />

          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Your age (optional)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
          />

          <textarea
            name="story"
            value={formData.story}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us your story..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
            required
          ></textarea>

          <label className="flex items-start gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 accent-teal-primary"
            />
            <span>
              I consent to my story being featured on AWAKE’s social media and
              other campaign platforms.
            </span>
          </label>

          <Button
            type="submit"
            variant="primary"
            className="w-full text-sm lg:text-base"
          >
            Submit Story
          </Button>
        </form>
      </div>

      {/* Hashtag instructions */}
      <div className="mt-10 text-center text-sm text-gray-600">
        <p className="mb-2">
          You can also share your story on social media using the hashtags:
        </p>
        <p className="font-semibold text-teal-primary">
          #AWAKE #IamAwake #IamAwakeToCervicalCancer
        </p>
      </div>
    </section>
  );
};

export default ShareYourStory;
