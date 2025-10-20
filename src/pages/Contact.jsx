const ContactPage = () => {
  return (
    <section className="px-4 py-[100px] max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden items-center">
        {/* Left Info Section */}
        <div className="md:w-1/2 bg-white p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
            Contact <span className="text-teal-primary">Us</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-8 max-w-sm">
            Whether you’re looking to collaborate, ask questions, or support
            the movement — we’re here and ready to connect with you.
          </p>

          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-center gap-3 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-teal-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H8m0 0l4-4m-4 4l4 4"
                />
              </svg>
              info@awake.commmm
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-teal-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10l1.9 1.9a2.828 2.828 0 004 0L12 9l3.1 3.1a2.828 2.828 0 004 0L21 10M5 19h14"
                />
              </svg>
              08022298713
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 p-8 "style={{
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  }}>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
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
                type="email"
                placeholder="you@example.com"
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
                rows="5"
                placeholder="Type your message here..."
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
