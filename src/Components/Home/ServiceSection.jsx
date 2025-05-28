const ServicesSection = () => {
    const services = [
      {
        id: 1,
        title: "Leak Repair",
        description:
          "Quick and reliable leak detection and repair to save your home from water damage.",
        icon: "🔧",
      },
      {
        id: 2,
        title: "Drain Cleaning",
        description:
          "Efficient drain cleaning to keep your pipes clear and prevent backups.",
        icon: "🚰",
      },
      {
        id: 3,
        title: "Water Heater Installation",
        description:
          "Professional installation and maintenance of water heaters to keep your water hot.",
        icon: "🔥",
      },
      {
        id: 4,
        title: "Pipe Replacement",
        description:
          "Expert pipe replacement services to ensure a safe and leak-free plumbing system.",
        icon: "🔩",
      },
    ];
  
    return (
      <section className="bg-white py-16 px-6 container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Our Plumbing Services</h2>
          <p className="text-gray-700 text-lg">
            From small repairs to full installations, we offer a wide range of plumbing solutions to keep your home running smoothly.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {services.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="bg-blue-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  