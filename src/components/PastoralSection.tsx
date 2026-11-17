"use client";

import Image from "next/image";
import Link from "next/link";
import { church, mapsUrl, pastoralWelcome, socialLinks, gformUrl } from "@/lib/data";

export default function PastoralSection() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-[#EDEDED]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: About PPG & Welcome */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center rounded-full bg-[#F2F2F2] px-3.5 py-1 text-[12px] font-[600] uppercase tracking-wider text-[#707070]">
              Tentang PPG
            </span>

            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-[650] tracking-[-0.03em] text-[#141414] leading-[1.18]">
              Persekutuan yang Terbuka bagi Setiap Pemuda
            </h2>

            <div className="border-l-2 border-[#141414] pl-5 sm:pl-6 py-1">
              <p className="text-[16px] sm:text-[17px] leading-[1.75] text-[#141414] font-[450]">
                &ldquo;{pastoralWelcome.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3.5 pt-1">
              <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/icon.png"
                  alt="Logo PPG POUK Wasuponda"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-[15px] font-[650] text-[#141414]">
                  {pastoralWelcome.author}
                </p>
                <p className="text-[13px] text-[#707070]">
                  {pastoralWelcome.role}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#141414] px-5 text-[14px] font-[600] text-white hover:bg-[#2c2c2c] transition shadow-sm"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Follow Instagram PPG
              </a>
              <Link
                href="/kontak"
                className="inline-flex h-[42px] items-center gap-1.5 rounded-full border border-[#141414] px-5 text-[14px] font-[600] text-[#141414] hover:bg-[#F2F2F2] transition"
              >
                Hubungi Pengurus
              </Link>
            </div>
          </div>

          {/* Right Column: Map & Location */}
          <div className="lg:col-span-6 rounded-[24px] border border-[#EDEDED] bg-[#FAFAFA] p-5 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-[17px] font-[650] text-[#141414]">
                  Lokasi Gereja POUK Wasuponda
                </h3>
                <p className="text-[13px] text-[#707070] mt-0.5">
                  {church.address}
                </p>
              </div>
              <span className="rounded-full bg-white border border-[#EDEDED] px-3 py-1 text-[11px] font-[600] text-[#141414]">
                Wasuponda, Luwu Timur
              </span>
            </div>

            <div className="overflow-hidden rounded-[18px] border border-[#EDEDED] shadow-sm">
              <iframe
                title="Peta Lokasi Gereja POUK Wasuponda"
                width="100%"
                height="320"
                loading="lazy"
                className="h-[320px] w-full"
                src={`https://www.google.com/maps?q=${encodeURIComponent(church.mapsQuery)}&output=embed`}
              />
            </div>

            <p className="mt-4 text-center text-[12px] text-[#707070]">
              Ibadah pemuda setiap Kamis 18:30 WITA. Olahraga bersama di Lapangan Karelai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
