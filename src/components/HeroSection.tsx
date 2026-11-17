"use client";

import Link from "next/link";
import Image from "next/image";
import { gformUrl } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative min-h-[540px] sm:min-h-[600px] md:min-h-[660px] flex items-center justify-center overflow-hidden bg-[#0A0D14] text-white">
      {/* Background Photograph with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gedung-gereja.jpg"
          alt="Pemuda PPG POUK Wasuponda"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/60 to-[#0A0D14]/10" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0A0D14]/20 to-[#0A0D14]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 pt-32 pb-20 sm:pt-36 sm:pb-24 md:pt-44 md:pb-32 text-center">
        {/* Badge */}
        <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-[12px] font-[600] uppercase tracking-wider text-white/90 mb-6">
          PPG POUK Wasuponda
        </span>

        {/* Main Headline */}
        <h1 className="mx-auto max-w-4xl text-[34px] sm:text-[48px] md:text-[60px] lg:text-[68px] font-[650] leading-[1.12] tracking-[-0.03em] text-white">
          Generasi Muda Berakar dalam Kristus
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mt-5 max-w-2xl text-[16px] sm:text-[18px] text-white/70 leading-[1.6]">
          Bertumbuh dalam kasih, berdampak bagi sesama. Ibadah Pemuda setiap Kamis pukul 18:30 WITA.
        </p>

        {/* Dual Primary Actions */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/ibadah"
            className="inline-flex h-[46px] sm:h-[48px] items-center justify-center rounded-full bg-white px-7 text-[14px] sm:text-[15px] font-[600] text-[#141414] transition-all hover:bg-[#F3F4F6] active:scale-[0.98] shadow-lg"
          >
            Jadwal Ibadah Pemuda
          </Link>
          <Link
            href="/kegiatan"
            className="inline-flex h-[46px] sm:h-[48px] items-center justify-center rounded-full border border-white/50 bg-white/10 backdrop-blur-md px-6 text-[14px] sm:text-[15px] font-[500] text-white transition-all hover:bg-white/20 active:scale-[0.98]"
          >
            Lihat Kegiatan
          </Link>
        </div>
      </div>
    </section>
  );
}
