const TeamSection = () => {
    const team = [
      {
        name: "Ahmed Karim",
        role: "Lead Plumber",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Fatima Zain",
        role: "Customer Service",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Ahmed Karim",
        role: "Lead Plumber",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      }
    ];
  
    return (
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-10">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-6 shadow">
                <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TeamSection;
  