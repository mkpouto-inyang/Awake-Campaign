import { useState } from "react";
import Button from "../components/Button";
import { AnimatedProgressBar } from "../components/AnimatedProgressBar";
import CustomQR from "../assets/static-images/CustomQrCode.png";
import qrIcon from "../assets/icons/qrIcon.svg";
import donateHeart from "../assets/icons/donate-heart.svg";
import heartIcon from "../assets/icons/heart.svg";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(7000);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [currentAmount, setCurrentAmount] = useState(0);
  const [copied, setCopied] = useState("");

  const handleCopy = (label, value) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(""), 1500);
  };

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
  const goalAmount = 50000000; // 5.0M goal
  const progressPercentage = (currentAmount / goalAmount) * 100;

  // Preset donation amounts with descriptions
  const donationOptions = [
    { amount: 7000, description: "1 cervical cancer screening" },
    { amount: 14000, description: "2 cervical cancer screenings" },
    { amount: 46500, description: "A full HPV dose cycle" },
    { amount: 700000, description: "Screen 100 women at a tour" },
    { amount: 2325000, description: "50 free vaccines" },
    { amount: 7000000, description: "Fund full outreach tour" },
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
    <div className="max-w-6xl mx-auto px-1 py-3">
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
              ₦50 million goal
            </span>
          </div>

          {/* Animated Progress Bar */}
          <AnimatedProgressBar current={currentAmount} goal={goalAmount} />
        </div>
      </div>

      {/* Payment Method Selection and Content */}
      <div className="px-2 sm:px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-4 mb-8">
          {/* Donation Guide Accordion */}
          <div>
            <div
              className={`border rounded-lg p-6 cursor-pointer transition-all duration-200 ${
                paymentMethod === "guide"
                  ? "border-teal-primary bg-white"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() =>
                setPaymentMethod((prev) => (prev === "guide" ? "" : "guide"))
              }
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
                    <h3 className="font-semibold text-gray-900 text-base">
                      What Your Donation Supports
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600 mt-2">
                      View breakdowns of how your donation helps make an impact
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    paymentMethod === "guide" ? "rotate-180" : ""
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

            {paymentMethod === "guide" && (
              <div className="border border-teal-primary rounded-lg p-6 bg-white mt-4 mb-[40px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                  {donationOptions.map((option) => (
                    <div
                      key={option.amount}
                      className="p-4 rounded-lg border border-gray-200 bg-gray-50"
                    >
                      <div className="font-semibold text-base text-gray-800">
                        {formatCurrency(option.amount)}
                      </div>
                      <div className="text-xs text-gray-700 mt-1">
                        {option.description}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  These are simply examples of what your donations can support.
                  You're welcome to give any amount via the options below.
                </p>
              </div>
            )}
          </div>

          {/* QR + Donate Button */}
          {/* <div className="mt-8 ">
            <div className="bg-teal-primary h-[100px] rounded-t-lg flex justify-center items-center">
                <h2 className="text-white font-semibold text-xl lg:text-2xl text-center">Choose Your Donation Method</h2>
            </div>
          <div className=" border border-gray-300 rounded-b-xl shadow-md grid grid-cols-1 md:grid-cols-2 px-6 py-10 relative ">
            
            <div className="hidden md:block absolute top-10 bottom-10 left-1/2 w-px bg-gray-300" />

            
            <div className="flex flex-col items-center justify-center px-4 py-6 md:pr-8">
              <img src={qrIcon} alt="QR Icon" className="w-5 h-5 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                Scan to Pay
              </h3>
              <img
                src={CustomQR}
                alt="Donate QR"
                className="w-[220px] h-[220px] object-contain mb-3"
              />
              <p className="text-sm text-gray-500 text-center">
                Open your camera app to scan
              </p>
            </div>

           
            <div className="flex flex-col items-center justify-center px-4 py-6 md:pl-8">
              <div className="bg-[#D5F5EC] rounded-full p-3 mb-4">
                <img src={donateHeart} alt="Donate" className="w-5 h-5" />
              </div>
              <h3 className="text-black font-semibold text-lg mb-2">
                Click to Donate
              </h3>
              <p className="text-sm text-gray-500 mb-4 text-center">
                You'll be redirected to our secure payment page
              </p>

              <a
                href="https://business.payaza.africa/pay/theawakecampaign"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="primary"
                  className="text-sm py-3 px-6 flex items-center gap-2 mt-4"
                >
                  <img
                    src={heartIcon}
                    alt="heart icon"
                    className="w-4 h-4 horizontal-spin"
                  />
                  Donate Now
                </Button>
              </a>

              <p className="text-sm text-gray-400 mt-3">Secured by <span className="text-[#29003D]">Payaza</span> </p>
            </div>
          </div>

          
        </div> */}

          <div className="mt-8">
            {/* Section Title */}
            <div className="bg-teal-primary h-[100px] rounded-t-lg flex justify-center items-center">
              <h2 className="text-white font-semibold text-xl lg:text-2xl text-center">
                Choose Your Donation Method
              </h2>
            </div>

            {/* Main Options: QR and Button */}
            <div className="border border-gray-300 rounded-b-xl shadow-md px-6 py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* QR Code Option */}
                <div className="flex flex-col items-center text-center">
                  <img src={qrIcon} alt="QR Icon" className="w-5 h-5 mb-2" />
                  <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                    Scan to Pay
                  </h3>
                  <img
                    src={CustomQR}
                    alt="Donate QR"
                    className="w-[220px] h-[220px] object-contain mb-3"
                  />
                  <p className="text-sm text-gray-500">
                    Open your camera app to scan
                  </p>
                </div>

                {/* Donate Button Option */}
                <div className="flex flex-col items-center text-center justify-center">
                  <div className="bg-[#D5F5EC] rounded-full p-3 mb-4">
                    <img src={donateHeart} alt="Donate" className="w-5 h-5" />
                  </div>
                  <h3 className="text-black font-semibold text-lg mb-2">
                    Click to Donate
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    You'll be redirected to our secure payment page
                  </p>
                  <a
                    href="https://business.payaza.africa/pay/theawakecampaign"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="primary"
                      className="text-sm py-3 px-6 flex items-center gap-2 mt-4"
                    >
                      <img
                        src={heartIcon}
                        alt="heart icon"
                        className="w-4 h-4 horizontal-spin"
                      />
                      Donate Now
                    </Button>
                  </a>
                  <p className="text-sm text-gray-400 mt-3">
                    Secured by <span className="text-[#29003D]">Payaza</span>
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-10 border-t border-gray-200 text-center">
                <span className="relative top-[-14px] px-4 bg-white text-gray-400 text-sm">
                  OR
                </span>
              </div>
              {/* Bank Transfer Option */}
              <div className="max-w-md mx-auto text-center space-y-4">
                <p className="text-sm text-gray-500">
                  Include “Awake Donation” in the transfer narration.
                </p>

                <div className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-left text-sm space-y-4">
                  {/* Account Name */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-gray-400">Account Name</span>
                      <span className="font-medium text-gray-700">
                        Belles Productions
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        handleCopy("accountName", "Belles Productions")
                      }
                      className="text-xs text-teal-primary hover:underline"
                    >
                      {copied === "accountName" ? "Copied!" : "Copy"}
                    </button>
                  </div>

                  {/* Account Number */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-gray-400">
                        Account Number
                      </span>
                      <span className="font-medium text-gray-700">
                        1308545176
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy("accountNumber", "1308545176")}
                      className="text-xs text-teal-primary hover:underline"
                    >
                      {copied === "accountNumber" ? "Copied!" : "Copy"}
                    </button>
                  </div>

                  {/* Bank Name */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-gray-400">Bank Name</span>
                      <span className="font-medium text-gray-700">
                        Providus Bank
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy("bankName", "Providus Bank")}
                      className="text-xs text-teal-primary hover:underline"
                    >
                      {copied === "bankName" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
