# Website PPG POUK Wasuponda

Website resmi Persekutuan Pemuda Gereja (PPG) POUK Jemaat Wasuponda, Kabupaten Luwu Timur, Sulawesi Selatan.

Wadah persekutuan, ibadah, dan pelayanan generasi muda berakar dalam Kristus, bertumbuh dalam kasih, dan berdampak bagi sesama.

---

## Fitur Utama

- **Beranda**: Hero interaktif dengan logo resmi PPGP, ayat tema, highlight jadwal ibadah, dan kegiatan mendatang.
- **Ibadah**: Jadwal lengkap ibadah rutin persekutuan pemuda (Kamis 18:30 WITA) terintegrasi dengan petunjuk arah Google Maps.
- **Kegiatan & Acara**: Agenda kegiatan pemuda, filter kategori (SEKBER Luwu Timur, Olahraga Futsal/Voli di Lapangan Karelai, Kegiatan Rutin), serta pendaftaran via WhatsApp.
- **Kepengurusan**: Struktur Badan Pengurus Harian (BPH) PPG POUK Wasuponda periode berjalan.
- **Kontak & Pendaftaran**: Informasi sekretariat, formulir online pendaftaran anggota pemuda, dan tautan resmi Instagram [@ppgpouk_jem_wsp](https://www.instagram.com/ppgpouk_jem_wsp/).

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Analytics**: [@vercel/analytics](https://vercel.com/analytics)
- **Desain**: Mobile-First, Accessible, Clean Minimalist

---

## Panduan Pengembangan Lokal

1. **Clone repository:**
   ```bash
   git clone https://github.com/Xaviour-cyber/ppgpoukwasuponda.git
   cd ppgpoukwasuponda
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser.

4. **Uji build produksi:**
   ```bash
   npm run build
   ```

---

## Manajemen Konten

Semua data utama (jadwal ibadah, agenda acara, kontak, dan tautan sosial) terpusat dan dapat diperbarui langsung melalui:
- `src/lib/data.ts`
- `src/app/kepengurusan/page.tsx`
