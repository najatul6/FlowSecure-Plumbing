const WhyChooseUs = () => {
    const features = [
      "Licensed & Insured Professionals",
      "Fast Response Time",
      "Upfront & Honest Pricing",
      "Friendly & Respectful Technicians",
    ];
  
    return (
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-800">
            {features.map((feature, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl p-6">
                <h3 className="text-xl font-semibold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  