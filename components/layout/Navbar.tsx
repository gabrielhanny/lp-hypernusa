"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Solusi", href: "#solusi" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Untuk Siapa", href: "#untuk-siapa" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0A1225]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
  href="#beranda"
  onClick={closeMenu}
  className="flex items-center"
>
  <Image
    src="/hypernusa-logo.svg"
    alt="Hypernusa"
    width={180}
    height={48}
    priority
    className="h-14 w-auto"
  />
</Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#kontak"
          className="hidden rounded-full bg-linear-to-r from-[#6678E1] to-[#E851A7] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#6678E1]/20 transition-opacity hover:opacity-90 md:inline-flex"
        >
          Konsultasi
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
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

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0A1225]/95 px-6 py-6 backdrop-blur-xl md:hidden">
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
              className="mt-4 flex justify-center rounded-full bg-linear-to-r from-[#6678E1] to-[#E851A7] px-6 py-3 text-sm font-semibold text-white"
            >
              Konsultasi
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}