import { useState } from "react";

const ContactPage = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mrbrzwqq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setShowToast(true);
        form.reset();
        setTimeout(() => setShowToast(false), 4000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className=" px-4 md:px-6 lg:px-8 py-[40px] md:py-[80px] max-w-6xl mx-auto">
      

      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden mb-[200px] relative">
        
        {showToast && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-teal-100 text-black px-6 py-3 rounded shadow-lg z-50 animate-fade-in-out text-sm w-full md:w-fit">
          🎉 Thank you for contacting AWAKE. We’ll be in touch with you shortly.
        </div>
        )}
     
        {/* Left Info Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
            Contact <span className="text-teal-primary">Us</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-8 max-w-md">
            Whether you’re looking to collaborate, ask questions, or support the
            movement — we’re here and ready to connect with you.
          </p>

          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 7.535V17C22 17.7652 21.7077 18.5015 21.1827 19.0583C20.6578 19.615 19.9399 19.9501 19.176 19.995L19 20H5C4.23479 20 3.49849 19.7077 2.94174 19.1827C2.38499 18.6578 2.04989 17.9399 2.005 17.176L2 17V7.535L11.445 13.832L11.561 13.898C11.6977 13.9648 11.8478 13.9995 12 13.9995C12.1522 13.9995 12.3023 13.9648 12.439 13.898L12.555 13.832L22 7.535Z"
                  fill="#0B0C1E"
                />
                <path
                  d="M19.0003 4C20.0803 4 21.0273 4.57 21.5553 5.427L12.0003 11.797L2.44531 5.427C2.6961 5.01982 3.0406 4.6785 3.45008 4.43149C3.85957 4.18448 4.32217 4.03894 4.79931 4.007L5.00031 4H19.0003Z"
                  fill="#0B0C1E"
                />
              </svg>

              <a
                href="mailto:awakecampaign@outlook.com"
                className="text-sm md:text-base text-gray-700 hover:text-teal-primary transition-colors"
              >
                awakecampaign@outlook.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 border-t md:border-t-0 border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="_subject"
              value="New Contact Message from AWAKE Campaign"
            />

            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-primary"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Type your message here..."
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-teal-primary text-white px-5 py-2 rounded-md text-sm hover:bg-teal-600 transition"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
