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

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <motion.h1
          whileHover={{ scale: 1.05, color: "#2563EB" }}
          className="navbar-brand"
        >
          FlowSecure
        </motion.h1>

        <nav className="navbar-links">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="quote-btn">
            Get a Quote
          </NavLink>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
          >
            <ul className="mobile-nav-list">
              {navLinks.map(({ label, path }) => (
                <li key={label}>
                  <NavLink
                    to={path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `mobile-link${isActive ? " active" : ""}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="mobile-quote-btn"
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
