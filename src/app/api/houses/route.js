import { dbConnect } from "@/lib/dbConnect";


// add houses
export async function POST(req) {
  try {
    const body = await req.json();
    const houseCollection = await dbConnect("houses");
    const result = await houseCollection.insertOne(body);
    return Response.json(
      { message: "data saved successfully", result },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}



// Get houses
export async function GET(req){
  const houseCollection = await dbConnect("houses");
  const result = await houseCollection.find({}).toArray();
  return Response.json(result, {status: 200})
}

// edit house

// /app/api/houses/[id]/route.js

export async function PUT(req, { params }) {
  const { id } = params;

  try {
    const body = await req.json();

    // TODO: Implement your database update logic here
    // Example: update house by id in MongoDB
    // const updatedHouse = await db.collection("houses").updateOne({ _id: id }, { $set: body });

    return new Response(
      JSON.stringify({
        message: "House updated successfully",
        id,
        data: body,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to update house", error }),
      { status: 500 }
    );
  }
}



