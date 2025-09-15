"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const NeighborhoodsSection = () => {
  const swiperRef = useRef(null);

  const neighborhoods = [
    {
      id: 1,
      name: "Los Angeles",
      properties: 9,
      image: "/images/la.jpg", // Replace with your actual image path
    },
    {
      id: 2,
      name: "New York",
      properties: 6,
      image: "/images/ny.jpg", // Replace with your actual image path
    },
    {
      id: 3,
      name: "San Diego",
      properties: 5,
      image: "/images/sd.jpg", // Replace with your actual image path
    },
    {
      id: 4,
      name: "San Francisco",
      properties: 7,
      image: "/images/sf.jpg", // Replace with your actual image path
    },
    {
      id: 5,
      name: "Miami",
      properties: 4,
      image: "/images/miami.jpg", // Replace with your actual image path
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Content */}
          <div className="lg:w-1/3">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Explore
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neighborhoods
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur icing elit. Suspendisse
              suscipit
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Explore all →
            </a>
          </div>

          {/* Right Content - Carousel */}
          <div className="lg:w-2/3">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2.5,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="relative"
            >
              {neighborhoods.map((neighborhood) => (
                <SwiperSlide key={neighborhood.id}>
                  <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={neighborhood.image}
                        alt={neighborhood.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-md">
                        <span className="text-sm font-semibold text-gray-800">
                          {neighborhood.properties} Properties
                        </span>
                      </div>
                    </div>
                    <div className="p-5 bg-white">
                      <h3 className="text-xl font-bold text-gray-900">
                        {neighborhood.name}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Custom Navigation */}
              <div className="flex gap-2 mt-6 justify-end">
                <button className="swiper-button-prev flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 text-gray-700 shadow-md hover:bg-gray-50 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="swiper-button-next flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 text-gray-700 shadow-md hover:bg-gray-50 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodsSection;
