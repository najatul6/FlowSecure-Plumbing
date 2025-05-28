import BlogPostCard from "./BlogPostCard";

const BlogPostsGrid = () => {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1607703703520-10c9f7f5ce54",
      title: "5 Signs You Need Emergency Plumbing",
      summary: "Learn how to spot early warning signs of plumbing trouble before it gets worse.",
      date: "May 10, 2025",
    },
    {
      image: "https://images.unsplash.com/photo-1597003328481-240f6fdb6e89",
      title: "DIY Drain Cleaning Tips",
      summary: "Simple and safe ways to unclog your drains without damaging your pipes.",
      date: "April 22, 2025",
    },
    {
      image: "https://images.unsplash.com/photo-1581574200942-cfcfa6e7d78d",
      title: "How to Maintain Your Water Heater",
      summary: "Extend the life of your water heater with these quick maintenance tips.",
      date: "March 15, 2025",
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
