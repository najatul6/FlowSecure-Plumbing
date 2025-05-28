const ContactForm = () => {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg p-3"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactForm;
  