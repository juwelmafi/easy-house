import { ObjectId } from "mongodb";
import { dbConnect } from "@/lib/dbConnect";

export async function PUT(req, { params }) {
  const { id } = params;

  try {
    const body = await req.json();

    // Remove _id if present in the request body
    if (body._id) delete body._id;

    const houseCollection = await dbConnect("houses");

    await houseCollection.updateOne({ _id: new ObjectId(id) }, { $set: body });

    const updatedHouse = await houseCollection.findOne({
      _id: new ObjectId(id),
    });

    return new Response(JSON.stringify({ house: updatedHouse }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "Failed to update house",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

//delete house

export async function DELETE(req, { params }) {
  const { id } = await params;

  try {
    const houseCollection = await dbConnect("houses");

    const result = await houseCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ message: "House not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "House deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Failed to delete house", error: error.message }),
      { status: 500 }
    );
  }
}
export async function GET(req, { params }) {
  const { id } = await params;
  const houseCollection = await dbConnect("houses");

  try {
    const house = await houseCollection.findOne({ _id: new ObjectId(id) });

    if (!house) {
      return new Response(JSON.stringify({ message: "House not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(house), { status: 200 });
  } catch (error) {
    console.error("Error fetching house:", error);
    return new Response(JSON.stringify({ message: "Invalid ID" }), {
      status: 400,
    });
  }
}





