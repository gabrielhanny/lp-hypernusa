import Image from "next/image";
import { ExternalLink } from "lucide-react";

const showcaseUrl =
  "https://showcase-umkm-hypernusa.lovable.app/";

export default function PortfolioShowcase() {
  return (
    <section
      id="portfolio"
      className="bg-[#0A1225] px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Portfolio Website UMKM
          </span>

          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Contoh Project Website yang
            <span className="block bg-linear-to-r from-[#6678E1] to-[#E851A7] bg-clip-text text-transparent">
              Bisa Kami Bangun
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-white/70 sm:text-lg">
            Tampilan profesional yang dirancang untuk memperjelas penawaran
            dan mengarahkan calon pelanggan mengambil tindakan.
          </p>
        </div>

        <a
          href={showcaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lihat demo website UMKM"
          className="group block overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
        >
          <div className="relative aspect-video overflow-hidden bg-slate-100">
            <Image
              src="/portfolio/showcase-umkm-hypernusa.png"
              alt="Showcase tiga konsep landing page UMKM"
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>

          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6678E1]">
                Concept Preview
              </span>

              <h3 className="mt-1 text-lg font-semibold text-slate-950">
                Landing Page untuk Berbagai Bisnis UMKM
              </h3>
            </div>

            <span className="inline-flex items-center gap-2 font-semibold text-[#6678E1] transition-colors group-hover:text-[#E851A7]">
              Lihat Demo Website
              <ExternalLink className="h-4 w-4" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}