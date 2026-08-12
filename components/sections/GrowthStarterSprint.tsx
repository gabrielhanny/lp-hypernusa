const packages = [
  {
    name: "Nusa Sales Ready",
    subtitle: "Setup + First Activation",
    price: "Rp10.000.000",
    priceSuffix: "mulai dari",
    duration: "±4 minggu",
    preparation: "Umumnya 6 minggu termasuk persiapan",
    bestFor:
      "Bisnis yang sudah memiliki produk, tetapi penawaran, pesan penjualan, dan kesiapan channel-nya belum jelas.",
    features: [
      "Review kesiapan bisnis dan channel",
      "Fokus pada 1 penawaran utama",
      "Arah pesan penjualan dan konten",
      "1 mekanisme promosi",
      "Perapihan channel bisnis Instagram",
      "6 aset desain: 4 statis + 2 carousel",
      "Copywriting dan caption",
      "Scheduling dan publishing",
      "1 mini activation selama 5 hingga 7 hari",
      "Monitoring ringan dan rekomendasi lanjutan",
    ],
    channel:
      "1 channel bisnis Instagram. Facebook dapat digunakan sebagai mirror jika struktur akun memungkinkan.",
    accent: "from-[#6678E1] to-[#8B72E8]",
  },
  {
    name: "Nusa Campaign Sprint",
    subtitle: "One Focused Sales Campaign",
    price: "Rp16.500.000",
    priceSuffix: "mulai dari",
    duration: "±4 minggu",
    preparation: "Umumnya 8 minggu termasuk persiapan",
    bestFor:
      "Bisnis yang siap menjalankan satu campaign, promosi, atau momentum penjualan tertentu.",
    features: [
      "1 tujuan campaign yang terfokus",
      "Penyusunan arsitektur campaign",
      "1 konsep dan mekanisme promosi",
      "Pesan campaign dan CTA",
      "Content dan channel plan",
      "6 aset campaign: 4 statis + 2 carousel",
      "Copywriting dan caption",
      "Scheduling dan publishing",
      "Periode aktivasi 10–14 hari",
      "Monitoring, recap, dan rekomendasi",
    ],
    channel:
      "1 channel sosial utama. Penambahan channel lain akan dihitung sebagai scope terpisah.",
    accent: "from-[#806DE5] to-[#C45FC9]",
    featured: true,
  },
  {
    name: "Nusa Growth Handling",
    subtitle: "Monthly Content + Sales Activation",
    price: "Rp10.500.000",
    priceSuffix: "mulai dari / bulan",
    duration: "Minimum 3 bulan",
    preparation: "Pendampingan bulanan berkelanjutan",
    bestFor:
      "Bisnis yang membutuhkan eksekusi marketing bulanan yang konsisten dan terarah.",
    features: [
      "Monthly planning",
      "Arah dan kalender konten",
      "Maksimal 12 konten per bulan",
      "Mayoritas konten statis atau carousel",
      "Copywriting dan caption",
      "Scheduling dan publishing",
      "1 light monthly activation",
      "Monitoring dasar",
      "Laporan dan rekomendasi bulanan",
    ],
    channel:
      "1 channel sosial utama. Facebook dapat digunakan sebagai mirror jika tersedia.",
    accent: "from-[#C45FC9] to-[#E851A7]",
  },
];

const exclusions = [
  "Produksi foto atau video original",
  "Reels dan video production",
  "Ads management dan media spend",
  "KOL, talent, hadiah, atau rewards",
  "Event production",
  "Marketplace operation",
  "Daily customer service handling",
  "Order dan fulfillment",
];

