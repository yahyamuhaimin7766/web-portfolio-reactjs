import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// FiSun dan FiMoon sudah dihapus dari sini
import { FiCode, FiShoppingBag, FiArrowRight, FiFileText, FiBook, FiLayout, FiTerminal } from "react-icons/fi";
import { FaGithub, FaTiktok, FaWhatsapp, FaEnvelope, FaInstagram, FaYoutube } from "react-icons/fa";

// ==========================================================
// DATA PRODUK
// ==========================================================
const digitalProducts = [
  {
    id: "excel",
    category: "TEMPLATE EXCEL",
    icon: <FiFileText className="text-green-600 dark:text-green-400" size={24} />,
    items: [
      {
        name: "Kwitansi Excel Otomatis (Siap Pakai)",
        desc: "Template kwitansi otomatis berbasis Excel yang memudahkan pembuatan kwitansi secara cepat, rapi, dan profesional. Cukup input data, kwitansi langsung terisi dan siap dicetak atau disimpan sebagai PDF.",
        price: "Rp 14.700",
        oldPrice: "Rp 49.800",
        img: "./digital-store/kwitansi.png",
        link: "https://lynk.id/tipsntech/d1gro1nwo6v4",
      },
      {
        name: "Nota Stok Barang Excel Otomatis (Siap Pakai)",
        desc: "Nota Stok Barang Excel Otomatis untuk membantu pencatatan barang masuk dan keluar secara lebih cepat, rapi, dan akurat.",
        price: "Rp 14.900",
        oldPrice: "Rp 49.800",
        img: "./digital-store/nota.png",
        link: "https://lynk.id/tipsntech/lve9wwvew5oo",
      },
      {
        name: "Template Slip Gaji Excel Otomatis & Google Sheets (Siap Pakai)",
        desc: "Butuh cara cepat dan profesional untuk membuat slip gaji karyawan? Template ini adalah solusi praktis untuk kamu yang ingin proses payroll lebih efisien tanpa ribet.",
        price: "Rp 14.900",
        oldPrice: "Rp 49.800",
        img: "./digital-store/slipgaji.png",
        link: "https://lynk.id/tipsntech/pql08m1el03p",
      },
    ],
  },
  {
    id: "ebook",
    category: "E-BOOK & GUIDE",
    icon: <FiBook className="text-blue-600 dark:text-blue-400" size={24} />,
    items: [
      {
        name: "Panduan Lengkap Membuat Video Animasi AI Profesional Secara Gratis + Free Aplikasi Absensi Digital",
        desc: "E-book ini membahas langkah demi langkah cara membuat video animasi menarik dengan memanfaatkan AI gratis yang mudah digunakan.",
        price: "Rp 39.800",
        oldPrice: "Rp 150.000",
        img: "./digital-store/ebook-animasi-comp.png",
        link: "https://lynk.id/tipsntech/z9qrmy151gz5",
      },
    ],
  },
  {
    id: "website",
    category: "WEBSITE TOOLS",
    icon: <FiLayout className="text-purple-600 dark:text-purple-400" size={24} />,
    items: [
      {
        name: "Aplikasi Web Sistem Tata Tertib Sekolah (SITATIB) - Laravel 11",
        desc: "SITATIB, sebuah aplikasi web lengkap yang dibangun dengan teknologi terbaru untuk membantu sekolah Anda mengelola data tata tertib secara profesional, cepat, dan akurat.",
        price: "Rp 49.800",
        oldPrice: "Rp 250.000",
        img: "./projects-picture/logo-projects2.png",
        link: "https://lynk.id/tipsntech/yzlk1o3lwdol",
      },
      {
        name: "[Classic Version] Aplikasi Web E-Presensi - Siap Pakai",
        desc: "Membantu Anda mengatur data siswa, mengisi absensi harian, merekap data secara otomatis, hingga ekspor laporan dalam format PDF dan Excel.",
        price: "Rp 24.800",
        oldPrice: "Rp 59.900",
        img: "./digital-store/absensi-digital1.png",
        link: "https://lynk.id/tipsntech/o1wyjq0kkz98",
      },
      {
        name: "[Modern Version] Aplikasi Web E-Presensi - Siap Pakai",
        desc: "Membantu Anda mengatur data siswa, mengisi absensi harian, merekap data secara otomatis, hingga ekspor laporan dalam format PDF dan Excel.",
        price: "Rp 24.800",
        oldPrice: "Rp 59.900",
        img: "./digital-store/absensi-digital2.png",
        link: "https://lynk.id/tipsntech/z8ygzn23pr02",
      },
      {
        name: "Aplikasi Web Jurnal Mengajar Harian Digital - Siap Pakai",
        desc: "Catat kegiatan mengajar Anda lebih cepat, rapi, & profesional langsung dari laptop — tanpa internet dan harga terjangkau khusus untuk kalangan Guru, Dosen dan Pengajar lainnya",
        price: "Rp 19.800",
        oldPrice: "Rp 55.000",
        img: "./digital-store/jurnal-mengajar.png",
        link: "https://lynk.id/tipsntech/j4w8x7xop249",
      },
      {
        name: "Aplikasi Web Penilaian Siswa Digital Terbaru - Siap Pakai",
        desc: "Solusi manajemen nilai yang dirancang untuk meningkatkan produktivitas guru. Kelola seluruh data penilaian siswa melalui antarmuka yang bersih dan profesional, sepenuhnya fungsional tanpa koneksi internet.",
        price: "Rp 19.900",
        oldPrice: "Rp 74.900",
        img: "./digital-store/nilai-digital-terbaru.png",
        link: "https://lynk.id/tipsntech/858pkqxmo3n3",
      },
      {
        name: "Aplikasi Web Penilaian Siswa Digital [LITE] - Siap Pakai",
        desc: "Kelola nilai siswa dengan mudah, cepat, dan tanpa internet. Aplikasi ini dirancang khusus untuk guru SD, SMP, hingga SMA agar lebih praktis dalam mencatat dan menghitung nilai siswa.",
        price: "Rp 14.900",
        oldPrice: "Rp 54.000",
        img: "./digital-store/penilaian-siswa.png",
        link: "https://lynk.id/tipsntech/5536py9e2vov",
      },
      {
        name: "Website Absensi Digital Sekolah Siswa + Google Sheets",
        desc: "Aplikasi absensi digital berbasis web yang praktis, modern, dan powerful, cocok digunakan untuk beberapa guru yang berbeda. Data absensi siswa akan tersimpan otomatis di Google Sheets. ",
        price: "Rp 39.900",
        oldPrice: "Rp 150.000",
        img: "./digital-store/absensi-database.png",
        link: "https://lynk.id/tipsntech/lovd18lzvkwx",
      },
      {
        name: "Aplikasi E-Presensi Sholat Dhuha & Dzuhur + Google Sheets",
        desc: "Ubah cara absen sholat dhuha dan dhuhur manual yang ribet jadi digital. Laporan rekap bulanan otomatis jadi Excel Cocok untuk sekolah dan madrasah. Sekali beli, pakai selamanya.",
        price: "Rp 24.800",
        oldPrice: "Rp 50.900",
        img: "./digital-store/epresensi-dhuha.png",
        link: "https://lynk.id/tipsntech/36rgrg62o966",
      },
      {
        name: "Aplikasi E-Presensi Sholat 5 Waktu + Google Sheets",
        desc: "Modernisasi Sistem Administrasi Presensi di Lingkungan Pesantren Anda.Tinggalkan metode presensi manual berbasis kertas yang tidak efisie dan memakan waktu dalam proses rekapitulasi bulanan.",
        price: "Rp 24.900",
        oldPrice: "Rp 59.800",
        img: "./digital-store/epresensi-sholat5waktu.png",
        link: "https://lynk.id/tipsntech/zy4zejz5pd07",
      },
      {
        name: "3 Bundle Aplikasi Sekolah Digital + Free Prompt Aplikasi Mengajar",
        desc: "Dengan paket ini, kamu dapat 3 aplikasi digital siap pakai + Bonus prompt web mengajar.",
        price: "Rp 49.700",
        oldPrice: "Rp 165.000",
        img: "./digital-store/bundle-aplikasi.png",
        link: "https://lynk.id/tipsntech/1envv9wgz2ye",
      },
    ],
  },
  {
    id: "prompt",
    category: "PROMPT & AI",
    icon: <FiTerminal className="text-orange-600 dark:text-orange-400" size={24} />,
    items: [
      {
        name: "Kumpulan Prompt Aplikasi Web Mengajar",
        desc: "Di sini ada kumpulan prompt website yang bisa langsung kamu pakai untuk berbagai kebutuhan mengajar dan desain bikin web statis!.",
        price: "Rp 10.900",
        img: "./digital-store/prompt-mengajar.png",
        link: "https://lynk.id/tipsntech/dy49er6g9l2m",
      },
    ],
  },
];

