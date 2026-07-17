const steps = [
  {
    number: "01",
    title: "Memahami Kondisi Bisnis",
    description:
      "Kami mempelajari produk, penawaran, customer, channel penjualan, dan proses jualan yang sudah berjalan.",
  },
  {
    number: "02",
    title: "Menentukan Arah Aktivasi",
    description:
      "Kami memilih produk atau jasa yang akan didorong, target customer, promo, pesan utama, dan CTA.",
  },
  {
    number: "03",
    title: "Menyiapkan Aktivasi",
    description:
      "Materi promosi, channel penjualan, customer path, serta alur inquiry dan follow-up dirapikan.",
  },
  {
    number: "04",
    title: "Menjalankan Go-Live",
    description:
      "Campaign atau promo dijalankan sesuai jadwal, lalu respons awal dan pola inquiry mulai dibaca.",
  },
  {
    number: "05",
    title: "Menggerakkan Customer",
    description:
      "Inquiry potensial dan customer lama diarahkan melalui follow-up, repeat order, testimonial, atau referral.",
  },
  {
    number: "06",
    title: "Recap dan Next Move",
    description:
      "Hasil activation dirangkum untuk melihat pembelajaran, hambatan, dan langkah berikutnya yang paling realistis.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="cara-kerja"
      className="relative overflow-hidden bg-[#0A1225] py-24 sm:py-28"
    >
      <div className="absolute left-1/2 top-0 h-px w-full max-w-7xl -translate-x-1/2 bg-white/10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70">
              Cara Kerja
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Dari kondisi hari ini,
              <span className="block bg-linear-to-r from-[#6678E1] to-[#E851A7] bg-clip-text text-transparent">
                sampai activation berjalan.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              Growth Starter Sprint tidak berhenti pada rekomendasi.
              Hypernusa mendampingi proses dari penentuan arah hingga
              activation recap.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-5.75 top-8 hidden w-px bg-linear-to-b from-[#6678E1] via-[#B463CE] to-[#E851A7] sm:block" />

            <div className="space-y-5">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="relative rounded-3xl border border-white/10 bg-white/4 p-6 backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:pl-20"
                >
                  <div className="mb-5 flex size-12 items-center justify-center rounded-full border border-white/15 bg-[#0A1225] text-sm font-bold text-white sm:absolute sm:left-0 sm:top-1/2 sm:mb-0 sm:-translate-x-0 sm:-translate-y-1/2">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/60">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}