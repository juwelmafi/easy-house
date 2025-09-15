"use client";

import { useState } from "react";
import axios from "axios";

const HouseTable = ({ houses }) => {
  const [houseList, setHouseList] = useState(houses);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [editHouse, setEditHouse] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input changes in edit form
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditHouse((prev) => ({ ...prev, [name]: value }));
  };

  // Handle save: send PUT request to backend
  const handleSave = async () => {
    if (!editHouse?._id) return; // Make sure you have an ID
    setLoading(true);

    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/houses/${editHouse._id}`,
        editHouse
      );

      // Update local state
      setHouseList((prev) =>
        prev.map((h) => (h._id === editHouse._id ? res.data.house : h))
      );
      alert("House Updated");

      setEditHouse(null); // close modal
    } catch (err) {
      console.error("Error updating house:", err);
      alert("Failed to update house.");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete: send DELETE request to backend
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this house?")) return;

    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/houses/${id}`
      );
      // Update local state
      setHouseList((prev) => prev.filter((h) => h._id !== id));
      alert("House deleted");

    } catch (err) {
      console.error("Error deleting house:", err);
      alert("Failed to delete house.");
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-white">
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Country</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {houseList.map((house, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border line-clamp-2">{house.title}</td>
              <td className="px-4 py-2 border">{house.price}</td>
              <td className="px-4 py-2 border">{house.country}</td>
              <td className="px-4 py-2 border flex justify-center items-center space-x-2">
                <button
                  onClick={() => setSelectedHouse(house)}
                  className="bg-blue-50 border border-blue-500 px-3 py-1 rounded hover:bg-blue-100"
                >
                  View
                </button>
                <button
                  onClick={() => setEditHouse(house)}
                  className="bg-yellow-50 border border-yellow-500 px-3 py-1 rounded hover:bg-yellow-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(house._id)}
                  className="bg-red-50 border border-red-500 px-3 py-1 rounded hover:bg-red-100"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {editHouse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit House</h2>
            <form className="space-y-3">
              <input
                type="text"
                name="title"
                value={editHouse.title}
                onChange={handleEditChange}
                className="w-full border p-2 rounded"
                placeholder="Title"
              />
              <input
                type="text"
                name="address"
                value={editHouse.address}
                onChange={handleEditChange}
                className="w-full border p-2 rounded"
                placeholder="Address"
              />
              <input
                type="text"
                name="price"
                value={editHouse.price}
                onChange={handleEditChange}
                className="w-full border p-2 rounded"
                placeholder="Price"
              />
              <input
                type="number"
                name="beds"
                value={editHouse.beds}
                onChange={handleEditChange}
                className="w-full border p-2 rounded"
                placeholder="Beds"
              />
              <input
                type="number"
                name="baths"
                value={editHouse.baths}
                onChange={handleEditChange}
                className="w-full border p-2 rounded"
                placeholder="Baths"
              />
              <input
                type="text"
                name="area"
                value={editHouse.area}
                onChange={handleEditChange}
                className="w-full border p-2 rounded"
                placeholder="Area"
              />
              <input
                type="text"
                name="country"
                value={editHouse.country}
                onChange={handleEditChange}
                className="w-full border p-2 rounded"
                placeholder="Country"
              />
            </form>

            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setEditHouse(null)}
                className="bg-gray-300 px-4 py-1 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Modal */}
      {selectedHouse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-2">{selectedHouse.title}</h2>
            <img
              src={selectedHouse.image}
              alt={selectedHouse.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p>
              <strong>Address:</strong> {selectedHouse.address}
            </p>
            <p>
              <strong>Price:</strong> {selectedHouse.price}
            </p>
            <p>
              <strong>Beds:</strong> {selectedHouse.beds}
            </p>
            <p>
              <strong>Baths:</strong> {selectedHouse.baths}
            </p>
            <p>
              <strong>Area:</strong> {selectedHouse.area}
            </p>
            <p>
              <strong>Country:</strong> {selectedHouse.country}
            </p>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setSelectedHouse(null)}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HouseTable;
