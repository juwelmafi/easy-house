"use client";

import Image from "next/image";
import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaBath, FaBed } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const houses = [
  {
    id: 1,
    title: "Store in Woodside, New York",
    address: "39-11 61st St, Woodside, New York",
    price: "$1,250,000",
    beds: 3,
    baths: 2,
    sqft: 900,
    discount: "FEATURED",
    image: "/house2.jpg", // replace with your real images
  },
  {
    id: 2,
    title: "Apartment in Manhattan, New York",
    address: "55 W 25th St, Manhattan, NY",
    price: "$2,800,000",
    beds: 4,
    baths: 3,
    sqft: 1200,
    discount: "HOT DEAL",
    image: "/h.jpg",
  },
  {
    id: 3,
    title: "Villa in Brooklyn, New York",
    address: "12 Bay Ridge Ave, Brooklyn, NY",
    price: "$3,100,000",
    beds: 5,
    baths: 4,
    sqft: 2000,
    discount: "NEW LISTING",
    image: "/house1.jpg",
  },
];

export default function BannerCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full h-[550px] mt-16 relative">
      <Slider {...settings} className="h-full">
        {houses.map((house) => (
          <div key={house.id} className="relative h-[550px]">
            {/* Background Image */}
            <Image
              src={house.image}
              alt={house.title}
              fill
              className="object-cover"
              priority
            />

            {/* Card Overlay */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[200px] md:w-[350px]">
              <Card className="rounded-2xl shadow-xl">
                <CardContent className="p-6 space-y-1 md:space-y-4">
                  <Badge className="bg-orange-500 text-white">
                    {house.discount}
                  </Badge>
                  <h2 className="md:text-xl font-bold">{house.title}</h2>
                  <p className="text-sm text-gray-600">{house.address}</p>
                  <p className="text-2xl font-semibold text-teal-400">
                    {house.price}
                  </p>
                  <div className="hidden md:flex  justify-between text-gray-700 text-sm pt-3">
                    <div className="flex items-center gap-1">
                      <FaBed className="text-teal-400"/> {house.beds} Br
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBath className="text-teal-400"/> {house.baths} Ba
                    </div>
                    <div className="flex items-center gap-1">
                      <MdSquareFoot className="text-teal-400"/> {house.sqft} SqFt
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
