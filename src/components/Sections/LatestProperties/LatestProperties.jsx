import PropertyCarousel from "./PropertyCarousel";
import axios from "axios";

// Simulate server data fetching
async function getProperties() {
  // Replace this with fetch from your DB or API
  return
}

async function fetchHouses() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await axios.get(`${baseUrl}/api/houses`);
    const data = response.data; // the JSON returned by your API
    return data;
  } catch (error) {
    console.error("Error fetching houses:", error);
    return [];
  }
}

export default async function LatestProperties() {
  // const properties = await getProperties();
  const properties = await fetchHouses();
  console.log(properties);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Latest Properties For Sale
          </h2>
          <div className="mt-2 h-1 w-16 bg-teal-400 mx-auto"></div>
        </div>

        {/* Client Component Carousel */}
        <PropertyCarousel properties={properties} />
      </div>
    </section>
  );
}
