import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0 md:mr-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-blue-700 mb-4"
          >
            Reliable Plumbing Services You Can Trust
          </motion.h1>
          <p className="text-lg text-gray-700 mb-6">
            FlowSecure Plumbing provides fast, affordable, and professional solutions for all your residential and commercial plumbing needs.
          </p>
          <NavLink
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition"
          >
            Request a Quote
          </NavLink>
        </div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="https://images.pexels.com/photos/16509869/pexels-photo-16509869/free-photo-of-close-up-of-man-using-a-spanner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Plumber working"
            className="w-full max-w-sm rounded-lg shadow-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
