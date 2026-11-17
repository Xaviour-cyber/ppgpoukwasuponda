import type { Metadata } from "next";
import { PageHero } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Kepengurusan",
  description: "Struktur kepengurusan Badan Pengurus Harian (BPH) Persekutuan Pemuda Gereja POUK Wasuponda.",
};

const placeholderTeam = [
  { role: "Ketua", name: "—", desc: "Memimpin dan mengkoordinasikan seluruh kegiatan PPG." },
  { role: "Wakil Ketua", name: "—", desc: "Mendampingi ketua dan menggantikan saat berhalangan." },
  { role: "Sekretaris", name: "—", desc: "Mengelola administrasi, surat-menyurat, dan dokumentasi." },
  { role: "Bendahara", name: "—", desc: "Mengelola keuangan dan pelaporan dana PPG." },
  { role: "Koordinator Kerohanian", name: "—", desc: "Mengatur pelayanan ibadah, pujian, dan pembinaan iman pemuda." },
  { role: "Koordinator Minat & Bakat", name: "—", desc: "Mengembangkan potensi dan kreativitas anggota pemuda." },
  { role: "Koordinator Diakonia", name: "—", desc: "Mengelola pelayanan sosial dan aksi kasih pemuda." },
  { role: "Koordinator Media & Kreatif", name: "—", desc: "Mengelola media sosial, dokumentasi, dan konten kreatif PPG." },
];

export default function Kepengurusan() {
  return (
    <>
      <PageHero
        badge="Organisasi"
        title="Struktur Kepengurusan PPG"
        desc="Badan Pengurus Harian (BPH) Persekutuan Pemuda Gereja POUK Wasuponda periode berjalan. Data akan diperbarui."
      />

      <section className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 py-16">
        {/* Periode Badge */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-[#EDEDED] bg-[#FAFAFA] px-4 py-1.5 text-[13px] font-[600] text-[#707070]">
            Periode Kepengurusan: akan diperbarui
          </span>
        </div>

        {/* Team Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {placeholderTeam.map((member) => (
            <div
              key={member.role}
              className="group rounded-[20px] border border-[#EDEDED] bg-white p-6 shadow-[0_2px_14px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#141414]/25 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              {/* Avatar Placeholder */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F2F2F2] border border-[#EDEDED]">
                <svg className="h-7 w-7 text-[#ADADAD]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              {/* Role Badge */}
              <span className="inline-flex items-center rounded-full bg-[#EFF6FF] px-3 py-0.5 text-[11px] font-[600] text-[#1D4ED8] mb-2">
                {member.role}
              </span>

              {/* Name */}
              <h3 className="text-[17px] font-[650] text-[#141414] min-h-[24px]">
                {member.name}
              </h3>

              {/* Description */}
              <p className="mt-1.5 text-[13px] text-[#707070] leading-[1.5]">
                {member.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FAFAFA] border border-[#EDEDED] px-5 py-2.5 text-[13px] text-[#707070]">
            <svg className="h-4 w-4 text-[#ADADAD]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>Nama dan foto pengurus akan diperbarui oleh admin PPG.</span>
          </div>
        </div>
      </section>
    </>
  );
}
