// components/ServiceCard.jsx
export default function ServiceCard({ icon, title, description }) {
    return (
      <div className="card bg-white p-6 shadow-md rounded-2xl text-center">
        <img src={icon} alt={title} className="mx-auto mb-4 w-16 h-16" />
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-sm text-dark">{description}</p>
      </div>
    );
  }
  