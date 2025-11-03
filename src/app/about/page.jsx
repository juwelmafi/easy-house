export const metadata = {
  title: "About",
  description: "Learn more about EasyHouse, your trusted real estate partner.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 bg-gray-50 dark:bg-black flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white dark:bg-[#171717] shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center">
          About EasyHouse
        </h1>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center">
          Welcome to <span className="font-semibold">EasyHouse</span>, your
          trusted partner in finding the perfect home. We aim to simplify the
          process of buying, selling, and renting properties by connecting
          people with opportunities that fit their lifestyle and budget.
        </p>

        {/* Mission Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold dark:text-gray-100  text-gray-800 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            At EasyHouse, our mission is to make real estate simple, transparent,
            and accessible for everyone. Whether you are a first-time homebuyer,
            an investor, or looking for a rental property, we provide the tools
            and support to make your journey hassle-free.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold dark:text-gray-100 text-gray-800 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            We envision a future where finding a home is stress-free and
            enjoyable. EasyHouse strives to be the most trusted real estate
            platform in Bangladesh and beyond, helping people turn their housing
            dreams into reality.
          </p>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Our team consists of passionate professionals who are dedicated to
            delivering excellent service. From real estate experts to customer
            support specialists, we work together to ensure you have the best
            experience with EasyHouse.
          </p>
        </div>
      </div>
    </div>
  );
}
