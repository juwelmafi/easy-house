import { dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // adjust path if needed
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    // ✅ get logged-in user
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
    }

    // ✅ get request body
    const body = await req.json();
    const { houseId } = body;

    if (!houseId) {
      return new Response(JSON.stringify({ message: "House ID required" }), {
        status: 400,
      });
    }

    // ✅ connect to collections
    const bookingCollection = await dbConnect("bookings");
    const houseCollection = await dbConnect("houses");

    const userId = session.user.id; // make sure you add user.id in session callback

    // ✅ fetch house info
    const house = await houseCollection.findOne({ _id: new ObjectId(houseId) });

    if (!house) {
      return new Response(JSON.stringify({ message: "House not found" }), {
        status: 404,
      });
    }

    // ✅ check if already booked
    const existing = await bookingCollection.findOne({ houseId, userId });
    if (existing) {
      return new Response(JSON.stringify({ message: "Already booked" }), {
        status: 400,
      });
    }

    // ✅ insert booking with house snapshot
    const newBooking = {
      houseId,
      userId,
      userEmail: session.user.email,
      house: {
        title: house.title,
        price: house.price,
        location: house.location,
      },
      bookedAt: new Date(),
    };

    const result = await bookingCollection.insertOne(newBooking);

    return new Response(JSON.stringify({ message: "Booked successfully", result }), {
      status: 201,
    });
  } catch (error) {
    console.error("Booking API Error:", error);
    return new Response(JSON.stringify({ message: "Failed to book house" }), {
      status: 500,
    });
  }
}




// ✅ Fetch logged-in user's bookings
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
    }

    const bookingCollection = await dbConnect("bookings");
    const userId = session.user.id;

    const bookings = await bookingCollection
      .find({ userId })
      .sort({ bookedAt: -1 })
      .toArray();

    return new Response(JSON.stringify(bookings), { status: 200 });
  } catch (error) {
    console.error("Fetch Bookings Error:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch bookings" }), {
      status: 500,
    });
  }
}