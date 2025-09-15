import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcrypt";
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!email || !password) {
      return Response.json(
        { message: "Email and password required" },
        { status: 400 }
      );
    }

    const users = await dbConnect("users");

    // check if user exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return Response.json({ message: "User already exists" }, { status: 400 });
    }

    // insert new user
    const hashedPass = await bcrypt.hash(password, 10);
    body.password = hashedPass;
    await users.insertOne({ name, email, password: hashedPass, createdAt: new Date() });

    return Response.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
