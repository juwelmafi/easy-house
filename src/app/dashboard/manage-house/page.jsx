// app/components/HouseListServer.jsx
import axios from "axios";
import HouseTable from "./HouseTable";

async function fetchHouses() {
  try {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await axios.get(`${baseURL}/api/houses`); // Replace with your API
    return res.data; // axios automatically parses JSON
  } catch (error) {
    console.error("Error fetching houses:", error);
    return []; // return empty array on error
  }
}

const HouseListServer = async () => {
  const houses = await fetchHouses();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Houses</h1>
      <HouseTable houses={houses} />
    </div>
  );
};

export default HouseListServer;
