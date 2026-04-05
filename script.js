const novelsData = [
  {
    id: 0,
    title: "Kerajaan Bayangan",
    author: "Rina Wulandari",
    genre: "Fantasi",
    badge: "hot",
    emoji: "🏰",
    gradient: "linear-gradient(135deg, #6c5ce7, #a29bfe)",
    rating: 4.9,
    readers: "45.2K",
    chapters: 120,
    status: "Ongoing",
    synopsis:
      "Di sebuah kerajaan yang tersembunyi di balik kabut abadi, seorang gadis biasa bernama Arya menemukan bahwa ia memiliki kekuatan untuk mengendalikan bayangan.",
    synopsisFull:
      "Di sebuah kerajaan yang tersembunyi di balik kabut abadi, seorang gadis biasa bernama Arya menemukan bahwa ia memiliki kekuatan untuk mengendalikan bayangan. Ketika kerajaan itu terancam oleh kegelapan yang bangkit dari kedalaman, Arya harus belajar menguasai kekuatannya sebelum semuanya terlambat. Bersama dengan sekutu yang tidak terduga, ia memulai perjalanan epik yang akan mengubah takdir seluruh kerajaan.",
    chapterList: [
      { id: 1, title: "Awal Mula", date: "1 Jan 2026", read: true },
      { id: 2, title: "Kekuatan Tersembunyi", date: "3 Jan 2026", read: false },
      {
        id: 3,
        title: "Pertemuan dengan Kael",
        date: "5 Jan 2026",
        read: false,
      },
      { id: 4, title: "Akademi Sihir", date: "7 Jan 2026", read: false },
      { id: 5, title: "Rahasia Kerajaan", date: "9 Jan 2026", read: false },
    ],
  },
  {
    id: 2,
    title: "Bunga Sakura di Musim Semi",
    author: "Sakura Tanaka",
    genre: "Romance",
    badge: "new",
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #fd79a8, #e84393)",
    rating: 4.7,
    readers: "32.1K",
    chapters: 60,
    status: "Completed",
    synopsis:
      "Hana dan Ren bertemu di bawah pohon sakura di musim semi. Sebuah kisah cinta yang manis dan mengharukan tentang dua jiwa yang menemukan satu sama lain.",
    synopsisFull:
      "Hana dan Ren bertemu di bawah pohon sakura di musim semi. Sebuah kisah cinta yang manis dan mengharukan tentang dua jiwa yang menemukan satu sama lain di waktu yang tepat. Hana adalah seorang seniman yang kehilangan inspirasinya, sementara Ren adalah musisi yang bermimpi menjadi komposer terkenal.",
    chapterList: [
      {
        id: 1,
        title: "Pertemuan di Bawah Sakura",
        date: "5 Jan 2026",
        read: true,
      },
      { id: 2, title: "Lukisan Pertama", date: "7 Jan 2026", read: false },
      { id: 3, title: "Melodi Hati", date: "9 Jan 2026", read: false },
      { id: 4, title: "Janji di Malam Hari", date: "11 Jan 2026", read: false },
      { id: 5, title: "Ujian Cinta", date: "13 Jan 2026", read: false },
    ],
  },
  {
    id: 3,
    title: "Detektif Malam",
    author: "Andi Prasetyo",
    genre: "Mystery",
    badge: "new",
    emoji: "🔍",
    gradient: "linear-gradient(135deg, #2d3436, #636e72)",
    rating: 4.6,
    readers: "28.5K",
    chapters: 75,
    status: "Ongoing",
    synopsis:
      "Raka adalah seorang detektif swasta yang hanya bekerja di malam hari. Setiap kasus membawanya ke dalam konspirasi besar.",
    synopsisFull:
      "Raka adalah seorang detektif swasta yang hanya bekerja di malam hari. Setiap kasus yang ia tangani semakin membawanya ke dalam konspirasi besar yang melibatkan orang-orang paling berpengaruh di kota. Dengan kemampuan observasinya yang luar biasa, Raka memecahkan kasus demi kasus.",
    chapterList: [
      { id: 1, title: "Klien Misterius", date: "3 Jan 2026", read: false },
      { id: 2, title: "Jejak yang Hilang", date: "5 Jan 2026", read: false },
      { id: 3, title: "Bukti Tersembunyi", date: "7 Jan 2026", read: false },
      { id: 4, title: "Waktu Tengah Malam", date: "9 Jan 2026", read: false },
      {
        id: 5,
        title: "Konspirasi Terungkap",
        date: "11 Jan 2026",
        read: false,
      },
    ],
  },
  {
    id: 4,
    title: "Dunia Paralel",
    author: "Maya Putri",
    genre: "Sci-Fi",
    badge: "hot",
    emoji: "🌌",
    gradient: "linear-gradient(135deg, #0984e3, #74b9ff)",
    rating: 4.8,
    readers: "41.3K",
    chapters: 88,
    status: "Ongoing",
    synopsis:
      "Dr. Sari secara tidak sengaja membuka portal ke dunia paralel dan menemukan versi lain dari dirinya.",
    synopsisFull:
      "Dr. Sari secara tidak sengaja membuka portal ke dunia paralel. Di sana, ia menemukan versi lain dari dirinya yang hidup dalam realitas yang sama sekali berbeda. Di dunia itu, teknologi telah berkembang jauh melampaui dunia asalnya.",
    chapterList: [
      { id: 1, title: "Eksperimen Gagal", date: "1 Jan 2026", read: false },
      { id: 2, title: "Portal Terbuka", date: "3 Jan 2026", read: false },
      { id: 3, title: "Dunia Lain", date: "5 Jan 2026", read: false },
      { id: 4, title: "Sari yang Lain", date: "7 Jan 2026", read: false },
      { id: 5, title: "Pilihan Sulit", date: "9 Jan 2026", read: false },
    ],
  },
];
// Chapter Content Generator
function generateChapterContent(novelId, chapterId) {
  const novel = novelsData[novelId];
  const chData = novel.chapterList[chapterId - 1];
  const title = chData ? chData.title : `Chapter ${chapterId}`;
  const date = chData ? chData.date : "Januari 2026";

  return {
    title: `Chapter ${chapterId}: ${title}`,
    date: date,
    text: [
      `${novel.title} berlanjut dengan petualangan yang semakin seru di chapter ini. Setiap halaman membawa pembaca lebih dalam ke dalam dunia yang penuh misteri.`,
      '"Kita harus terus maju," kata sang protagonis kepada rekan-rekannya. "Tidak peduli seberapa gelap jalannya, kita tidak bisa berhenti di sini."',
      "Rekan-rekannya mengangguk, meskipun ketakutan terlihat di mata mereka. Mereka tahu bahwa apa yang menanti di depan jauh lebih berbahaya dari yang mereka bayangkan. Tapi mereka juga tahu bahwa bersama-sama, mereka bisa menghadapi apapun.",
      "Dengan tekad yang membara, mereka melangkah maju menuju ketidakpastian, siap menghadapi apapun yang menanti di balik kabut yang menyelimuti perjalanan mereka. Angin berhembus kencang, membawa aroma petualangan baru yang tak terduga.",
      'Dan di balik bayangan pepohonan, sosok misterius itu mengamati langkah mereka. Senyum tipis mengembang di bibirnya. "Akhirnya, mereka datang," bisiknya pelan, sebelum menghilang ke dalam kegelapan.',
    ],
  };
}