export default function NusaHelps() {
  return (
    <section id="background" className="bg-[#0A1225] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading — mengikuti alignment Hero */}
        <div className="max-w-4xl">
          <span className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            NusaHelps Package
          </span>

          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-4xl font-extrabold leading-[1.08] text-white lg:text-6xl"
          >
            Pilih dukungan yang sesuai
            <span className="block bg-linear-to-r from-[#6678E1] to-[#E851A7] bg-clip-text text-transparent">
              dengan kesiapan bisnis Anda.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Mulai dari menyiapkan fondasi penjualan, menjalankan satu campaign,
            hingga pendampingan marketing bulanan yang lebih konsisten.
          </p>
        </div>

        {/* Package cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`relative flex h-full flex-col rounded-3xl border bg-white/4 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06] xl:p-7 ${
                item.featured
                  ? "border-[#C45FC9]/60 shadow-[0_20px_60px_rgba(196,95,201,0.12)]"
                  : "border-white/10"
              }`}
            >
              {/* Package identity */}
              <div className="min-h-27">
                <div
                  className={`mb-5 h-1 w-14 rounded-full bg-linear-to-r ${item.accent}`}
                />

                <div className="flex items-start justify-between gap-3">
                  <p className="max-w-[75%] text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-white/50">
                    {item.subtitle}
                  </p>

                  {item.featured && (
                    <span className="shrink-0 rounded-full bg-[#E851A7] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                      Campaign
                    </span>
                  )}
                </div>

                <h3
                  style={{ fontFamily: "var(--font-heading)" }}
                  className="mt-2 text-2xl font-extrabold leading-tight text-white"
                >
                  {item.name}
                </h3>
              </div>

              {/* Price and duration */}
              <div className="min-h-44.5 border-y border-white/10 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">
                  {item.priceSuffix}
                </p>

                <p className="mt-1 whitespace-nowrap text-3xl font-extrabold tracking-tight text-white">
                  {item.price}
                </p>

                <div className="mt-5">
                  <p className="font-semibold text-white">{item.duration}</p>

                  <p className="mt-1 text-sm leading-6 text-white/50">
                    {item.preparation}
                  </p>
                </div>
              </div>

              {/* Best for */}
              <div className="min-h-47 border-b border-white/10 py-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#A9B4FF]">
                  Cocok untuk
                </p>

                <p className="mt-3 leading-7 text-white/70">
                  {item.bestFor}
                </p>
              </div>

              {/* Features — expands to keep bottoms aligned */}
              <div className="flex-1 py-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#A9B4FF]">
                  Yang Anda dapatkan
                </p>

                <ul className="mt-4 space-y-3">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-white/70"
                    >
                      <span className="mt-2.25 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E851A7]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom content */}
              <div className="mt-auto">
                <div className="min-h-35.5 rounded-2xl border border-white/10 bg-black/10 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/50">
                    Channel dasar
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {item.channel}
                  </p>
                </div>

                <a
                  href="#konsultasi"
                  className={`mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-linear-to-r ${item.accent} px-5 py-3 text-center text-sm font-bold text-white transition hover:brightness-110`}
                >
                  Konsultasikan Kebutuhan
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Scope information */}
        <div className="mt-8 grid gap-8 rounded-3xl border border-white/10 bg-white/4 p-6 md:grid-cols-2 md:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#A9B4FF]">
              Belum termasuk
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {exclusions.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs leading-5 text-white/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#A9B4FF]">
              Tanggung jawab klien
            </p>

            <p className="mt-4 text-sm leading-7 text-white/70">
              Menyediakan informasi produk dan penawaran, stok dan harga,
              akses akun, materi yang tersedia, approval tepat waktu, respons
              customer, proses transaksi, pembayaran, serta fulfillment.
            </p>
          </div>
        </div>

        {/* Pricing disclaimer */}
        <div className="mt-6 rounded-2xl border border-[#E851A7]/20 bg-[#E851A7]/5 px-6 py-5">
          <p className="text-sm leading-7 text-white/60">
            <strong className="text-white">Catatan harga:</strong> Harga di atas
            berlaku untuk konfigurasi dasar. Penawaran final menyesuaikan scope,
            channel tambahan, volume konten, kebutuhan video atau Reels, talent
            atau KOL, kompleksitas produksi, media dan ads, percepatan timeline,
            jumlah revisi, serta kebutuhan tambahan lainnya.
          </p>
        </div>
      </div>
    </section>
  );
}