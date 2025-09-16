"use client";

import Marquee from "react-fast-marquee";

export default function PartnersSection() {
  const partners = [
    {
      id: 1,
      logo: "https://i.ibb.co.com/wZxdnywT/logo1-removebg-preview.png",
      name: "Coldwell Banker",
    },
    {
      id: 2,
      logo: "https://i.ibb.co.com/tMtT0k6g/logo2-removebg-preview.png",
      name: "Realtor",
    },
    {
      id: 3,
      logo: "https://i.ibb.co.com/sdmRw6Qv/logo3-removebg-preview.png",
      name: "Century 21",
    },
    {
      id: 4,
      logo: "https://i.ibb.co.com/TDpwjkmS/logo4-removebg-preview.png",
      name: "Sotheby’s International Realty",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Our Real Estate Partners
        </h2>
        <div className="mt-2 mb-10 h-1 w-16 bg-teal-400 mx-auto"></div>
        {/* Scrolling Logos */}
        <Marquee pauseOnHover speed={50} gradient={false}>
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="mx-20 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-34 grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
