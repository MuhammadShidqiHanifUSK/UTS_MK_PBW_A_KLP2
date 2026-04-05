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

let bookmarks = JSON.parse(localStorage.getItem("novelku_bookmarks") || "[]");
let likedNovels = JSON.parse(localStorage.getItem("novelku_likes") || "[]");
let currentNovel = null;
let currentChapter = null;
let currentCategory = "Semua";
let readerFontSize = 18;
let readerSettingsOpen = false;
const commentsData = {
  "0-1": [
    {
      name: "Rizky",
      avatar: "R",
      text: "Wah, awal yang keren banget! Penasaran sama kelanjutannya 🔥",
      time: "2 jam lalu",
      likes: 12,
    },
    {
      name: "Sari",
      avatar: "S",
      text: "Arya karakter yang menarik. Master Zephyr pasti punya rahasia ya?",
      time: "1 jam lalu",
      likes: 8,
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(
    () => document.getElementById("loadingOverlay").classList.add("hidden"),
    800,
  );

  renderPopularScroll();
  renderNovelGrid("Semua");
  renderCategoryTabs();
  renderPopularFull();
  renderGenrePage();
  updateBookmarkCount();

  window.addEventListener("scroll", () => {
    document
      .getElementById("navbar")
      .classList.toggle("scrolled", window.scrollY > 10);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.getElementById("searchOverlay").classList.remove("active");
      document.getElementById("bookmarkPanel").classList.remove("active");
      document.getElementById("overlayBg").classList.remove("active");
      document.getElementById("readerSettingsPanel").classList.remove("active");
      document.getElementById("sidebarMenu").classList.remove("active");
      document.getElementById("sidebarOverlay").classList.remove("active");
      document.getElementById("menuToggle").classList.remove("active");
      document.body.style.overflow = "";
      readerSettingsOpen = false;
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      toggleSearch();
    }
  });
});

function showPage(page) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById(`page-${page}`).classList.add("active");
  document
    .querySelectorAll(".nav-links a")
    .forEach((a) => a.classList.remove("active"));
  const navLink = document.getElementById(`nav-${page}`);
  if (navLink) navLink.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCategoryTabs() {
  const genres = ["Semua", "Fantasi", "Action", "Romance", "Mystery", "Sci-Fi"];
  document.getElementById("categoryTabs").innerHTML = genres
    .map(
      (g) =>
        `<button class="category-tab ${g === "Semua" ? "active" : ""}" onclick="filterCategory('${g}', this)">${g}</button>`,
    )
    .join("");
}

function filterCategory(category, btn) {
  currentCategory = category;
  document
    .querySelectorAll(".category-tab")
    .forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
  renderNovelGrid(category);
}

