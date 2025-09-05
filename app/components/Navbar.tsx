"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X, AlignJustify } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🔹 Top Bar */}
      <div className="bg-black gap-2 text-white text-sm text-center py-2 px-6">
        <p>(850) 999-7905</p>
      </div>

      {/* 🔹 Navbar */}
      <nav
        className={`transition-all duration-300 ${
          showNavbar ? "bg-[#074575] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="logo"
              className="h-12 md:h-14 lg:h-16 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-white font-semibold text-lg">
            <li>
              <Link className="hover:text-gray-200 transition" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200 transition" href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200 transition" href="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200 transition" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200 transition" href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={28} />
            ) : (
              <AlignJustify size={32} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden flex flex-col items-center bg-white text-gray-800 font-medium py-4 space-y-4 shadow-md">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
