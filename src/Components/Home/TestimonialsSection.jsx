import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah M.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "FlowSecure Plumbing saved the day! Fast, friendly, and very professional. Highly recommended!",
  },
  {
    name: "James L.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Had a burst pipe and they showed up within 30 minutes. Impressive service and fair pricing.",
  },
  {
    name: "Priya K.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Very honest and reliable. Explained everything clearly and did the job perfectly.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="w-full mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-10">What Our Customers Say</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="px-4"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-xl shadow-md max-w-6xl mx-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-blue-600"
                />
                <p className="text-gray-700 italic mb-4">“{testimonial.text}”</p>
                <p className="font-semibold text-blue-600">- {testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
