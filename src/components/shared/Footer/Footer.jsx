"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname();
  if(!pathname.startsWith("/dashboard")){
    return (
    <footer className="bg-teal-400 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-2xl font-bold">EasyHouse</h2>
          <p className="mt-2 text-sm text-emerald-100">
            Building modern web applications with love
          </p>
        </div>

        {/* Column 2: Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-emerald-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-emerald-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-emerald-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm text-emerald-100 mb-3">
            Subscribe to our newsletter for latest updates.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md text-white w-full"
            />
            <Button type="submit" variant="secondary" className="bg-orange-500 text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white text-center py-4 text-sm text-emerald-100">
        © {new Date().getFullYear()} EasyHouse. All rights reserved.
      </div>
    </footer>
  )
  }
  
}
