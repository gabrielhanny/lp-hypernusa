import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const solutionLinks = [
  {
    label: "Nusa Sales Ready",
    href: "#background",
  },
  {
    label: "Nusa Campaign Sprint",
    href: "#background",
  },
  {
    label: "Nusa Growth Handling",
    href: "#background",
  },
];

const navigationLinks = [
  {
    label: "Beranda",
    href: "#beranda",
  },
  {
    label: "Paket NusaHelps",
    href: "#background",
  },

  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Konsultasi",
    href: "#konsultasi",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/hypernusa",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hypernusa/",
    icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/hypernusa",
    icon: FaFacebookF,
  },
  {
    label: "Email",
    href: "mailto:hello@hypernusa.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6285168157168",
    icon: Phone,
  },
];

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Gedung+BEI+Tower+1+Level+3+Unit+304+Senayan+Jakarta+Selatan";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#0A1225]">
      {/* Background city */}
      <div
        className="absolute inset-0 -z-30 scale-105 bg-cover bg-center blur-[2px]"
        style={{
          backgroundImage: "url('/hypernusa-footer-bg.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-20 bg-[#0A1225]/75" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,18,37,0.62)_0%,rgba(10,18,37,0.94)_100%)]" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-14 border-b border-white/10 pb-14 lg:grid-cols-[0.95fr_2fr] lg:gap-20">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="#beranda"
              aria-label="Kembali ke beranda"
              className="inline-block bg-linear-to-r from-[#6678E1] to-[#E851A7] bg-clip-text text-3xl font-extrabold italic text-transparent"
            >
              Hypernusa
            </Link>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Hypernusa membantu UMKM menyiapkan penawaran, promosi, campaign,
              dan proses aktivasi penjualan agar bisnis bergerak lebih
              terarah menuju transaksi.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => {
                const isExternal = href.startsWith("http");

                return (
                  <a
                    key={label}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/65 transition duration-300 hover:-translate-y-1 hover:border-[#E851A7]/40 hover:bg-[#6678E1]/15 hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer links */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Solutions */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
                Solusi
              </h3>

              <ul className="mt-6 space-y-4">
                {solutionLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-white/60 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
                Navigasi
              </h3>

              <ul className="mt-6 space-y-4">
                {navigationLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-white/60 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
                Kontak
              </h3>

              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="mailto:hello@hypernusa.com"
                    className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
                  >
                    <Mail className="size-4 shrink-0" />
                    hello@hypernusa.com
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/6285168157168"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
                  >
                    <Phone className="size-4 shrink-0" />
                    WhatsApp
                  </a>
                </li>

                <li>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Buka lokasi Hypernusa di Google Maps"
                    className="flex max-w-xs items-start gap-2 pt-1 text-sm leading-6 text-white/60 transition hover:text-white"
                  >
                    <MapPin className="mt-1 size-4 shrink-0" />

                    <span>
                      Gedung BEI Tower 1 Level 3, Unit 304, Senayan, Jakarta
                      Selatan
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-4 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PT Anak Muda Nusantara. Seluruh hak dilindungi.</p>

          <p>
            Dibangun oleh{" "}
            <span className="bg-linear-to-r from-[#6678E1] to-[#E851A7] bg-clip-text font-semibold text-transparent">
              Hypernusa
            </span>{" "}
            di Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}