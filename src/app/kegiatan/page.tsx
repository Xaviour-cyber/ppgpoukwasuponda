import type { Metadata } from "next";
import { PageHero } from "@/components/blocks";
import KegiatanView from "@/components/KegiatanView";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kegiatan Pemuda",
  description: "Agenda kegiatan, olahraga bersama, dan acara pemuda PPG POUK Wasuponda.",
};

export default function Kegiatan() {
  return (
    <>
      <PageHero
        badge="Agenda Pemuda"
        title="Kegiatan & Acara PPG"
        desc="Jadwal kegiatan pemuda PPG POUK Wasuponda: olahraga bersama, acara SEKBER, retret, dan kegiatan lainnya."
      />
      <KegiatanView events={events} />
    </>
  );
}
