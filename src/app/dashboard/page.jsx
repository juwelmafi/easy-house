
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { dbConnect } from "@/lib/dbConnect";
import MyBookingsTable from "./MyBookingsTable";


export const metadata = {
  title: "Dashboard | EasyHouse",
  description: "Control your activity from dynamic dashboard"
};





export default async function MyBookingsPage() {
  // ✅ get logged-in user session
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p className="p-6 text-red-500">You must be logged in to view bookings.</p>;
  }

  // ✅ fetch bookings directly from DB (server-side)
  const bookingCollection = await dbConnect("bookings");
  const bookings = await bookingCollection
    .find({ userId: session.user.id })
    .sort({ bookedAt: -1 })
    .toArray();

  // ✅ Convert MongoDB ObjectId to string
  const serialized = bookings.map((b) => ({
    ...b,
    _id: b._id.toString(),
    bookedAt: b.bookedAt.toString(),
  }));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">My Bookings</h2>
      <MyBookingsTable bookings={serialized} />
    </div>
  );
}
