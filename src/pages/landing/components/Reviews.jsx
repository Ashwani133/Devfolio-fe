import React from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Frontend Developer",
    company: "Google",
    content:
      "DevFolio helped me land my dream job by showcasing all my contributions in one beautiful place.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    name: "Marcus Rodriguez",
    role: "Full Stack Engineer",
    company: "Microsoft",
    content:
      "The real-time sync feature is incredible. My profile stays updated automatically across all platforms.",
    avatar:
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    name: "Emily Johnson",
    role: "DevOps Engineer",
    company: "Amazon",
    content:
      "I love how clean and professional my DevFolio profile looks. It's perfect for sharing with recruiters.",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
];
const Reviews = () => {
  return (
    <div className="pb-32">
      <div className="p-6 max-w-7xl mx-auto flex flex-col gap-y-12">
        <div className="text-5xl font-bold text-center">
          <h3 className="text-white">Lover by developers</h3>
          <h3 className="text-purple-500">Worlwide</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <div className="p-6 space-y-4 rounded-xl backdrop-blur-xl border border-gray-500">
              <div className="flex gap-x-4">
                <div className="h-12 w-12 rounded-full border border-white"></div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="text-gray-400">{testimonial.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
