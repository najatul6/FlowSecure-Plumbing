const ContactSection = () => {
    return (
      <section className="py-16 px-6 bg-gray-100" id="contact">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-700">Get in Touch</h2>
            <p className="text-gray-700">
              Whether it’s an emergency or a quick plumbing question, our team is here to help. Reach out today.
            </p>
            <div className="space-y-4 text-gray-800">
              <p><strong>📞 Phone:</strong> +1 (123) 456-7890</p>
              <p><strong>📧 Email:</strong> info@flowsecureplumbing.com</p>
              <p><strong>📍 Location:</strong> 123 Main Street, YourCity, State</p>
            </div>
          </div>
  
          {/* Contact Form */}
          <form className="bg-white p-8 rounded-lg shadow-lg space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 px-4 py-2 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  