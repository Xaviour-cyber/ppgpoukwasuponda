import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import PastEventsSection from "@/components/PastEventsSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import PastoralSection from "@/components/PastoralSection";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      {/* 1. Hero dengan Foto Asli Gedung Gereja & Judul Utama Bersih */}
      <HeroSection />

      {/* 2. Jadwal Ibadah Rutin Mingguan */}
      <ScheduleSection />

      {/* 3. Berita & Dokumentasi Kegiatan yang Telah Berlangsung */}
      <PastEventsSection />

      {/* 4. Berita dan Agenda Kegiatan Mendatang */}
      <NewsEventsSection />

      {/* 5. Sambutan Gembala & Lokasi Peta Gereja POUK Wasuponda */}
      <PastoralSection />
    </>
  );
}
