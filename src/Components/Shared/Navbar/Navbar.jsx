import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.05, color: "#2563EB" }}
          className="text-2xl font-bold text-blue-800 tracking-wide cursor-pointer"
        >
          FlowSecure
        </motion.h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>(`
                text-base font-medium transition-all duration-300 ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
                }`)
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/getaquote"
            className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Get a Quote
          </NavLink>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 shadow-inner px-6 py-4 rounded-b-xl"
          >
            <ul className="space-y-3">
              {navLinks.map(({ label, path }) => (
                <li key={label}>
                  <NavLink
                    to={path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                    (`
                      block font-medium text-lg transition ${
                        isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                      }`)
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  to="/getaquote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-blue-600 text-white mt-3 px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition"
                >
                  Get a Quote
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 