const BlogPostCard = ({ image, title, summary, date }) => {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <p className="text-xs text-gray-500 mb-2">{date}</p>
          <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-700">{summary}</p>
        </div>
      </div>
    );
  };
  
  export default BlogPostCard;
  