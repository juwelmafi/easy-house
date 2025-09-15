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
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

      // You can also send logged-in user info here if using NextAuth
      const response = await axios.post(`${baseUrl}/api/bookings`, {
        houseId,
      });

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
        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg"
      >
        {loading ? "Booking..." : "Book House"}
      </button>
      {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
    </div>
  );
}
