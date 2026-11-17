"use client";

import Link from "next/link";
import Image from "next/image";
import { church, mapsUrl, socialLinks } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#EDEDED] bg-[#FFFFFF] pt-16 pb-12 text-[#141414]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#EDEDED]">
          {/* Brand & Mission column */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-85">
              <Image
                src="/logo-navbar.png"
                alt="Logo PPG POUK Wasuponda"
                width={170}
                height={42}
                className="h-[38px] w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-[14px] leading-[1.6] text-[#707070]">
              {church.tagline}. Wadah persekutuan pemuda yang menyambut setiap jiwa muda dengan
              kasih dan semangat kebersamaan.
            </p>
            <p className="mt-4 text-[13px] text-[#ADADAD]">
              {church.address}
            </p>
          </div>

          {/* 3 Columns: Ibadah, Kegiatan, Organisasi */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Ibadah */}
            <div>
              <p className="text-[12px] font-[600] uppercase tracking-wider text-[#ADADAD] mb-4">
                Ibadah
              </p>
              <ul className="space-y-2.5 text-[14px]">
                <li>
                  <Link
                    href="/ibadah"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Jadwal Ibadah Pemuda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontak"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Hubungi Pengurus
                  </Link>
                </li>
                <li>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Petunjuk Arah Maps ↗
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Kegiatan */}
            <div>
              <p className="text-[12px] font-[600] uppercase tracking-wider text-[#ADADAD] mb-4">
                Kegiatan
              </p>
              <ul className="space-y-2.5 text-[14px]">
                <li>
                  <Link
                    href="/kegiatan"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Agenda Pemuda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kegiatan"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Olahraga Bersama
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kegiatan"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    SEKBER Luwu Timur
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Organisasi */}
            <div>
              <p className="text-[12px] font-[600] uppercase tracking-wider text-[#ADADAD] mb-4">
                Organisasi
              </p>
              <ul className="space-y-2.5 text-[14px]">
                <li>
                  <Link
                    href="/kepengurusan"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Struktur Kepengurusan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontak"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Daftar Anggota Pemuda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontak"
                    className="text-[#707070] transition-colors hover:text-[#141414]"
                  >
                    Hubungi Sekretariat
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#707070]">
          <div>
            © {currentYear} {church.fullName}. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-7">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#707070] hover:text-[#141414] transition font-[500]"
              aria-label="Instagram PPG POUK Wasuponda"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>@ppgpouk_jem_wsp</span>
            </a>
            <a
              href={socialLinks.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#707070] hover:text-[#141414] transition font-[500]"
              aria-label="WhatsApp Pengurus PPG"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Pengurus</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
