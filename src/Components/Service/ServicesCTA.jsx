// components/ServicesCTA.jsx
import { Link } from "react-router-dom";

export default function ServicesCTA() {
  return (
    <section className="py-12 bg-blue-800 text-white text-center">
      <div className="container mx-auto px-6 space-y-6 animate__animated animate__fadeInUp">
        <h2 className="text-3xl font-bold mb-4">Need Plumbing Help Now?</h2>
        <p className="mb-6 text-base">
          Contact FlowSecure Plumbing today for fast, affordable, and expert service.
        </p>
        <div className="flex justify-center text-center gap-4">
          <a href="tel:+11234567890" className="btn bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl">
            📞 Call Now
          </a>
          <Link to="/contact" className="btn border-2 border-white px-6 py-3 rounded-xl">
            📅 Book Online
          </Link>
        </div>
      </div>
    </section>
  );
}
