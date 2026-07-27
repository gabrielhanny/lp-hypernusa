const activationPoints = [
  {
    number: "01",
    title: "Penawaran Lebih Mudah Dibeli",
    description:
      "Kami membantu memperjelas produk, paket, harga, promo, manfaat, dan alasan customer perlu membeli sekarang.",
  },
  {
    number: "02",
    title: "Promosi Siap Digunakan",
    description:
      "Anda mendapatkan konsep promo, pesan jualan, caption, broadcast, dan materi campaign yang siap dijalankan.",
  },
  {
    number: "03",
    title: "Alur Order Lebih Sederhana",
    description:
      "Instagram, WhatsApp, katalog, dan CTA dirapikan agar customer tahu harus melihat, bertanya, dan order lewat mana.",
  },
  {
    number: "04",
    title: "Customer Lebih Terarah ke Transaksi",
    description:
      "Kami membantu menyiapkan respons inquiry, follow-up calon pembeli, dan dorongan repeat order untuk customer lama.",
  },
];

export default function GrowthStarterSprint() {
  return (
    <section
      id="solusi"
      className="relative scroll-mt-20 overflow-hidden bg-[#0A1225] py-24 sm:py-28"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center blur-[4px]"
        style={{
          backgroundImage: "url('/hypernusa-sprint-bg.jpg')",
        }}
      />

      {/* Dark navy overlay */}
      <div className="absolute inset-0 bg-[#0A1225]/84" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,18,37,0.9)_0%,rgba(10,18,37,0.84)_45%,rgba(10,18,37,0.94)_100%)]" />

      {/* Top and bottom fade */}
      <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-[#0A1225] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-[#0A1225] to-transparent" />

      {/* Divider */}
      <div className="absolute left-1/2 top-0 z-10 h-px w-full max-w-7xl -translate-x-1/2 bg-white/10" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-md">
            NusaHelp — Growth Starter Sprint untuk UMKM
          </span>

        <h2 className="mt-6 text-4xl font-extrabold leading-[1.18] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
  Semua yang dibutuhkan

  <span className="block w-fit bg-linear-to-r from-[#6678E1] to-[#E851A7] bg-clip-text pb-[0.1em] text-transparent">
    agar promosi lebih siap
  </span>

  <span className="mt-[-0.1em] block w-fit bg-linear-to-r from-[#6678E1] to-[#E851A7] bg-clip-text pb-[0.12em] text-transparent">
    menghasilkan order.
  </span>
</h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            NusaHelp membantu UMKM memperjelas penawaran, menyiapkan
            promosi, merapikan alur order, dan mengarahkan customer sampai
            lebih dekat ke transaksi.
          </p>
        </div>

        <div
          id="yang-didapat"
          className="mt-14 scroll-mt-28 grid gap-5 md:grid-cols-2"
        >
          {activationPoints.map((item) => (
            <article
              key={item.number}
              className="group rounded-3xl border border-white/10 bg-[#111A33]/72 p-7 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#16203D]/82"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.2em] text-[#8996EC]">
                  {item.number}
                </span>

                <div className="size-2 rounded-full bg-linear-to-r from-[#6678E1] to-[#E851A7]" />
              </div>

              <h3 className="mt-10 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                {item.description}
              </p>
            </article>
          ))}

          <article className="rounded-3xl border border-[#6678E1]/30 bg-linear-to-br from-[#6678E1]/20 to-[#E851A7]/15 p-7 backdrop-blur-md md:col-span-2">
            <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div>
                <span className="text-sm font-semibold tracking-[0.16em] text-white/70">
                  TERMASUK
                </span>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  Tampilan Bisnis Lebih Meyakinkan
                </h3>
              </div>

              <div>
                <p className="leading-7 text-white/70">
                  Bio, CTA, katalog, testimoni, dan touchpoint utama
                  dirapikan agar customer lebih percaya saat melihat
                  promosi Anda.
                </p>

                <p className="mt-4 text-sm font-medium text-white/85">
                  Perapihan ringan, bukan full branding atau rebranding.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-[#111A33]/65 px-7 py-6 backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
            Yang Anda Dapatkan
          </p>

          <p className="mt-3 text-lg font-medium leading-8 text-white/85">
            Bukan sekadar desain, konten, atau website. NusaHelp
            menyiapkan satu sistem promosi dan penjualan sederhana yang
            bisa langsung digunakan oleh bisnis Anda.
          </p>
        </div>
      </div>
    </section>
  );
}