import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0A1225] px-6 pt-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 backdrop-blur">
            Growth Starter Sprint untuk UMKM
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Bantu bisnis Anda
            <span className="block bg-linear-to-r from-[#6678E1] to-[#E851A7] bg-clip-text text-transparent">
              bergerak lebih siap.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
            Hypernusa membantu UMKM merapikan penawaran, menyiapkan
            promosi, memperjelas alur customer, dan menjalankan aktivasi
            jualan yang benar-benar bisa dipakai.
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
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10 hover:text-white"
            >
              Lihat Cara Kerjanya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}