const QuoteForm = () => {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Get Your Quote</h2>
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
            <select
              className="border border-gray-300 rounded-lg p-3"
              required
            >
              <option value="">Select a Service</option>
              <option value="emergency">Emergency Plumbing</option>
              <option value="drain">Drain Cleaning</option>
              <option value="leak">Leak Detection</option>
              <option value="heater">Water Heater Repair</option>
              <option value="other">Other</option>
            </select>
            <textarea
              placeholder="Describe the issue or request"
              rows="5"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default QuoteForm;
  