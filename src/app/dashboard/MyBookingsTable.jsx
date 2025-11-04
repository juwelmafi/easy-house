"use client";

export default function MyBookingsTable({ bookings }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-white dark:bg-[#171717] text-gray-700 dark:text-white">
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">House Title</th>
            <th className="px-4 py-2 border">Location</th>
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Booked At</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-[#171717]">
          {bookings.length > 0 ? (
            bookings.map((b, idx) => (
              <tr
                key={b._id}
                className="text-center hover:bg-gray-50 dark:hover:bg-black transition"
              >
                <td className="px-4 py-2 border">{idx + 1}</td>
                <td className="px-4 py-2 border font-medium">
                  {b.house?.title}
                </td>
                <td className="px-4 py-2 border">{b.house?.location}</td>
                <td className="px-4 py-2 border">${b.house?.price}</td>
                <td className="px-4 py-2 border">
                  {new Date(b.bookedAt).toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="px-4 py-6 border text-gray-500 text-center"
              >
                No bookings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
