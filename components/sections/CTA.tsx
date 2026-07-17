import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="kontak"
      className="relative overflow-hidden bg-[#0A1225] py-28"
    >
      <div className="absolute left-1/2 top-0 h-px w-full max-w-7xl -translate-x-1/2 bg-white/10" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70">
          Siap Memulai?
        </span>

        <h2
          style={{ fontFamily: "var(--font-heading)" }}
          className="mt-8 text-4xl font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
        >
          Mari mulai
          <span className="block bg-linear-to-r from-[#6678E1] to-[#E851A7] bg-clip-text text-transparent">
            Growth Starter Sprint Anda.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/65">
          Ceritakan kondisi bisnis Anda. Kami akan membantu melihat
          peluang activation yang paling relevan sebelum menentukan
          langkah berikutnya.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#6678E1] to-[#E851A7] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#6678E1]/20 transition hover:opacity-90"
          >
            Jadwalkan Konsultasi
          </Link>

          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white"
          >
            Hubungi via WhatsApp
          </Link>
        </div>

        <p className="mt-8 text-sm text-white/45">
          Tanpa komitmen. Diskusi awal untuk memahami kebutuhan bisnis Anda.
        </p>
      </div>
    </section>
  );
}