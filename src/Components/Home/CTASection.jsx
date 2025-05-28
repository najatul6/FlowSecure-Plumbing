import { NavLink } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-blue-700 text-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-6 animate__animated animate__fadeInUp">
        <h2 className="text-4xl font-bold">
          Need a Reliable Plumber Today?
        </h2>
        <p className="text-lg">
          Get fast, affordable, and professional plumbing solutions with FlowSecure Plumbing.
        </p>
        <NavLink
          to="/contact"
          className="inline-block bg-white text-blue-700 hover:bg-gray-200 px-8 py-3 rounded-full font-semibold transition duration-300"
        >
          Contact Us Now
        </NavLink>
      </div>
    </section>
  );
};

export default CTASection;
