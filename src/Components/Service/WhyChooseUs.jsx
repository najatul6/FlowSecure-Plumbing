// components/WhyChooseUs.jsx
export default function WhyChooseUs() {
    const benefits = [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png", // trusted & licensed
          title: "Trusted & Licensed",
          description: "Fully licensed professionals with years of local experience.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/4712/4712105.png", // fast & reliable
          title: "Fast & Reliable",
          description: "We arrive on time and finish the job quickly and correctly.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png", // affordable rates
          title: "Affordable Rates",
          description: "Upfront pricing with no hidden fees.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/1828/1828843.png", // 24/7 support
          title: "24/7 Support",
          description: "Always here to help in case of plumbing emergencies.",
        },
      ];
      
  
    return (
      <section className="py-12 bg-white flex justify-center items-center">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Why Choose FlowSecure?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => (
              <div key={index} className="card bg-light p-6 rounded-2xl shadow animate__animated animate__fadeInDown">
                <img src={item.icon} alt={item.title} className="mx-auto mb-4 w-14 h-14" />
                <h3 className="text-xl font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-dark">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  