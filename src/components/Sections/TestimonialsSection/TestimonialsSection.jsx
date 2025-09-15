'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Lydia Wise',
      location: 'Manchester',
      content: 'Working with @homeID is like having a family member who can fix everything. They know what you need, exactly when you need it.',
      avatar: '/images/avatar1.jpg' // Replace with your actual image path
    },
    {
      id: 2,
      name: 'Olive Erickson',
      location: 'New Mexico',
      content: 'Working with @homeID is like having a family member who can fix everything. They know what you need, exactly when you need it.',
      avatar: '/images/avatar2.jpg' // Replace with your actual image path
    },
    {
      id: 3,
      name: 'Carl Knight',
      location: 'Washington, D.C.',
      content: 'Working with @homeID is like having a family member who can fix everything. They know what you need, exactly when you need it.',
      avatar: '/images/avatar3.jpg' // Replace with your actual image path
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Clients Say About Us</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
            }}
            loop={true}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-xl p-8 shadow-md text-center mx-auto max-w-2xl">
                  <div className="text-blue-500 text-4xl mb-2">"</div>
                  <p className="text-gray-600 text-lg mb-6 px-4">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Pagination only - no navigation arrows */}
          <div className="testimonial-pagination flex justify-center mt-8 space-x-2" />
        </div>
      </div>

      <style jsx global>{`
        .testimonial-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #D1D5DB;
          opacity: 1;
        }
        .testimonial-pagination .swiper-pagination-bullet-active {
          background-color: #3B82F6;
          width: 24px;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;