import axios from "axios";
import BookHouseButton from "./bookingBtn";

async function fetchHouse(id) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await axios.get(`${baseUrl}/api/houses/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching house:", error);
    return null;
  }
}

export default async function HouseDetailPage({ params }) {
  const { id } = await params;
  const house = await fetchHouse(id);

  if (!house) {
    return <div className="text-center py-20">House not found</div>;
  }

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={house.image}
          alt={house.title}
          className="w-full h-96 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{house.title}</h1>
          <p className="text-xl text-teal-600 mb-4">${house.price}</p>
          <p className="text-gray-700">{house.address}</p>
          <p className="text-gray-700">{house.beds}</p>
          <p className="text-gray-700">{house.baths}</p>
          <p className="text-gray-700">{house.area}</p>
        </div>
      </div>
      {/* Book House Button */}
          <BookHouseButton houseId={house._id} />
    </section>
  );
}
