// Data resmi dan referensi PPG POUK Wasuponda
export const church = {
  name: "PPG POUK Wasuponda",
  fullName: "Persekutuan Pemuda Gereja POUK Wasuponda",
  tagline: "Generasi muda berakar dalam Kristus, bertumbuh dalam kasih, berdampak bagi sesama",
  address: "Wasuponda, Kabupaten Luwu Timur, Sulawesi Selatan",
  wa: "6281234567890",
  email: "ppg.poukwasuponda@gmail.com",
  mapsQuery: "POUK Wasuponda Luwu Timur",
  historyShort:
    "Persekutuan Pemuda Gereja (PPG) POUK Wasuponda adalah wadah pelayanan, persekutuan, dan pembinaan generasi muda di Gereja Persekutuan Oikumene Umat Kristen (POUK) Jemaat Wasuponda, Luwu Timur.",
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.mapsQuery)}`;

export const socialLinks = {
  instagram: "https://www.instagram.com/ppgpouk_jem_wsp/",
  youtube: "https://www.youtube.com/@GerejaPOUKJemaatWasuponda",
  wa: `https://wa.me/${church.wa}?text=${encodeURIComponent("Shalom PPG POUK Wasuponda, saya ingin bertanya seputar...")}`,
};

// Link Google Form database pemuda resmi PPG POUK Wasuponda
export const gformUrl = "https://forms.gle/LwUW5gSp3Gk1A6R58";

// 4 menu utama + Kontak sebagai tombol aksi
export const nav = [
  { href: "/", label: "Beranda" },
  { href: "/ibadah", label: "Ibadah" },
  { href: "/kegiatan", label: "Kegiatan" },
  { href: "/kepengurusan", label: "Kepengurusan" },
];

export const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

export type Service = {
  id: string;
  name: string;
  day: number;
  time: string;
  place: string;
  note: string;
  badge?: string;
  target?: string;
};

export const services: Service[] = [
  {
    id: "ibadah-pemuda",
    name: "Ibadah Persekutuan Pemuda",
    day: 4, // Kamis
    time: "18:30",
    place: "Gedung Gereja POUK Wasuponda",
    note: "Ibadah persekutuan rutin pemuda PPG POUK Wasuponda dengan pujian, penyembahan, sharing firman, dan doa bersama.",
    badge: "Ibadah Pemuda",
    target: "Pemuda PPG",
  },
];

// Perhitungan jadwal terdekat dengan zona waktu resmi WITA (Asia/Makassar, UTC+8)
export function nextService(now = new Date()): Service {
  const makassarStr = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Makassar",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(now);

  const t = new Date(makassarStr);
  const currentDay = t.getDay();
  const currentMins = t.getHours() * 60 + t.getMinutes();

  const wait = (s: Service) => {
    const [h, m] = s.time.split(":").map(Number);
    let diffDays = (s.day - currentDay + 7) % 7;
    const targetMins = h * 60 + m;

    if (diffDays === 0 && targetMins <= currentMins) {
      diffDays = 7;
    }
    return diffDays * 1440 + (targetMins - currentMins);
  };

  return [...services].sort((a, b) => wait(a) - wait(b))[0] || services[0];
}

export type Event = {
  id: string;
  day: string;
  month: string;
  year?: string;
  dateFull: string;
  title: string;
  summary: string;
  time: string;
  place: string;
  tag: string;
  category: "pemuda" | "olahraga" | "sekber" | "rutin";
  image: string;
  status: "Buka Pendaftaran" | "Segera Hadir" | "Terbuka untuk Umum" | "Kegiatan Rutin";
};

export const events: Event[] = [
  {
    id: "evt-1",
    day: "Des",
    month: "2026",
    year: "2026",
    dateFull: "Desember 2026 (Tanggal menyusul)",
    title: "Natal Pemuda SEKBER Luwu Timur",
    summary: "Perayaan Natal bersama pemuda Sekretariat Bersama (SEKBER) se-Kabupaten Luwu Timur. Acara lintas gereja untuk mempererat persaudaraan pemuda Kristiani.",
    time: "Akan diumumkan",
    place: "Luwu Timur (Lokasi menyusul)",
    tag: "SEKBER Luwu Timur",
    category: "sekber",
    image: "/events/natal-jemaat.jpg",
    status: "Segera Hadir",
  },
  {
    id: "evt-2",
    day: "Rutin",
    month: "",
    year: "2026",
    dateFull: "Setiap Minggu",
    title: "Olahraga Bersama — Futsal & Voli",
    summary: "Kegiatan rutin olahraga pemuda PPG POUK Wasuponda untuk menjaga kesehatan jasmani dan mempererat kebersamaan.",
    time: "15:00 WITA",
    place: "Lapangan Karelai, Wasuponda",
    tag: "Olahraga",
    category: "olahraga",
    image: "/events/retret-pemuda.jpg",
    status: "Kegiatan Rutin",
  },
];

