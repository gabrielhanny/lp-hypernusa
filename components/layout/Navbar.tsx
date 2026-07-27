"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    label: "Beranda",
    href: "#beranda",
  },
  {
    label: "NusaHelp",
    href: "#solusi",
  },
  {
    label: "Yang Didapat",
    href: "#yang-didapat",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0A1225]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#beranda"
          onClick={closeMenu}
          aria-label="Kembali ke beranda"
          className="flex items-center"
        >
          <Image
            src="/hypernusa-logo.svg"
            alt="Hypernusa"
            width={180}
            height={48}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-9 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/65 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#kontak"
          className="hidden items-center justify-center rounded-full bg-linear-to-r from-[#6678E1] to-[#E851A7] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#6678E1]/20 transition duration-200 hover:-translate-y-0.5 hover:opacity-90 md:inline-flex"
        >
          Konsultasikan Bisnis
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10 md:hidden"
        >
          {isOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#0A1225]/95 px-6 py-6 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#kontak"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center rounded-full bg-linear-to-r from-[#6678E1] to-[#E851A7] px-6 py-3 text-sm font-semibold text-white"
            >
              Konsultasikan Bisnis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}