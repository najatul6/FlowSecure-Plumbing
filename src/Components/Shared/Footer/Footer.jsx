import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">FlowSecure Plumbing</h2>
          <p className="text-gray-300">
            Trusted plumbing professionals serving your local area with quality service and peace of mind.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-300">Home</a></li>
            <li><a href="#about" className="hover:text-blue-300">About</a></li>
            <li><a href="#services" className="hover:text-blue-300">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>📍 123 Main Street, YourCity</p>
          <p>📞 (123) 456-7890</p>
          <p>📧 info@flowsecureplumbing.com</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-blue-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} FlowSecure Plumbing. All rights reserved by - <Link to="https://najatul-islam.vercel.app/" target="_blank" className="text-bold text-xl cursor-pointer underline">Najatul Islam</Link>.

      </div>
    </footer>
  );
};

export default Footer;