const Hero = ({ mode, setMode }) => {
  // State isDark dan toggleDarkMode dihapus dari Hero karena sudah diurus oleh Navbar
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" ? digitalProducts : digitalProducts.filter((product) => product.id === activeCategory);

  return (
    <div name="home" className="min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-32 px-4 relative overflow-hidden">
      {/* Background Ornamen Cahaya */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-zinc-300/30 dark:bg-zinc-600/20 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse pointer-events-none z-0"></div>

      <div className="max-w-screen-xl mx-auto w-full flex flex-col items-center z-10">
        {/* Saklar Dual Persona */}
        <div className="mb-20 md:mb-24 relative flex p-1.5 bg-zinc-200/50 dark:bg-zinc-900 rounded-full border border-zinc-300 dark:border-zinc-800 shadow-inner">
          <button
            onClick={() => setMode("developer")}
            className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-colors duration-300 z-10 ${
              mode === "developer" ? "text-white dark:text-zinc-900" : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            }`}
          >
            <FiCode size={18} />
            <span>Portofolio</span>
            {mode === "developer" && <motion.div layoutId="activeTab" className="absolute inset-0 bg-zinc-900 dark:bg-white rounded-full -z-10 shadow-md" transition={{ type: "spring", stiffness: 300, damping: 25 }} />}
          </button>

          <button
            onClick={() => setMode("creator")}
            className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-colors duration-300 z-10 ${mode === "creator" ? "text-white" : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"}`}
          >
            <FiShoppingBag size={18} />
            <span>Digital Store</span>
            {mode === "creator" && <motion.div layoutId="activeTab" className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-md" transition={{ type: "spring", stiffness: 300, damping: 25 }} />}
          </button>
        </div>

        {/* KONTEN BERDASARKAN MODE */}
        <AnimatePresence mode="wait">
          {/* ----- MODE 1: PORTOFOLIO ----- */}
          {mode === "developer" && (
            <motion.div
              key="developer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-screen-lg flex flex-col md:flex-row items-center gap-12"
            >
              {/* Kolom Kiri */}
              <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left">
                {/* Foto dan Teks Sejajar */}
                <div className="flex flex-col md:flex-row items-center md:items-center gap-5 md:gap-6 mb-6">
                  {/* Foto Profil */}
                  <div className="relative group shrink-0">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-500 to-zinc-900 dark:from-zinc-400 dark:to-white rounded-full opacity-30 group-hover:opacity-60 transition duration-500 blur"></div>
                    <img src="./profilku.jpg" alt="Yahya Muhaimin" className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-24 md:h-24 rounded-full object-cover border-4 border-white dark:border-darkBg shadow-xl" />
                  </div>

                  {/* Teks Sapaan */}
                  <div className="flex flex-col items-center md:items-start mt-3 md:mt-0">
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Systems Architecture & Web Development</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
                      Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-900 dark:from-white dark:to-zinc-500">Yahya</span>
                    </h2>
                  </div>
                </div>

                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg mb-8">
                  Saya adalah seorang Digital Creator & Tech Enthusiast yang memiliki ketertarikan pada pengembangan website, produktivitas digital, dan pembuatan konten. Saya senang mempelajari teknologi baru serta membangun solusi yang
                  sederhana, fungsional, dan mudah digunakan.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a
                    href="https://github.com/yahyamuhaimin7766"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3.5 font-bold text-white rounded-xl bg-zinc-900 dark:bg-white dark:text-zinc-900 hover:scale-105 transition-transform duration-300 shadow-lg"
                  >
                    <FaGithub size={20} /> Lihat GitHub
                  </a>
                </div>
              </div>

              {/* Kolom Kanan: Terminal Portofolio */}
              <div className="flex-1 w-full max-w-md mt-10 md:mt-0">
                <div className="w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                  <div className="flex items-center px-4 py-3 bg-zinc-800/50 border-b border-zinc-700/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="ml-4 text-xs font-mono text-zinc-400">yahya-profile.json</span>
                  </div>
                  <div className="p-6 text-sm font-mono text-zinc-300 overflow-x-auto">
                    <p>
                      <span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = {"{"}
                    </p>
                    <p className="ml-4">
                      name: <span className="text-green-300">"Yahya Muhaimin"</span>,
                    </p>
                    <p className="ml-4">
                      role: [<span className="text-green-300">"QC Inspector"</span>, <span className="text-green-300">"Fullstack Dev"</span>],
                    </p>
                    <p className="ml-4">
                      techStack: [<span className="text-green-300">"Laravel 11"</span>, <span className="text-green-300">"ReactJS"</span>, <span className="text-green-300">"PHP"</span>, <span className="text-green-300">"Tailwind"</span>,{" "}
                      <span className="text-green-300">"MySQL"</span>, <span className="text-green-300">"SQL Server"</span>],
                    </p>
                    <p>{"};"}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ----- MODE 2: DIGITAL STORE ----- */}
          {mode === "creator" && (
            <motion.div key="creator" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="w-full flex flex-col items-center">
              {/* Header Toko */}
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-white dark:bg-darkCard rounded-2xl flex items-center justify-center shadow-lg border border-zinc-200 dark:border-zinc-700 mx-auto mb-6 group hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <a href="https://www.tiktok.com/@tipsntrick.tech" target="_blank" rel="noopener noreferrer" className="w-full h-full p-1.5 flex items-center justify-center">
                    <img src="./logo/logo-tiktok.png" alt="Logo Tips N Tech" className="w-full h-full rounded-xl object-cover" />
                  </a>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">Tips N Tech Digital Store</h2>
                <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">Akselerasi produktivitas dan keahlian coding Anda dengan template, source code, dan panduan premium dari kami.</p>

                {/* --- ICON SOSMED KHUSUS STORE --- */}
                <div className="flex items-center justify-center gap-5 sm:gap-6 mt-6">
                  <a
                    href="https://wa.me/625719503429"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-green-100 hover:text-green-600 dark:hover:bg-green-900/50 dark:hover:text-green-400 transition-colors duration-300"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@tipsntrick.tech?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 hover:text-black dark:hover:bg-zinc-700 dark:hover:text-white transition-colors duration-300"
                  >
                    <FaTiktok size={20} />
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=tipsntech.trick@gmail.com&su=Halo%20TipsnTech%20Store"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/50 dark:hover:text-red-400 transition-colors duration-300"
                  >
                    <FaEnvelope size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/tipsntrick.tech?igsh=dnm4awk2y2zzzdm0"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-pink-100 hover:text-pink-600 dark:hover:bg-pink-900/50 dark:hover:text-pink-400 transition-colors duration-300"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://youtube.com/@tipsntrick.techno?si=bfd6nh2vyxkdbcvq"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/50 dark:hover:text-red-500 transition-colors duration-300"
                  >
                    <FaYoutube size={20} />
                  </a>
                </div>
              </div>

              {/* Menu Filter Katalog */}
              <div className="w-full max-w-screen-lg flex overflow-x-auto pb-4 mb-8 gap-3 snap-x [&::-webkit-scrollbar]:hidden justify-start lg:justify-center px-1">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`snap-center shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                    activeCategory === "all"
                      ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                      : "bg-white dark:bg-darkCard text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  }`}
                >
                  Semua Kategori
                </button>
                {digitalProducts.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`snap-center shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                      activeCategory === cat.id
                        ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                        : "bg-white dark:bg-darkCard text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>

              {/* Render Produk */}
              <div className="w-full max-w-screen-lg flex flex-col gap-10 sm:gap-16">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((cat) => (
                    <motion.div key={cat.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className="flex flex-col">
                      {/* Judul Kategori */}
                      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                        <div className="scale-75 sm:scale-100">{cat.icon}</div>
                        <h3 className="text-lg sm:text-2xl font-bold text-zinc-900 dark:text-white">{cat.category}</h3>
                      </div>

                      {/* Grid Produk */}
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                        {cat.items.map((item, idx) => (
                          <div key={idx} className="flex flex-col bg-white dark:bg-darkCard border border-zinc-200 dark:border-zinc-800 rounded-xl sm:rounded-2xl p-3 sm:p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="group flex flex-col bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 rounded-lg sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                              <img src={item.img} alt={item.name} className="w-full h-24 sm:h-auto object-cover transform hover:scale-105 transition-transform duration-500" />
                            </div>

                            <h4 className="text-sm sm:text-lg font-bold text-zinc-900 dark:text-white mb-1 sm:mb-2 mt-3 sm:mt-5 leading-tight line-clamp-2">{item.name}</h4>
                            <p className="text-[11px] sm:text-sm text-zinc-600 dark:text-zinc-400 mb-3 sm:mb-6 flex-grow line-clamp-3 sm:line-clamp-none">{item.desc}</p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-zinc-100 dark:border-zinc-800/50 gap-2 sm:gap-0">
                              <div className="flex flex-col">
                                {item.oldPrice && <span className="text-[10px] sm:text-xs text-zinc-400 line-through leading-none mb-1">{item.oldPrice}</span>}
                                <span className="text-sm sm:text-lg font-black text-blue-600 dark:text-blue-400 leading-none">{item.price}</span>
                              </div>

                              <a
                                href={item.link || "#"}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center w-full sm:w-auto gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-bold transition-colors"
                              >
                                Beli{" "}
                                <span className="hidden sm:inline">
                                  <FiArrowRight />
                                </span>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
