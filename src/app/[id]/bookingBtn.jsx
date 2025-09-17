"use client";

import axios from "axios";
import { useState } from "react";

export default function BookHouseButton({ houseId }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleBooking = async () => {
    try {
      setLoading(true);
      setMessage("");

      // You can also send logged-in user info here if using NextAuth
      const response = await axios.post("/api/bookings", { houseId });


      if (response.status === 201) {
        setMessage("House booked successfully!");
      } else {
        setMessage("Failed to book house.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      setMessage("Error booking house.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleBooking}
        disabled={loading}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
      >
        {loading ? "Booking..." : "Book House"}
      </button>
      {message && <p className="mt-2 text-sm text-gray-700">Please log in first or {message}</p>}
    </div>
  );
}
