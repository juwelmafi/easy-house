"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-black">
      {/* Sidebar */}
      <div
        className={`fixed dark:border-r border-gray-600 inset-y-0 left-0 bg-white dark:bg-black shadow-lg z-30 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 w-64`}
      >
        <div className="p-6">
          <Link href="/">
            <h1 className="text-2xl font-bold text-orange-500">Easy<span className="text-teal-400">House</span></h1>
          </Link>
        </div>
        <nav className="mt-6">
          <Link
            href="/dashboard"
            className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-100 hover:bg-emerald-100 dark:hover:bg-[#171717] rounded"
          >
            <FiHome className="mr-3" /> Dashboard
          </Link>
          <Link
            href="/dashboard/add-house"
            className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-100 hover:bg-emerald-100 dark:hover:bg-[#171717] rounded"
          >
            <FiUser className="mr-3" /> Add House
          </Link>
          <Link
            href="/dashboard/manage-house"
            className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-100 hover:bg-emerald-100 dark:hover:bg-[#171717] rounded"
          >
            <FiSettings className="mr-3" /> Manage House
          </Link>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden md:ml-64">
        {/* Navbar */}
        <header className="flex items-center dark:border-b border-gray-600 justify-between bg-white dark:bg-black shadow px-4 py-3 md:px-6">
          <div className="flex items-center">
            <button
              className="text-gray-700 dark:text-gray-100 md:hidden mr-3 focus:outline-none"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FiMenu size={24} />
            </button>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100">Dashboard</h2>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block border rounded px-3 py-1 focus:outline-none focus:ring focus:border-emerald-500"
            />
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              U
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
