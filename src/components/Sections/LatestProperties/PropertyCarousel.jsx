
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaBath, FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import Link from "next/link";

export default function PropertyCarousel({ properties }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      loop
      className="pb-10"
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {properties.map((property) => (
        <SwiperSlide key={property.id}>
         <Link href={`/${property._id}`}>
           <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            {/* Image */}
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-60 object-cover"
              />
              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  FEATURED
                </span>
                <span className="bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded">
                  HOT OFFER
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-gray-900">
                  {property.price}
                </p>
                <span className="bg-teal-400 text-white text-xs font-bold px-3 py-1 rounded">
                  FOR SALE
                </span>
              </div>

              <h3 className="mt-2 text-gray-900 font-semibold">
                {property.title}
              </h3>
              <p className="text-sm text-gray-500">{property.address}</p>

              {/* Icons */}
              <div className="flex items-center gap-5 mt-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <FaBed className="text-teal-400" /> {property.beds} Br
                </span>
                <span className="flex items-center gap-1">
                  <FaBath className="text-teal-400" /> {property.baths} Ba
                </span>
                <span className="flex items-center gap-1">
                  <BiArea className="text-teal-400" /> {property.area}
                </span>
              </div>
            </div>
          </div>
         </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
