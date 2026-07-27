import Link from "next/link";

const whatsappNumber = "6285168157168";

const whatsappMessage = encodeURIComponent(
  "Halo Hypernusa, saya tertarik dengan NusaHelp dan ingin berkonsultasi mengenai bisnis saya."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function CTA() {
  return (
    <section
      id="kontak"
      className="relative overflow-hidden bg-[#0A1225] py-28"
    >
      {/* Divider */}
      <div className="absolute left-1/2 top-0 h-px w-full max-w-7xl -translate-x-1/2 bg-white/10" />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6678E1]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-md">
          Konsultasikan Bisnis Anda
        </span>

        <h2 className="mt-8 text-4xl font-extrabold leading-[1.22] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
          Jangan biarkan promosi
          <span className="block bg-linear-to-r from-[#6678E1] to-[#E851A7] bg-clip-text text-transparent">
            berhenti di perhatian.
          </span>

          <span className="block bg-linear-to-r from-[#6678E1] to-[#E851A7] bg-clip-text text-transparent">
            Arahkan sampai menjadi transaksi.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70">
          Ceritakan kondisi bisnis Anda kepada tim Hypernusa. Kami akan
          membantu menemukan langkah yang paling tepat agar promosi lebih
          terarah dan menghasilkan order.
        </p>

        <div className="mt-11 flex justify-center">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#6678E1] to-[#E851A7] px-10 py-4 text-base font-semibold text-white shadow-lg shadow-[#6678E1]/20 transition duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            Konsultasikan via WhatsApp
          </Link>
        </div>

        <p className="mt-7 text-sm text-white/45">
          Respon langsung dari tim Hypernusa • Gratis konsultasi awal • Tanpa komitmen
        </p>
      </div>
    </section>
  );
}