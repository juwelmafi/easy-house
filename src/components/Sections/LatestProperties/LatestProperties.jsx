import PropertyCarousel from "./PropertyCarousel";
import { dbConnect } from "@/lib/dbConnect";

export default async function LatestProperties() {
  // ✅ Fetch directly from DB
  const houseCollection = await dbConnect("houses");
  const houses = await houseCollection
    .find({})
    .sort({ createdAt: -1 })
    .limit(10)
    .toArray();

  // ✅ Serialize MongoDB data
  const serialized = houses.map((h) => ({
    ...h,
    _id: h._id.toString(),
    createdAt: h.createdAt ? h.createdAt.toString() : null,
  }));

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
        <PropertyCarousel properties={serialized} />
      </div>
    </section>
  );
}