function renderNovelGrid(category) {
  const filtered =
    category === "Semua"
      ? novelsData
      : novelsData.filter((n) => n.genre === category);
  document.getElementById("novelGrid").innerHTML = filtered
    .map(
      (novel, i) => `
        <div class="novel-card fade-in stagger-${(i % 5) + 1}" onclick="showDetail(${novel.id})">
            <div class="novel-cover">
                <div class="novel-cover-img" style="background: ${novel.gradient}">${novel.emoji}</div>
                ${novel.badge ? `<span class="novel-badge badge-${novel.badge}">${novel.badge === "hot" ? "🔥 HOT" : novel.badge === "new" ? "✨ NEW" : "✅ TAMAT"}</span>` : ""}
                <button class="novel-fav ${likedNovels.includes(novel.id) ? "liked" : ""}" onclick="event.stopPropagation(); toggleLike(${novel.id}, this)">
                    ${likedNovels.includes(novel.id) ? "❤️" : "🤍"}
                </button>
                <div class="novel-cover-overlay">
                    <button class="read-btn-overlay">Baca Sekarang</button>
                </div>
            </div>
            <div class="novel-info">
                <div class="novel-genre">${novel.genre}</div>
                <div class="novel-title">${novel.title}</div>
                <div class="novel-meta">
                    <span class="novel-meta-item novel-rating">⭐ ${novel.rating}</span>
                    <span class="novel-meta-item">👁 ${novel.readers}</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

function renderPopularScroll() {
  const sorted = [...novelsData].sort(
    (a, b) => parseFloat(b.readers) - parseFloat(a.readers),
  );
  document.getElementById("popularScroll").innerHTML = sorted
    .slice(0, 5)
    .map(
      (novel, i) => `
        <div class="popular-card" onclick="showDetail(${novel.id})">
            <div class="popular-rank">#${i + 1}</div>
            <div class="popular-cover" style="background: ${novel.gradient}">${novel.emoji}</div>
            <div class="popular-info">
                <h4>${novel.title}</h4>
                <p>${novel.synopsis}</p>
                <div class="popular-stats">
                    <span>⭐ ${novel.rating}</span>
                    <span>👁 ${novel.readers}</span>
                    <span>📝 ${novel.chapters} Ch</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

function renderPopularFull() {
  const sorted = [...novelsData].sort(
    (a, b) => parseFloat(b.readers) - parseFloat(a.readers),
  );
  document.getElementById("popularFullList").innerHTML = sorted
    .map(
      (novel, i) => `
        <div class="popular-card" onclick="showDetail(${novel.id})" style="margin-bottom: 12px;">
            <div class="popular-rank">#${i + 1}</div>
            <div class="popular-cover" style="background: ${novel.gradient}">${novel.emoji}</div>
            <div class="popular-info">
                <h4>${novel.title}</h4>
                <p>${novel.synopsis}</p>
                <div class="popular-stats">
                    <span>⭐ ${novel.rating}</span>
                    <span>👁 ${novel.readers}</span>
                    <span>📝 ${novel.chapters} Ch</span>
                    <span>🏷 ${novel.genre}</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

function renderGenrePage() {
  const genres = ["Fantasi", "Action", "Romance", "Mystery", "Sci-Fi"];
  document.getElementById("genreTabs").innerHTML = genres
    .map(
      (g) =>
        `<button class="category-tab ${g === "Fantasi" ? "active" : ""}" onclick="filterGenre('${g}', this)">${g}</button>`,
    )
    .join("");
  renderGenreGrid("Fantasi");
}

function filterGenre(genre, btn) {
  document
    .querySelectorAll("#genreTabs .category-tab")
    .forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
  renderGenreGrid(genre);
}

function renderGenreGrid(genre) {
  const filtered = novelsData.filter((n) => n.genre === genre);
  document.getElementById("genreGrid").innerHTML = filtered
    .map(
      (novel, i) => `
        <div class="novel-card fade-in stagger-${(i % 5) + 1}" onclick="showDetail(${novel.id})">
            <div class="novel-cover">
                <div class="novel-cover-img" style="background: ${novel.gradient}">${novel.emoji}</div>
                ${novel.badge ? `<span class="novel-badge badge-${novel.badge}">${novel.badge === "hot" ? "🔥 HOT" : novel.badge === "new" ? "✨ NEW" : "✅ TAMAT"}</span>` : ""}
                <button class="novel-fav ${likedNovels.includes(novel.id) ? "liked" : ""}" onclick="event.stopPropagation(); toggleLike(${novel.id}, this)">
                    ${likedNovels.includes(novel.id) ? "❤️" : "🤍"}
                </button>
                <div class="novel-cover-overlay">
                    <button class="read-btn-overlay">Baca Sekarang</button>
                </div>
            </div>
            <div class="novel-info">
                <div class="novel-genre">${novel.genre}</div>
                <div class="novel-title">${novel.title}</div>
                <div class="novel-meta">
                    <span class="novel-meta-item novel-rating">⭐ ${novel.rating}</span>
                    <span class="novel-meta-item">👁 ${novel.readers}</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

// Navigasi Cerdas untuk Tombol Kembali
function goBack() {
  const currentPage = document
    .querySelector(".page.active")
    ?.id?.replace("page-", "");

  if (currentPage === "reader") {
    showPage("detail");
  } else if (currentPage === "detail") {
    showPage("home");
  } else {
    showPage("home");
  }
}

function toggleSidebarMenu() {
  const menu = document.getElementById("sidebarMenu");
  const overlay = document.getElementById("sidebarOverlay");
  const btn = document.getElementById("menuToggle");
  const isActive = menu.classList.contains("active");

  menu.classList.toggle("active", !isActive);
  overlay.classList.toggle("active", !isActive);
  btn.classList.toggle("active", !isActive);

  // Stop scroll body saat sidebar terbuka
  document.body.style.overflow = isActive ? "" : "hidden";
}

function showDetail(novelId) {
  currentNovel = novelsData.find((n) => n.id === novelId);
  if (!currentNovel) return;

  document.getElementById("detailHero").innerHTML = `
        <div class="detail-cover" style="background: ${currentNovel.gradient}">${currentNovel.emoji}</div>
        <div class="detail-info">
            <span class="detail-genre">${currentNovel.genre}</span>
            <h1 class="detail-title">${currentNovel.title}</h1>
            <p class="detail-author">oleh <strong>${currentNovel.author}</strong></p>
            <div class="detail-stats">
                <div class="detail-stat"><div class="detail-stat-value">⭐ ${currentNovel.rating}</div><div class="detail-stat-label">Rating</div></div>
                <div class="detail-stat"><div class="detail-stat-value">👁 ${currentNovel.readers}</div><div class="detail-stat-label">Pembaca</div></div>
                <div class="detail-stat"><div class="detail-stat-value">📝 ${currentNovel.chapters}</div><div class="detail-stat-label">Chapter</div></div>
                <div class="detail-stat"><div class="detail-stat-value">${currentNovel.status === "Completed" ? "✅" : "📖"} ${currentNovel.status}</div><div class="detail-stat-label">Status</div></div>
            </div>
            <div class="detail-actions">
                <button class="btn-primary" onclick="startReading(${currentNovel.id}, 1)">📖 Baca Sekarang</button>
                <button class="btn-secondary" onclick="toggleBookmark(${currentNovel.id})">
                    ${bookmarks.includes(currentNovel.id) ? "🔖 Tersimpan" : "🔖 Bookmark"}
                </button>
                <button class="btn-secondary" onclick="toggleLikeDetail(${currentNovel.id}, this)">
                    ${likedNovels.includes(currentNovel.id) ? "❤️ Disukai" : "🤍 Suka"}
                </button>
            </div>
            <div class="detail-synopsis">
                <h3>Sinopsis</h3>
                <p id="synopsisText">${currentNovel.synopsis}</p>
                <button class="read-more-btn" onclick="toggleSynopsis(this)">Baca selengkapnya</button>
            </div>
        </div>
    `;

  renderChapterList("asc");
  showPage("detail");
}

function renderChapterList(order) {
  const sorted = [...currentNovel.chapterList].sort((a, b) =>
    order === "asc" ? a.id - b.id : b.id - a.id,
  );
  document.getElementById("chapterSection").innerHTML = `
        <div class="chapter-header">
            <h3>📋 Daftar Chapter <span class="chapter-count">${sorted.length}</span></h3>
            <div class="chapter-sort">
                <button class="${order === "asc" ? "active" : ""}" onclick="renderChapterList('asc'); this.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active')); this.classList.add('active');">Terlama</button>
                <button class="${order === "desc" ? "active" : ""}" onclick="renderChapterList('desc'); this.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active')); this.classList.add('active');">Terbaru</button>
            </div>
        </div>
        <div class="chapter-list" id="chapterList">
            ${sorted
              .map(
                (ch) => `
                <div class="chapter-item ${ch.read ? "read" : ""}" onclick="startReading(${currentNovel.id}, ${ch.id})">
                    <div class="chapter-item-left">
                        <div class="chapter-number">${ch.id}</div>
                        <div class="chapter-item-info">
                            <h4>${ch.title}</h4>
                            <p>${ch.date} ${ch.read ? "• ✅ Dibaca" : ""}</p>
                        </div>
                    </div>
                    <div class="chapter-item-right">
                        <button class="chapter-bookmark" onclick="event.stopPropagation(); toggleChapterBookmark(this)">🔖</button>
                        →
                    </div>
                </div>
            `,
              )
              .join("")}
        </div>
    `;
}

function toggleSynopsis(btn) {
  const text = document.getElementById("synopsisText");
  if (text.textContent === currentNovel.synopsis) {
    text.textContent = currentNovel.synopsisFull;
    btn.textContent = "Sembunyikan";
  } else {
    text.textContent = currentNovel.synopsis;
    btn.textContent = "Baca selengkapnya";
  }
}
function startReading(novelId, chapterId) {
  currentNovel = novelsData.find((n) => n.id === novelId);
  currentChapter = chapterId;
  const content = generateChapterContent(novelId, chapterId);

  document.getElementById("readerContainer").innerHTML = `
        <div class="reader-nav">
            <button class="reader-back" onclick="showDetail(${novelId})">← Kembali</button>
            <span class="reader-chapter-title">${content.title}</span>
            <div class="reader-settings">
                <button onclick="toggleReaderSettings()" title="Pengaturan">⚙️</button>
            </div>
        </div>
        <div class="reader-progress"><div class="reader-progress-bar" id="readerProgressBar"></div></div>
        <div class="reader-content" id="readerContent">
            <h2>${content.title}</h2>
            <div class="chapter-date">📅 ${content.date}</div>
            <div class="reader-text" id="readerText">${content.text.map((p) => `<p>${p}</p>`).join("")}</div>
        </div>
        <div class="reader-nav-bottom">
            <button class="reader-nav-btn" onclick="prevChapter(${novelId})" ${chapterId <= 1 ? "disabled" : ""}>
                <span>← Sebelumnya</span><strong>Chapter ${chapterId > 1 ? chapterId - 1 : "-"}</strong>
            </button>
            <button class="reader-nav-btn" onclick="nextChapter(${novelId})" ${chapterId >= currentNovel.chapterList.length ? "disabled" : ""}>
                <span>Selanjutnya →</span><strong>Chapter ${chapterId < currentNovel.chapterList.length ? chapterId + 1 : "-"}</strong>
            </button>
        </div>
    `;
  renderComments(novelId, chapterId);
  showPage("reader");
  window.scrollTo({ top: 0 });

  setTimeout(() => {
    const contentEl = document.getElementById("readerContent");
    const update = () => {
      if (!contentEl) return;
      const rect = contentEl.getBoundingClientRect();
      const progress = Math.min(
        100,
        Math.max(0, ((window.innerHeight - rect.top) / rect.height) * 100),
      );
      document.getElementById("readerProgressBar").style.width = progress + "%";
    };
    window.addEventListener("scroll", update);
    update();
  }, 100);
}

function prevChapter(novelId) {
  if (currentChapter > 1) startReading(novelId, currentChapter - 1);
}
function nextChapter(novelId) {
  if (currentChapter < currentNovel.chapterList.length)
    startReading(novelId, currentChapter + 1);
}


