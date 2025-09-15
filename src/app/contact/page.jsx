export const metadata = {
  title: "EasyHouse",
  description: "Get in touch with EasyHouse for any inquiries or support.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-emerald-600 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Have questions about buying, selling, or renting properties?  
          Fill out the form below or reach us through our contact info.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="text-center">
            <h2 className="font-semibold text-lg text-gray-800">Phone</h2>
            <p className="text-gray-600">+880 1234 567 890</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-lg text-gray-800">Email</h2>
            <p className="text-gray-600">support@easyhouse.com</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-lg text-gray-800">Address</h2>
            <p className="text-gray-600">Dhaka, Bangladesh</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-lg text-gray-800">Working Hours</h2>
            <p className="text-gray-600">Sat - Thu: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
          <button
            type="submit"
            className="bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-emerald-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
