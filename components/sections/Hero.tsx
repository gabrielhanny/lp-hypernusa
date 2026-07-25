import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0A1225] px-6 pt-20"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center blur-[3px]"
        style={{
          backgroundImage: "url('/hypernusa-hero-bg.jpg')",
        }}
      />

      {/* Dark navy overlay */}
      <div className="absolute inset-0 bg-[#0A1225]/72" />

      {/* Gradient overlay agar teks kiri lebih fokus */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,18,37,0.96)_0%,rgba(10,18,37,0.82)_48%,rgba(10,18,37,0.58)_100%)]" />

      {/* Soft bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#0A1225] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-md">
            Growth Starter Sprint untuk UMKM
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
  Jualan lebih jelas.
  <span className="block bg-linear-to-r from-[#6678E1] to-[#E851A7] bg-clip-text text-transparent">
    Bisnis lebih bertumbuh.
  </span>
</h1>

<p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
  Hypernusa membantu UMKM menyusun penawaran, promosi, dan alur customer
  yang lebih terarah sehingga setiap campaign lebih siap menghasilkan
  penjualan.
</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#kontak"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#6678E1] to-[#E851A7] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#6678E1]/20 transition hover:opacity-90"
            >
              Konsultasikan Bisnis Saya
            </Link>

            <Link
              href="#solusi"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/85 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
            >
              Lihat Cara Kerjanya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}