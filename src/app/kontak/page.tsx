import type { Metadata } from "next";
import Link from "next/link";
import { Btn, PageHero } from "@/components/blocks";
import ContactForm from "@/components/ContactForm";
import { church, mapsUrl, socialLinks, gformUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontak & Pengurus",
  description: "Hubungi pengurus PPG POUK Wasuponda atau daftarkan diri sebagai anggota pemuda.",
};

export default function Kontak() {
  return (
    <>
      <PageHero
        badge="Kontak Pengurus"
        title="Hubungi PPG POUK Wasuponda"
        desc="Ada pertanyaan tentang ibadah pemuda, kegiatan, atau ingin bergabung? Kami siap menyambut kamu."
      />

      <section className="mx-auto max-w-[1280px] px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#EDEDED] bg-[#F2F2F2] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070] mb-3">
                Info Pengurus
              </span>
              <h2 className="text-[28px] sm:text-[34px] font-[650] text-[#141414] tracking-[-0.02em]">
                Kontak & Pendaftaran
              </h2>
              <p className="mt-3 text-[15px] text-[#707070] leading-[1.6]">
                {church.address}
              </p>
            </div>

            <div className="rounded-[20px] border border-[#EDEDED] bg-[#FAFAFA] p-6 space-y-4 text-[14px]">
              <div>
                <p className="text-[12px] font-[600] uppercase tracking-wider text-[#ADADAD]">
                  WhatsApp Pengurus
                </p>
                <p className="font-[650] text-[#141414] mt-0.5">
                  +{church.wa}
                </p>
              </div>
              <div className="pt-3 border-t border-[#EDEDED]">
                <p className="text-[12px] font-[600] uppercase tracking-wider text-[#ADADAD]">
                  Instagram Resmi
                </p>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[650] text-[#141414] mt-0.5 hover:underline"
                >
                  @ppgpouk_jem_wsp
                </a>
              </div>
              <div className="pt-3 border-t border-[#EDEDED]">
                <p className="text-[12px] font-[600] uppercase tracking-wider text-[#ADADAD]">
                  Ibadah Pemuda
                </p>
                <p className="text-[#707070] mt-0.5">
                  Kamis, 18:30 WITA · Gedung Gereja POUK Wasuponda
                </p>
              </div>
            </div>

            {/* Google Form CTA */}
            <div className="rounded-[20px] border border-[#1D4ED8]/20 bg-[#EFF6FF] p-6">
              <h3 className="text-[16px] font-[650] text-[#141414] mb-2">
                Daftar Anggota Pemuda
              </h3>
              <p className="text-[13px] text-[#707070] leading-[1.5] mb-4">
                Isi formulir pendaftaran untuk masuk ke database pemuda PPG POUK Wasuponda.
              </p>
              <a
                href={gformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[42px] items-center justify-center rounded-full bg-[#1D4ED8] px-6 text-[14px] font-[600] text-white hover:bg-[#1e40af] transition shadow-sm active:scale-[0.98]"
              >
                Isi Formulir Pendaftaran
              </a>
              <p className="mt-2 text-[11px] text-[#707070]">
                Link formulir akan segera tersedia.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Btn href={`https://wa.me/${church.wa}`} tone="solid">
                Chat WhatsApp Pengurus
              </Btn>
              <Btn href={mapsUrl} tone="ghost">
                Petunjuk Arah Google Maps ↗
              </Btn>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
