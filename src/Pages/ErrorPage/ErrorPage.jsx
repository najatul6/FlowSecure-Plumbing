import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-10 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-100 rounded-full w-28 h-28 flex items-center justify-center shadow-sm mb-4"
      >
        <span className="text-5xl text-center">🛠️</span>
      </motion.div>

      <h1 className="text-2xl font-bold text-blue-700 mt-3 mb-3">404</h1>
      <p className="text-base text-gray-700 mb-4">
        Whoops! We couldn’t find that page.
      </p>

      <NavLink
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
      >
        Back to Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
