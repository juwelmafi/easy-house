"use client";

import Marquee from "react-fast-marquee";

export default function PartnersSection() {
  const partners = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Coldwell_Banker_Realty_logo.svg",
      name: "Coldwell Banker",
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Realtor_logo.svg",
      name: "Realtor",
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Century_21_logo.svg",
      name: "Century 21",
    },
    {
      id: 4,
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Sotheby%27s_International_Realty_logo.svg",
      name: "Sotheby’s International Realty",
    },
    {
      id: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Engel_%26_%C3%84lkers_logo.svg",
      name: "Engel & Völkers",
    },
    {
      id: 6,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/RE/MAX_logo.svg",
      name: "RE/MAX",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Our Real Estate Partners
        </h2>

        {/* Scrolling Logos */}
        <Marquee pauseOnHover speed={50} gradient={false}>
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="mx-12 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
