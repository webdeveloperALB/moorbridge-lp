import { useState } from "react";
import { Copy } from "lucide-react";

const scamTypes = [
  "Investments",
  "Remote Jobs",
  "Romance Scam",
  "Memecoins/Rugpull",
  "Ponzi Scheme",
  "Recovery",
  "Phishing Scams",
  "Fake Giveaways and Airdrops",
];

export default function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "+1",
    amount: "",
    scamType: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [phoneError, setPhoneError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("enquiries@moorbridgecyber.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const digitsOnly = phone.replace(/\D/g, "");
    return digitsOnly.length === 11 && digitsOnly.startsWith("1");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setPhoneError("");

    if (!validatePhoneNumber(formData.phoneNumber)) {
      setPhoneError("Please enter a valid 10-digit Canadian phone number");
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Form submitted:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "+1",
        amount: "",
        scamType: "",
        description: "",
      });

      setTimeout(() => {
        setShowModal(true);
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      if (!value.startsWith("+1")) {
        setFormData({ ...formData, phoneNumber: "+1" });
        return;
      }
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length <= 11) {
        setFormData({ ...formData, [name]: value });
        setPhoneError("");
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 sm:p-8 relative animate-fade-in">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
              aria-label="Close"
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

            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-50 mb-4">
                <img
                  src="/svg/2.svg"
                  alt="Moorbridge Cyber Security"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-[#172963] mb-4">
                Thank You for Submitting Your Information
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-gray-600">
                <p className="leading-relaxed">
                  Your connection and data are encrypted and secured with
                  industry-standard protection protocols.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="font-medium text-[#172963] mb-2">
                    Need Urgent Assistance?
                  </p>
                  <p className="text-sm mb-3">
                    For emergency inquiries, please contact us at:
                  </p>
                  <div className="flex items-center justify-between bg-white rounded px-3 py-2 border border-gray-200">
                    <a
                      href="mailto:enquiries@moorbridgecyber.com"
                      className="text-[#172963] font-semibold hover:underline text-sm"
                    >
                      enquiries@moorbridgecyber.com
                    </a>
                    <button
                      onClick={copyToClipboard}
                      className="ml-2 p-2 hover:bg-gray-100 rounded transition flex-shrink-0"
                      aria-label="Copy email"
                    >
                      <Copy
                        className={`w-4 h-4 ${
                          copied ? "text-green-600" : "text-gray-600"
                        }`}
                      />
                    </button>
                  </div>
                  {copied && (
                    <p className="text-xs text-green-600 mt-2 text-center">
                      Email copied to clipboard!
                    </p>
                  )}
                </div>

                <p className="text-sm text-gray-500 pt-2">
                  Our team will review your case and reach out to you within
                  24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="relative bg-white py-6 md:py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6">
          <div className="relative flex items-center justify-center">
            <div className="hidden md:block absolute left-8 w-[36rem] h-[36rem] opacity-20">
              <img
                src="/svg/Artboard 4.svg"
                alt="Background Artboard 4"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative text-center z-10 w-full">
              <h1 className="w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#172963] mb-4 md:mb-6 tracking-wide uppercase px-2">
                Your crypto isn't gone We can retrieve it.
              </h1>

              <p className="w-full text-base sm:text-lg md:text-xl lg:text-2xl text-[#464d51] mb-6 md:mb-8 font-light leading-relaxed normal-case px-4 sm:px-8 md:px-26">
                Don't let your crypto stay out of reach. Submit a case report
                today and let's work on getting your funds back.
              </p>

              <div className="max-w-2xl mx-auto mt-8 md:mt-12 px-2">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8"
                >
                  <div className="mb-4 sm:mb-6">
                    <label
                      htmlFor="fullName"
                      className="block text-left text-xs sm:text-sm font-medium text-[#172963] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172963] focus:border-transparent outline-none transition"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label
                      htmlFor="email"
                      className="block text-left text-xs sm:text-sm font-medium text-[#172963] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172963] focus:border-transparent outline-none transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-left text-xs sm:text-sm font-medium text-[#172963] mb-2"
                    >
                      Phone Number (Canada) *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-[#172963] focus:border-transparent outline-none transition ${
                        phoneError ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="+1XXXXXXXXXX"
                    />
                    {phoneError && (
                      <p className="text-red-600 text-xs mt-1">{phoneError}</p>
                    )}
                    <p className="text-gray-500 text-xs mt-1">
                      Format: +1 followed by 10 digits
                    </p>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label
                      htmlFor="amount"
                      className="block text-left text-xs sm:text-sm font-medium text-[#172963] mb-2"
                    >
                      Amount Lost *
                    </label>
                    <input
                      type="text"
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172963] focus:border-transparent outline-none transition"
                      placeholder="e.g., $10,000 or 2 BTC"
                    />
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label
                      htmlFor="scamType"
                      className="block text-left text-xs sm:text-sm font-medium text-[#172963] mb-2"
                    >
                      Type of Scam *
                    </label>
                    <select
                      id="scamType"
                      name="scamType"
                      value={formData.scamType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172963] focus:border-transparent outline-none transition bg-white"
                    >
                      <option value="">Select scam type</option>
                      {scamTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label
                      htmlFor="description"
                      className="block text-left text-xs sm:text-sm font-medium text-[#172963] mb-2"
                    >
                      Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172963] focus:border-transparent outline-none transition resize-none"
                      placeholder="Please describe what happened in detail..."
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-xs sm:text-sm">
                      Thank you for submitting your case report. We'll review it
                      and get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-xs sm:text-sm">
                      There was an error submitting your report. Please try
                      again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#172963] text-white font-medium py-3 sm:py-4 text-sm sm:text-base rounded-lg hover:bg-[#0f1d42] transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Case Report"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
