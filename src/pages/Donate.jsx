import { useState } from "react";
import Button from "../components/Button";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(7000);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [currentAmount, setCurrentAmount] = useState(3200000);

  // Donation Payments
  // TODO: ADD A 'THANK YOU FOR YOUR DONATION PAGE'
  const generatePaystackPrefilledLink = (email) => {
    let amountInKobo = getCurrentAmount() 
    return `https://paystack.shop/pay/donate-to-awake?email=${encodeURIComponent(email)}&amount=${amountInKobo}`
  } 

  const handleDonation = () => {
    const paystackPrefilledLink = generatePaystackPrefilledLink(email)
    window.open(paystackPrefilledLink, '_blank', 'noopener,noreferrer')
  }

  // Campaign progress data
  const goalAmount = 5000000; // 5.0M goal
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
      <div className="text-center mb-12">
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
          Every donation directly funds cervical cancer screenings, HPV
          vaccinations, and community outreach programs that save women's lives.
        </p>

        {/* Progress Bar */}
        <div className="mb-8 ">
          <div className="flex justify-end items-center mb-2">
            <span className="font-semibold text-gray-600">₦5.0M goal</span>
          </div>
          <div className="w-full bg-white rounded-full shadow-md h-3 relative">
            <div
              className="bg-teal-primary h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
            <span
              className="absolute top-4 font-semibold text-gray-900 transition-all duration-500"
              style={{
                left: `${progressPercentage}%`,
                transform: "translateX(-50%)",
              }}
            >
              {formatCurrency(currentAmount)}
            </span>
          </div>
        </div>
      </div>

      {/* Donation Section Title */}
      <div className="text-center mb-8">
        <h2
          className="text-xl font-bold text-gray-900 mb-5 leading-none"
          style={{
            fontFamily: "Outfit",
            fontWeight: 700,
            fontSize: "30px",
            lineHeight: "100%",
            letterSpacing: "0%",
            marginTop: "80px",
          }}
        >
          Choose how you'd like to donate
        </h2>
        <p className="text-sm text-gray-600">
          Select your preferred donation method below
        </p>
      </div>

      {/* Payment Method Selection and Content */}
      <div className="p-0">
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
                    <h3
                      className="font-medium text-gray-900 leading-none"
                      style={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      Quick Online Donations
                    </h3>
                    <p
                      className="text-xs text-gray-600 mt-3 leading-none"
                      style={{
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
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
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-teal-primary bg-white"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-teal-primary bg-white"
                    required
                  />
                </div>

                {/* Donate Button */}
                <Button
                  className="w-full py-4 text-base font-semibold"
                  disabled={!email || (!selectedAmount && !customAmount)}
                  onClick={handleDonation}
                >
                  Donate {formatCurrency(getCurrentAmount() || 0)}
                </Button>
              </div>
            )}
          </div>

          {/* Bank Transfer */}
          <div>
            <div
              className={`border rounded-lg p-6 cursor-pointer transition-all duration-200 ${
                paymentMethod === "bank"
                  ? "border-teal-primary bg-white"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => handlePaymentMethodChange("bank")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-7">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_162_45)">
                      <path
                        d="M4.5 24.75V4.5C4.5 3.90326 4.73705 3.33097 5.15901 2.90901C5.58097 2.48705 6.15326 2.25 6.75 2.25H15.75C16.3467 2.25 16.919 2.48705 17.341 2.90901C17.7629 3.33097 18 3.90326 18 4.5V24.75M4.5 24.75H18M4.5 24.75H2.25C1.65326 24.75 1.08097 24.5129 0.65901 24.091C0.237053 23.669 0 23.0967 0 22.5V15.75C0 15.1533 0.237053 14.581 0.65901 14.159C1.08097 13.7371 1.65326 13.5 2.25 13.5H4.5M18 24.75H20.25C20.8467 24.75 21.419 24.5129 21.841 24.091C22.2629 23.669 22.5 23.0967 22.5 22.5V12.375C22.5 11.7783 22.2629 11.206 21.841 10.784C21.419 10.3621 20.8467 10.125 20.25 10.125H18M9 6.75H13.5M9 11.25H13.5M9 15.75H13.5M9 20.25H13.5"
                        stroke="#009689"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_162_45">
                        <rect width="27" height="27" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div>
                    <h3
                      className="font-medium text-gray-900 leading-none"
                      style={{
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      Bank Transfer
                    </h3>
                    <p
                      className="text-xs text-gray-600 mt-3 leading-none"
                      style={{
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      Direct transfer to our account • Any amount
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    paymentMethod === "bank" ? "rotate-180" : ""
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

            {/* Bank Transfer Content */}
            {paymentMethod === "bank" && (
              <div className="border border-teal-primary rounded-lg p-6 bg-white mt-4">
                <h3 className="text-base font-semibold text-gray-900 mb-6">
                  Bank Account Details
                </h3>

                <div className="space-y-4 border border-[#009689] bg-[#EFFBF8] p-4 rounded-lg">
                  {/* Bank Name */}
                  <div className="bg-white rounded-lg px-6 py-3 border border-teal-200">
                    <label className="block text-xs font-medium text-gray-600 mb-1">
                      Bank Name
                    </label>
                    <div className="flex items-center justify-between">
                      <span className="font-normal text-gray-900">
                        First Bank of Nigeria
                      </span>
                      <button
                        onClick={() => copyToClipboard("First Bank of Nigeria")}
                        className=" hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        title="Copy bank name"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.75 12.0837C8.75 11.1996 9.10123 10.3516 9.72643 9.72643C10.3516 9.10123 11.1996 8.75 12.0837 8.75H22.9163C23.354 8.75 23.7876 8.83623 24.192 9.00377C24.5965 9.1713 24.964 9.41687 25.2736 9.72643C25.5831 10.036 25.8287 10.4035 25.9962 10.808C26.1638 11.2124 26.25 11.646 26.25 12.0837V22.9163C26.25 23.354 26.1638 23.7876 25.9962 24.192C25.8287 24.5965 25.5831 24.964 25.2736 25.2736C24.964 25.5831 24.5965 25.8287 24.192 25.9962C23.7876 26.1638 23.354 26.25 22.9163 26.25H12.0837C11.646 26.25 11.2124 26.1638 10.808 25.9962C10.4035 25.8287 10.036 25.5831 9.72643 25.2736C9.41687 24.964 9.1713 24.5965 9.00377 24.192C8.83623 23.7876 8.75 23.354 8.75 22.9163V12.0837Z"
                            stroke="#0B0C1E"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.015 20.9212C4.63125 20.7032 4.31206 20.3875 4.08988 20.0061C3.86769 19.6248 3.75042 19.1914 3.75 18.75V6.25C3.75 4.875 4.875 3.75 6.25 3.75H18.75C19.6875 3.75 20.1975 4.23125 20.625 5"
                            stroke="#0B0C1E"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Account Name */}
                  <div className="bg-white rounded-lg px-6 py-3 border border-teal-200">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Account Name
                    </label>
                    <div className="flex items-center justify-between">
                      <span className="font-normal text-gray-900">
                        AWAKE Campaign Initiative
                      </span>
                      <button
                        onClick={() =>
                          copyToClipboard("AWAKE Campaign Initiative")
                        }
                        className="hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        title="Copy account name"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.75 12.0837C8.75 11.1996 9.10123 10.3516 9.72643 9.72643C10.3516 9.10123 11.1996 8.75 12.0837 8.75H22.9163C23.354 8.75 23.7876 8.83623 24.192 9.00377C24.5965 9.1713 24.964 9.41687 25.2736 9.72643C25.5831 10.036 25.8287 10.4035 25.9962 10.808C26.1638 11.2124 26.25 11.646 26.25 12.0837V22.9163C26.25 23.354 26.1638 23.7876 25.9962 24.192C25.8287 24.5965 25.5831 24.964 25.2736 25.2736C24.964 25.5831 24.5965 25.8287 24.192 25.9962C23.7876 26.1638 23.354 26.25 22.9163 26.25H12.0837C11.646 26.25 11.2124 26.1638 10.808 25.9962C10.4035 25.8287 10.036 25.5831 9.72643 25.2736C9.41687 24.964 9.1713 24.5965 9.00377 24.192C8.83623 23.7876 8.75 23.354 8.75 22.9163V12.0837Z"
                            stroke="#0B0C1E"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.015 20.9212C4.63125 20.7032 4.31206 20.3875 4.08988 20.0061C3.86769 19.6248 3.75042 19.1914 3.75 18.75V6.25C3.75 4.875 4.875 3.75 6.25 3.75H18.75C19.6875 3.75 20.1975 4.23125 20.625 5"
                            stroke="#0B0C1E"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Account Number */}
                  <div className="bg-white rounded-lg px-6 py-3 border border-teal-200">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Account Number
                    </label>
                    <div className="flex items-center justify-between">
                      <span className="font-normal text-gray-900 text-md">
                        3091234567
                      </span>
                      <button
                        onClick={() => copyToClipboard("3091234567")}
                        className="hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        title="Copy account number"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.75 12.0837C8.75 11.1996 9.10123 10.3516 9.72643 9.72643C10.3516 9.10123 11.1996 8.75 12.0837 8.75H22.9163C23.354 8.75 23.7876 8.83623 24.192 9.00377C24.5965 9.1713 24.964 9.41687 25.2736 9.72643C25.5831 10.036 25.8287 10.4035 25.9962 10.808C26.1638 11.2124 26.25 11.646 26.25 12.0837V22.9163C26.25 23.354 26.1638 23.7876 25.9962 24.192C25.8287 24.5965 25.5831 24.964 25.2736 25.2736C24.964 25.5831 24.5965 25.8287 24.192 25.9962C23.7876 26.1638 23.354 26.25 22.9163 26.25H12.0837C11.646 26.25 11.2124 26.1638 10.808 25.9962C10.4035 25.8287 10.036 25.5831 9.72643 25.2736C9.41687 24.964 9.1713 24.5965 9.00377 24.192C8.83623 23.7876 8.75 23.354 8.75 22.9163V12.0837Z"
                            stroke="#0B0C1E"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.015 20.9212C4.63125 20.7032 4.31206 20.3875 4.08988 20.0061C3.86769 19.6248 3.75042 19.1914 3.75 18.75V6.25C3.75 4.875 4.875 3.75 6.25 3.75H18.75C19.6875 3.75 20.1975 4.23125 20.625 5"
                            stroke="#0B0C1E"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-sm">
                      <p className="text-blue-800 font-medium mb-1">Important Instructions:</p>
                      <ul className="text-blue-700 space-y-1 list-disc list-inside">
                        <li>Please use your full name as the transfer reference</li>
                        <li>Send a screenshot of your transfer receipt to donations@awakecampaign.org</li>
                        <li>You'll receive a confirmation email within 24 hours</li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
