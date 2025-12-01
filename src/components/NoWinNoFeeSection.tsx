import { useState } from 'react';

export default function NoWinNoFeeSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#172963]">
      <section className="py-20 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif text-[#172963] mb-8 uppercase tracking-wide">
                No win, no fee assurance
              </h2>

              <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed normal-case">
                We are confident in our ability to assist you.
                Moorbridge operates on a 'No Win, No Fee' basis,
                ensuring you incur no costs unless we successfully
                recover your assets. This commitment underscores our
                dedication to achieving the best possible outcome for you.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/png/Artboard 6.png"
                alt="No Win No Fee"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <footer id="footer-bottom" className="py-16 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-12 mb-16">
            <div className="md:col-span-4">
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 uppercase tracking-wide">
                Moorbridge Cyber Security
              </h3>
              <p className="text-xl text-gray-100 font-light leading-relaxed mb-8 normal-case">
                Moorbridge is a UK-based cryptocurrency recovery firm specialising in tracing, recovering, and securing lost or stolen digital assets.
              </p>
              <img
                src="/svg/4.svg"
                alt="Moorbidge Cyber"
                className="w-full max-w-xl object-contain"
              />

              <div className="mt-12">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase tracking-wide">
                    Sign up for email updates
                  </h3>

                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
                    <input
                      type="email"
                      placeholder="Your e-mail address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-6 py-4 bg-[#1a1f3a] text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold transition-all whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>

                  {submitted ? (
                    <p className="text-green-400 text-sm font-light normal-case">
                      Thank you for subscribing!
                    </p>
                  ) : (
                    <p className="text-gray-300 text-sm font-light normal-case">
                      Sign up with your email address to receive news and updates
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 uppercase tracking-wide">
                Contact Us
              </h3>
              <p className="text-xl text-gray-100 font-light mb-8 normal-case">
                Email: enquiries@moorbridgecyber.com
              </p>
              <img
                src="/png/Artboard 8.png"
                alt="Office Location"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
               <a
                href="https://www.google.com/maps/search/?api=1&query=Newstead+House,+Pelham+Road,+Nottingham,+United+Kingdom,+NG5+1AP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white pt-4 mb-4 md:mb-0 block hover:text-blue-400 transition-colors cursor-pointer"
              >
             Newstead House, Pelham Road, Nottingham, United Kingdom, NG5 1AP
            </a>
            </div>
          </div>

          <div className="border-t border-gray-400 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-200">
            <p className="text-sm mb-4 md:mb-0">
              Copyright ©2025 Moorbridge. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#privacy" className="text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