export const pastoralWelcome = {
  quote:
    "Pemuda bukan sekadar masa depan gereja, tetapi kekuatan masa kini. Di PPG POUK Wasuponda, kita saling menguatkan, bertumbuh bersama dalam iman, dan berdampak nyata bagi sesama di Wasuponda dan di mana pun kita berada.",
  author: "Pengurus PPG POUK Wasuponda",
  role: "Persekutuan Pemuda Gereja POUK Jemaat Wasuponda",
};

export const faq = [
  {
    q: "Siapa saja yang bisa bergabung di PPG POUK Wasuponda?",
    a: "Seluruh pemuda dan pemudi jemaat POUK Wasuponda, maupun teman-teman yang ingin mengenal Kristus dan bersekutu bersama.",
  },
  {
    q: "Kapan ibadah pemuda dilaksanakan?",
    a: "Ibadah persekutuan pemuda diadakan setiap hari Kamis pukul 18:30 WITA di Gedung Gereja POUK Wasuponda.",
  },
  {
    q: "Apakah ada kegiatan selain ibadah?",
    a: "Tentu! Ada olahraga rutin (futsal & voli) setiap Minggu pukul 15:00 di Lapangan Karelai, serta kegiatan pemuda lainnya seperti retret, bakti sosial, dan acara SEKBER.",
  },
  {
    q: "Bagaimana cara mendaftar sebagai anggota PPG?",
    a: "Kamu bisa mengisi formulir pendaftaran online di halaman Kontak atau langsung datang ke ibadah pemuda. Kami akan sangat senang menyambut kamu!",
  },
];

export type Bulletin = {
  id: string;
  date: string;
  title: string;
  href: string;
  theme: string;
  liturgy: string;
  size: string;
  month: string;
  readings: string;
  preacher: string;
};

export const bulletins: Bulletin[] = [
  {
    id: "w-ppg-1",
    date: "November 2026",
    title: "Warta & Buletin Pemuda PPG",
    href: "/warta/warta-jemaat-pouk.pdf",
    theme: "Generasi Berakar dan Bertumbuh",
    liturgy: "Ibadah Pemuda",
    size: "1.2 MB",
    month: "November 2026",
    readings: "1 Timotius 4:12",
    preacher: "Pengurus PPG POUK",
  },
];

export type Devotional = {
  id: string;
  title: string;
  verse: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  readTime: string;
  fullText: string[];
  prayer: string;
};

export const devotionals: Devotional[] = [
  {
    id: "dev-pemuda-1",
    title: "Jangan Seorang Pun Menganggap Engkau Rendah karena Engkau Muda",
    verse: "1 Timotius 4:12",
    category: "Generasi Muda",
    author: "Tim Kerohanian PPG",
    date: "14 November 2026",
    readTime: "3 mnt baca",
    excerpt:
      "Masa muda adalah masa emas untuk menjadi teladan dalam perkataan, tingkah laku, kasih, kesetiaan, dan kesucian.",
    fullText: [
      "Seringkali anak muda merasa belum siap atau belum layak untuk mengambil peran penting dalam pelayanan maupun kehidupan bermasyarakat. Namun firman Tuhan melalui nasihat Rasul Paulus kepada Timotius mengingatkan kita bahwa usia muda bukanlah halangan untuk menjadi teladan.",
      "Sebagai pemuda Kristen di Wasuponda, panggilan kita adalah membawa dampak positif di mana pun kita berada—di tempat kerja, lingkungan kampus/sekolah, keluarga, maupun di persekutuan gereja.",
      "Mari kita rawat integritas, kasih, dan kesetiaan kita setiap hari, bersandar penuh pada Roh Kudus yang memampukan kita.",
    ],
    prayer:
      "Tuhan Yesus, terima kasih atas masa muda yang Kau anugerahkan. Bimbinglah perkataan dan perbuatanku agar senantiasa memuliakan nama-Mu dan menjadi berkat bagi sesama. Amin.",
  },
];
