import { useState } from "react";
import Button from "../components/Button";
import { AnimatedProgressBar } from "../components/AnimatedProgressBar";
import CustomQR from "../assets/static-images/CustomQrCode.png";
import qrIcon from "../assets/icons/qrIcon.svg"

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(7000);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [currentAmount, setCurrentAmount] = useState(0);

  // Donation Payments
  // TODO: ADD A 'THANK YOU FOR YOUR DONATION PAGE'
  const generatePaystackPrefilledLink = (email) => {
    let amountInKobo = getCurrentAmount();
    return `https://paystack.shop/pay/donate-to-awake?email=${encodeURIComponent(email)}&amount=${amountInKobo}`;
  };

  const handleDonation = () => {
    const paystackPrefilledLink = generatePaystackPrefilledLink(email);
    window.open(paystackPrefilledLink, "_blank", "noopener,noreferrer");
  };

  // Campaign progress data
  const goalAmount = 10000000; // 5.0M goal
  const progressPercentage = (currentAmount / goalAmount) * 100;

  // Preset donation amounts with descriptions
  const donationOptions = [
    { amount: 7000, description: "1 cervical cancer screening" },
    { amount: 15000, description: "2 cervical cancer screenings" },
    { amount: 135000, description: "One dose of HPV vaccine" },
    { amount: 700000, description: "Screen 100 women at a tour" },
    { amount: 6700000, description: "50 free vaccines" },
    { amount: 10000000, description: "Fund full outreach tour" },
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (value) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    return customAmount
      ? parseInt(customAmount.replace(/,/g, ""))
      : selectedAmount;
  };

  const formatCurrency = (amount) => {
    return `₦${amount.toLocaleString()}`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const handlePaymentMethodChange = (method) => {
    if (paymentMethod === method) {
      setPaymentMethod(null); // Deselect if clicking the same option
    } else {
      setPaymentMethod(method);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-1 py-3">
      {/* Progress Section */}
      <div className="text-center mb-10 px-2">
        <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 mb-10 lg:[mb-6] max-w-2xl mx-auto leading-relaxed">
          Every donation directly funds cervical cancer screenings, HPV
          vaccinations, and community outreach programs that save women's lives.
        </p>

        <div className="w-[87%] max-w-6xl mx-auto autoShow">
          {/* Progress Summary */}
          <div className="flex justify-between items-center text-xs sm:text-sm mb-2">
            <span className="font-semibold text-gray-800">
              {formatCurrency(currentAmount)} raised
            </span>
            <span className="font-semibold text-gray-700">
              ₦10 million goal
            </span>
          </div>

          {/* Animated Progress Bar */}
          <AnimatedProgressBar current={currentAmount} goal={goalAmount} />
        </div>
      </div>

      {/* Donation Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-7 leading-none mt-[60px]">
          Choose how you'd like to donate
        </h2>
        {/* <p className="text-sm text-gray-600">
          Select your preferred donation method below
        </p> */}
      </div>

      {/* Payment Method Selection and Content */}
      <div className="px-2 sm:px-4 md:px-6">
        {/* Payment Method Selection */}
        <div className="space-y-4 mb-8">
          {/* Quick Online Donations */}
          <div>
            <div
              className={`border rounded-lg p-6 cursor-pointer transition-all duration-200 ${
                paymentMethod === "online"
                  ? "border-teal-primary bg-white"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => handlePaymentMethodChange("online")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-7">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.29134 15.625H10.4163C10.6926 15.625 10.9576 15.5152 11.1529 15.3199C11.3483 15.1245 11.458 14.8596 11.458 14.5833C11.458 14.307 11.3483 14.0421 11.1529 13.8467C10.9576 13.6514 10.6926 13.5416 10.4163 13.5416H7.29134C7.01507 13.5416 6.75012 13.6514 6.55477 13.8467C6.35942 14.0421 6.24967 14.307 6.24967 14.5833C6.24967 14.8596 6.35942 15.1245 6.55477 15.3199C6.75012 15.5152 7.01507 15.625 7.29134 15.625ZM19.7913 5.20831H5.20801C4.37921 5.20831 3.58435 5.53755 2.9983 6.1236C2.41225 6.70966 2.08301 7.50451 2.08301 8.33331V17.7083C2.08301 18.5371 2.41225 19.332 2.9983 19.918C3.58435 20.5041 4.37921 20.8333 5.20801 20.8333H19.7913C20.6201 20.8333 21.415 20.5041 22.0011 19.918C22.5871 19.332 22.9163 18.5371 22.9163 17.7083V8.33331C22.9163 7.50451 22.5871 6.70966 22.0011 6.1236C21.415 5.53755 20.6201 5.20831 19.7913 5.20831ZM20.833 17.7083C20.833 17.9846 20.7233 18.2495 20.5279 18.4449C20.3326 18.6402 20.0676 18.75 19.7913 18.75H5.20801C4.93174 18.75 4.66679 18.6402 4.47144 18.4449C4.27609 18.2495 4.16634 17.9846 4.16634 17.7083V11.4583H20.833V17.7083ZM20.833 9.37498H4.16634V8.33331C4.16634 8.05705 4.27609 7.79209 4.47144 7.59674C4.66679 7.40139 4.93174 7.29165 5.20801 7.29165H19.7913C20.0676 7.29165 20.3326 7.40139 20.5279 7.59674C20.7233 7.79209 20.833 8.05705 20.833 8.33331V9.37498Z"
                      fill="#009689"
                    />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900 leading-none text-base">
                      Quick Online Donations
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600 mt-3 leading-none">
                      Select preset or custom amounts • Instant payment
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    paymentMethod === "online" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Quick Online Donations Content */}
            {paymentMethod === "online" && (
              <div className="border border-teal-primary rounded-lg p-6 bg-white mt-4">
                {/* Preset Amounts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {donationOptions.map((option) => (
                    <div
                      key={option.amount}
                      className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                        selectedAmount === option.amount
                          ? "border-teal-primary bg-[#EFFBF8] text-[#111828]"
                          : "border-gray-200 hover:border-teal-primary bg-white"
                      }`}
                      onClick={() => handleAmountSelect(option.amount)}
                    >
                      <div className="font-medium text-base">
                        {formatCurrency(option.amount)}
                      </div>
                      <div
                        className={`text-xs ${
                          selectedAmount === option.amount
                            ? "text-[#111828]"
                            : "text-[#111828]"
                        }`}
                      >
                        {option.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Or enter custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      ₦
                    </span>
                    <input
                      type="text"
                      value={customAmount}
                      onChange={(e) => handleCustomAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-teal-primary bg-white placeholder:text-[12px]"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="mb-6">
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-teal-primary bg-white placeholder:text-[12px]"
                    required
                  />
                </div>

                {/* Donate Button */}
                <Button
                  className="w-full py-4 text-[12px] lg:text-base font-semibold"
                  disabled={!email || (!selectedAmount && !customAmount)}
                  onClick={handleDonation}
                >
                  Donate {formatCurrency(getCurrentAmount() || 0)}
                </Button>
              </div>
            )}
          </div>

          {/* payment options */}
          <div className="">
            <div className="bg-white border rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              {/* QR Section */}
              <div className="flex flex-col items-center border border-gray-300 rounded-xl p-[40px] w-fit">
                  <img
                  src={qrIcon}
                  alt="QR Icon"
                  className="w-5 h-5 "
                />
                <h3 className="font-medium text-center text-gray-700 mb-4 mt-2">
                  Scan to Pay
                </h3>
                <img
                  src={CustomQR}
                  alt="Donate QR"
                  className="w-[250px] h-[250px] object-contain"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Open your camera app to scan
                </p>
              </div>

              {/* Click to Donate Section */}
              <div className="flex flex-col justify-center items-center text-center bg-blue-300">
                <h3 className="text-gray-700 font-medium mb-2">
                  Click to Donate
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  You'll be redirected to our secure payment page
                </p>
                <a
                  href="https://paystack.com/pay/your-link-here"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-primary text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-teal-600 transition"
                >
                  Donate Now
                </a>
                <p className="text-xs text-gray-400 mt-2">
                  Secured by Paystack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
