const ContactInfo = () => {
    return (
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Our Contact Details</h3>
            <p className="text-gray-700 mb-2">
              📍 123 Main Street, Your City, State, ZIP
            </p>
            <p className="text-gray-700 mb-2">📞 (123) 456-7890</p>
            <p className="text-gray-700 mb-2">✉️ support@flowsecureplumbing.com</p>
          </div>
          <div>
            <iframe
              className="w-full h-64 rounded-lg border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5629996394263!2d-74.00594138459337!3d40.71277597933011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1614834737065!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactInfo;
  