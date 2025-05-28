import ServiceCard from "./ServiceCard";

const services = [
    {
        icon: "https://cdn-icons-png.flaticon.com/512/2644/2644191.png", // emergency plumbing
        title: "Emergency Plumbing",
        description: "Fast, 24/7 emergency response for leaks, bursts, and more.",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/3014/3014761.png", // drain cleaning
        title: "Drain Cleaning",
        description: "We clear clogs and keep your drainage running smoothly.",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/619/619153.png", // leak detection
        title: "Leak Detection",
        description: "Accurate leak detection using modern tools.",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/809/809957.png", // water heater repair
        title: "Water Heater Repair",
        description: "Installation and repair for all types of water heaters.",
      },
];

export default function ServiceCardsGrid() {
  return (
    <section className="py-10 bg-light mx-auto px-4 w-full flex justify-center items-center"> 
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

