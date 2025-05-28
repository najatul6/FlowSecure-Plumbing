import BlogPostCard from "./BlogPostCard";

const BlogPostsGrid = () => {
    const posts = [
        {
          image: "https://media.istockphoto.com/id/898294640/photo/clipboard-with-words-plumbing-supply-on-a-desk.jpg?s=2048x2048&w=is&k=20&c=GFn-vhE9MfjA0hlchhLUXKzgZFwFqBJyQnNOITMcTZ4=",
          title: "5 Signs You Need Emergency Plumbing",
          summary: "Learn how to spot early warning signs of plumbing trouble before it gets worse.",
          date: "May 10, 2025",
        },
        {
          image: "https://media.istockphoto.com/id/2212215471/photo/repairman-explains-how-to-fix-a-sink-in-a-kitchen-setting-with-detailed-steps-and-advice-for.jpg?s=612x612&w=0&k=20&c=T1yz4wl5ZEnboQ9_ArlFVxZmUAj1ln-HIU03bjcIQ7A=",
          title: "DIY Drain Cleaning Tips",
          summary: "Simple and safe ways to unclog your drains without damaging your pipes.",
          date: "April 22, 2025",
        },
        {
          image: "https://media.istockphoto.com/id/1412399528/photo/professional-boiler-service-at-home.jpg?s=2048x2048&w=is&k=20&c=rdsGKB8_RhEVcuYydhAqrYOxs2Uu39Zo21cAFu_a7pU=",
          title: "How to Maintain Your Water Heater",
          summary: "Extend the life of your water heater with these quick maintenance tips.",
          date: "March 15, 2025",
        },
        {
          image: "https://media.istockphoto.com/id/2164840262/photo/cheerful-young-housewife-holding-bucket-with-cleaning-supplies.jpg?s=2048x2048&w=is&k=20&c=y6kTxjmblQhWG3Vj8ZqZIREVIMmMpfl5J_e_hfoIeaM=",
          title: "The Truth About Chemical Drain Cleaners",
          summary: "Are they safe or harmful? What every homeowner should know.",
          date: "February 10, 2025",
        },
        {
          image: "https://media.istockphoto.com/id/157585922/photo/frozen-gutter.jpg?s=2048x2048&w=is&k=20&c=NtDPh1bab9IigMqHblJUWUnso1V24yUCLWxCi-bebpM=",
          title: "Preventing Frozen Pipes in Winter",
          summary: "Simple steps to protect your pipes from freezing and bursting.",
          date: "January 5, 2025",
        },
        {
          image: "https://cdn.pixabay.com/photo/2017/08/23/10/22/tubing-2672187_960_720.jpg",
          title: "What to Do During a Plumbing Emergency",
          summary: "Stay calm and follow this guide to minimize water damage.",
          date: "December 12, 2024",
        },
        {
          image: "https://cdn.pixabay.com/photo/2017/07/28/00/43/plumber-2547329_1280.jpg",
          title: "How to Choose the Right Plumber",
          summary: "What to look for before hiring a plumbing service provider.",
          date: "November 8, 2024",
        },
        {
          image: "https://cdn.pixabay.com/photo/2017/08/23/10/22/pipes-2672184_1280.jpg",
          title: "Water-Saving Plumbing Upgrades",
          summary: "Eco-friendly fixtures that save money and the environment.",
          date: "October 25, 2024",
        },
      ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default BlogPostsGrid;
