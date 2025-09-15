// middleware.js (place at project root)
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // If user is not logged in, redirect to /login
    if (!req.nextauth?.token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // only allow when token exists
    },
  }
);

// Protect dashboard routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
