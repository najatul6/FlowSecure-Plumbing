import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/16509869/pexels-photo-16509869/free-photo-of-close-up-of-man-using-a-spanner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 text-white space-y-6 md:max-w-2xl">
        <h1
          className="text-5xl font-bold animate__animated animate__fadeInDown"
          style={{ animationDelay: '500ms' }}
        >
          Reliable Plumbing Services You Can Trust
        </h1>
        <p
          className="text-lg animate__animated animate__fadeInUp"
          style={{ animationDelay: '1000ms' }}
        >
          Fast, affordable, and professional plumbing solutions for your home and business.
        </p>
        <NavLink
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold animate__animated animate__fadeInUp inline-block"
          style={{ animationDelay: '1500ms' }}
        >
          Request a Free Quote
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
