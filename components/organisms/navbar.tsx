"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, User, ShoppingCart, LogIn, Settings, UserCircle, LogOut } from "lucide-react"


import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../atoms/dropdown-menu"
import { Button } from "../atoms/button"
import { usePathname } from "next/navigation"


export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname();

  const navLinks = [
    { href: "/cloth-design", label: "Cloth Design" },
    { href: "/fabric", label: "Fabric" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
    { href: "/support", label: "Support" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur bg-[#FFBBE1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="flex items-center gap-1.5">
              <div className="h-8 w-1 bg-primary" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-none tracking-tight text-foreground">ATELIER</span>
                <span className="text-[10px] font-light uppercase tracking-widest text-muted-foreground">
                  Tailoring
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-light tracking-wide transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-accent hover:after:w-full",
                    isActive && "text-accent after:w-full"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Desktop Icons */}
          <div className="hidden items-center gap-3 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-secondary"
                  aria-label="User account"
                >
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-[#FFBBE1]">
                {!isLoggedIn ? (
                  <DropdownMenuItem onClick={() => setIsLoggedIn(true)}>
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </DropdownMenuItem>
                ) : (
                  <>
                    <DropdownMenuItem>
                      <UserCircle className="mr-2 h-4 w-4" />
                      User Info
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="relative h-9 w-9 rounded-full hover:bg-secondary"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-medium text-accent-foreground">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen ? "max-h-[500px]" : "max-h-0",
        )}
      >
        <div className="border-t border-border/40 bg-card px-4 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-light tracking-wide text-foreground transition-colors hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-border/40 pt-4">
              {!isLoggedIn ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start gap-2 bg-transparent"
                  onClick={() => setIsLoggedIn(true)}
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              ) : (
                <>
                  <Button variant="outline" size="sm" className="w-full justify-start gap-2 bg-transparent">
                    <UserCircle className="h-4 w-4" />
                    User Info
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start gap-2 bg-transparent">
                    <Settings className="h-4 w-4" />
                    Settings
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start gap-2 bg-transparent"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </>
              )}
              <Button
                variant="outline"
                size="sm"
                className="relative w-full justify-start gap-2 bg-transparent"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-4 w-4" />
                Cart (0)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
