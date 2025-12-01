import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Home from "./components/HeroSection";
import ConcludedCases from "./pages/ConcludedCases";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 lg:py-0">
            <div className="flex items-center">
              <img
                src="/svg/2.svg"
                alt="Moorbidge Cyber"
                className="h-16 sm:h-20 lg:h-24"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/concluded-cases">
                <button className="border-2 border-[#172963] text-[#172963] hover:bg-[#172963] hover:text-white transition-all px-8 py-3 tracking-widest text-lg font-normal rounded-lg">
                  CONCLUDED CASES
                </button>
              </Link>
              {location.pathname === '/' ? (
                <a href="#footer-bottom">
                  <button className="border-2 border-[#172963] text-[#172963] hover:bg-[#172963] hover:text-white transition-all px-8 py-3 tracking-widest text-lg font-normal rounded-lg">
                    FILE A NEW CASE
                  </button>
                </a>
              ) : (
                <Link to="/">
                  <button className="border-2 border-[#172963] text-[#172963] hover:bg-[#172963] hover:text-white transition-all px-8 py-3 tracking-widest text-lg font-normal rounded-lg">
                    FILE A NEW CASE
                  </button>
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#172963]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-4 space-y-3 pt-2">
              <Link
                to="/concluded-cases"
                onClick={() => setIsMenuOpen(false)}
                className="w-full block text-center border-2 border-[#172963] text-[#172963] hover:bg-[#172963] hover:text-white transition-all px-8 py-3 tracking-widest text-lg font-normal rounded-lg"
              >
                CONCLUDED CASES
              </Link>

              {location.pathname === '/' ? (
                <a
                  href="#footer-bottom"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full block text-center border-2 border-[#172963] text-[#172963] hover:bg-[#172963] hover:text-white transition-all px-8 py-3 tracking-widest text-lg font-normal rounded-lg"
                >
                  FILE A NEW CASE
                </a>
              ) : (
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full block text-center border-2 border-[#172963] text-[#172963] hover:bg-[#172963] hover:text-white transition-all px-8 py-3 tracking-widest text-lg font-normal rounded-lg"
                >
                  FILE A NEW CASE
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concluded-cases" element={<ConcludedCases />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
