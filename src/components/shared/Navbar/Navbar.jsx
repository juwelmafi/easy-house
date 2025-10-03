"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession, signOut } from "next-auth/react"; // ✅ import signOut
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  if (!pathname.startsWith("/dashboard")) {
    return (
      <nav className="w-full border-b bg-white dark:bg-gray-900 fixed top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <span className="text-orange-500">Easy</span><span className="text-teal-400">House</span>
          </Link>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {session && (
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {session ? (
              <div>
                <Button
                onClick={() => signOut({ callbackUrl: "/" })} className="bg-orange-500"
              >
                Logout
              </Button>
              <ThemeToggle/>
              </div>

            ) : (
              <div className="space-x-2 hidden md:block">
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/register">Sign Up</Link>
                </Button>
                <ThemeToggle/>
              </div>
            )}

            {/* Mobile Menu */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/">Home</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about">About</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/contact">Contact</Link>
                  </DropdownMenuItem>

                  {session && (
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild>
                    {session ? (
                     <div>
                      <Button
                        onClick={() => signOut({ callbackUrl: "/" })} className="bg-orange-500"
                      >
                        Logout
                      </Button>
                      <ThemeToggle/>
                     </div> 
                      
                    ) : (
                      <div className="space-x-2 md:hidden">
                        <Button variant="outline" asChild>
                          <Link href="/login">Login</Link>
                        </Button>
                        <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                          <Link href="/register">Sign Up</Link>
                        </Button>
                        <ThemeToggle/>
                      </div>
                    )}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
