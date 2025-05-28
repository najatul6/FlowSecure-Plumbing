const AboutSection = () => {
    return (
      <section className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/8951465/pexels-photo-8951465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About FlowSecure Plumbing"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
  
          {/* Text */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-blue-700">About FlowSecure Plumbing</h2>
            <p className="text-gray-700 text-lg">
              At FlowSecure Plumbing, we’ve built a reputation on trust, reliability, and fast service. Whether it’s a leaky faucet or a full plumbing system installation, our certified team delivers high-quality work with a personal touch.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✅</span>
                <span>Licensed and insured plumbing experts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✅</span>
                <span>24/7 Emergency Services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✅</span>
                <span>Friendly, affordable, and honest service</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  