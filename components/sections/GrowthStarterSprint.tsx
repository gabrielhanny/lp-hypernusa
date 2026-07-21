const activationPoints = [
  {
    number: "01",
    title: "Arah Penawaran",
    description:
      "Menentukan produk, paket, harga, promo, target customer, dan CTA yang akan didorong.",
  },
  {
    number: "02",
    title: "Materi Promosi",
    description:
      "Menyiapkan konsep campaign, pesan jualan, caption, dan materi promosi yang siap digunakan.",
  },
  {
    number: "03",
    title: "Channel Penjualan",
    description:
      "Merapikan jalur customer dari melihat, tertarik, bertanya, hingga melakukan order.",
  },
  {
    number: "04",
    title: "Aktivasi & Follow-up",
    description:
      "Mendampingi promo saat dijalankan serta mengarahkan inquiry dan customer lama secara lebih terstruktur.",
  },
  {
    number: "05",
    title: "Recap & Next Move",
    description:
      "Membaca respons activation dan menentukan langkah paling realistis berikutnya.",
  },
];

export default function GrowthStarterSprint() {
  return (
    <section
      id="solusi"
      className="relative overflow-hidden bg-[#0A1225] py-24 sm:py-28"
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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,18,37,0.88)_0%,rgba(10,18,37,0.82)_45%,rgba(10,18,37,0.92)_100%)]" />

      {/* Top and bottom fade */}
      <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-[#0A1225] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-[#0A1225] to-transparent" />

      {/* Divider */}
      <div className="absolute left-1/2 top-0 z-10 h-px w-full max-w-7xl -translate-x-1/2 bg-white/10" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-md">
            Hypernusa Growth Starter Sprint
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Satu aktivasi jualan.
            <span className="block bg-linear-to-r from-[#6678E1] to-[#E851A7] bg-clip-text text-transparent">
              Disiapkan sampai benar-benar berjalan.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Hypernusa membantu UMKM menjalankan satu campaign atau promo
            secara langsung, mulai dari memperjelas penawaran, menyiapkan
            materi promosi, merapikan channel penjualan, mendampingi
            go-live, hingga membaca hasil activation.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activationPoints.map((item) => (
            <article
              key={item.number}
              className="group rounded-3xl border border-white/10 bg-[#111A33]/70 p-7 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#16203D]/80"
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

          <article className="rounded-3xl border border-[#6678E1]/30 bg-linear-to-br from-[#6678E1]/20 to-[#E851A7]/15 p-7 backdrop-blur-md">
            <span className="text-sm font-semibold tracking-[0.16em] text-white/70">
              TERMASUK
            </span>

            <h3 className="mt-10 text-2xl font-bold text-white">
              Brand Polish
            </h3>

            <p className="mt-4 leading-7 text-white/70">
              Perapihan minimum pada bio, CTA, trust element, katalog,
              dan touchpoint utama agar activation lebih jelas dan
              meyakinkan.
            </p>

            <p className="mt-5 text-sm font-medium text-white/85">
              Bukan full branding atau rebranding.
            </p>
          </article>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-[#111A33]/65 px-7 py-6 backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
            Yang kami jual
          </p>

          <p className="mt-3 text-lg font-medium leading-8 text-white/85">
            Bukan sekadar konten, website, atau template. Kami membantu
            menyiapkan activation yang dapat langsung dijalankan dalam
            kondisi bisnis Anda hari ini.
          </p>
        </div>
      </div>
    </section>
  );
}