import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center animate-float mb-6">
        <span className="text-5xl">🔧</span>
      </div>

      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <NavLink
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Go Back Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
