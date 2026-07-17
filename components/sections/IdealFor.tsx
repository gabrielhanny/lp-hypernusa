import { Check, X } from "lucide-react";

const idealItems = [
  "Sudah punya produk atau jasa yang siap dijual.",
  "Sudah pernah mendapatkan transaksi.",
  "Punya channel aktif seperti WhatsApp, Instagram, marketplace, toko fisik, atau referral.",
  "Punya peluang mendapatkan inquiry, transaksi, atau repeat order.",
  "Ingin merapikan cara jualan, promosi, dan follow-up customer.",
  "Owner atau tim siap memberikan data, konteks bisnis, dan akses channel yang dibutuhkan.",
];

const notIdealItems = [
  "Bisnis masih sebatas ide dan belum punya produk.",
  "Belum pernah melakukan transaksi.",
  "Hanya mencari desain feed, logo, atau website murah.",
  "Mengharapkan full branding atau custom system dalam scope sprint.",
  "Tidak siap terlibat dalam proses activation.",
  "Belum memiliki data dasar, harga, offer, atau channel yang dapat digunakan.",
];

const businessTypes = [
  "F&B",
  "Fashion",
  "Beauty & Skincare",
  "Frozen Food",
  "Hampers",
  "Retail",
  "Salon & Beauty Service",
  "Catering",
  "Kursus & Kelas",
  "Studio",
  "Home Service",
  "Jasa Kreatif Lokal",
];

export default function IdealFor() {
  return (
    <section
      id="untuk-siapa"
      className="relative overflow-hidden bg-[#0A1225] py-24 sm:py-28"
    >
      <div className="absolute left-1/2 top-0 h-px w-full max-w-7xl -translate-x-1/2 bg-white/10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70">
            Untuk Siapa
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Cocok untuk bisnis yang
            <span className="block bg-linear-to-r from-[#6678E1] to-[#E851A7] bg-clip-text text-transparent">
              sudah siap bergerak.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Growth Starter Sprint dirancang untuk UMKM yang sudah berjalan,
            tetapi cara jualan, promosi, channel, dan follow-up customer-nya
            masih perlu dirapikan.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#6678E1]/25 bg-[#6678E1]/10 p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#6678E1]/20 text-[#AAB3F5]">
                <Check className="size-5" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Cocok untuk
              </h3>
            </div>

            <div className="mt-8 space-y-4">
              {idealItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-4"
                >
                  <Check className="mt-0.5 size-5 shrink-0 text-[#8996EC]" />

                  <p className="leading-7 text-white/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-white/8 text-white/60">
                <X className="size-5" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Belum cocok untuk
              </h3>
            </div>

            <div className="mt-8 space-y-4">
              {notIdealItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/25 p-4"
                >
                  <X className="mt-0.5 size-5 shrink-0 text-white/40" />

                  <p className="leading-7 text-white/60">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/3 p-7 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
            Contoh bisnis yang relevan
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {businessTypes.map((business) => (
              <span
                key={business}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70"
              >
                {business}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}