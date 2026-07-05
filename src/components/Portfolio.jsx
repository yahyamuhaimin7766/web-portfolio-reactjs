import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTiktok, FaStore, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Komponen Custom untuk Animasi Angka (Tanpa Library Eksternal!)
const AnimatedNumber = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const duration = 2500; // Durasi animasi 2.5 detik

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Efek perlambatan di akhir (Ease Out)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end]);

  // toLocaleString('id-ID') otomatis membuat format titik (72.000)
  return <>{count.toLocaleString("id-ID")}</>;
};

const Portfolio = () => {
  // PERUBAHAN: Menambahkan properti "image" ke masing-masing proyek
  const projects = [
    {
      id: 1,
      title: "Monitoring and Reporting Defect Unit System",
      desc: "Mengembangkan sistem informasi berbasis web untuk PT Prima Komponen Indonesia yang bertujuan meningkatkan proses pelaporan dan pemantauan defect unit dan menggantikan proses manual dengan dashboard terintegrasi.",
      tech: ["Laravel", "Bootstrap", "JS", "MySQL"],
      image: "./projects-picture/logo-projects1.png",
      demo: "#",
      code: "#",
    },
    {
      id: 2,
      title: "SITATIB - Sistem Tata Tertib Sekolah Digital",
      desc: "Mengembangkan SITATIB, sebuah sistem informasi tata tertib sekolah berbasis web yang memungkinkan pengelolaan data pelanggaran, siswa, razia dan laporan secara terintegrasi.",
      tech: ["Laravel", "Bootstrap", "JS", "MySQL"],
      image: "./projects-picture/logo-projects2.png", // Path ke screenshot aplikasi Anda
      demo: "#",
      code: "#",
    },
    {
      id: 3,
      title: "E-Book Panduan Membuat Animasi AI Professional Dengan Tools Gratis",
      desc: "Menulis & menyusun e-book Panduan Lengkap Membuat Video Animasi dengan AI yang membahas penggunaan tools AI gratis untuk menghasilkan video animasi profesional.",
      tech: ["Canva", "E-Book", "Animation"],
      image: "./projects-picture/projects3.png", // Path ke screenshot aplikasi Anda
      demo: "#",
      code: "#",
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      desc: "Mengembangkan Web Portofolio Pribadi, Website ini menampilkan berbagai proyek, keterampilan, pengalaman kerja, dan pencapaian saya melalui tampilan yang modern dan responsif.",
      tech: ["ReactJS", "TaildWind CSS", "Framer Motion"],
      image: "./projects-picture/projects4.png", // Path ke screenshot aplikasi Anda
      demo: "#",
      code: "#",
    },
    {
      id: 5,
      title: "Catatan Kegiatan Harian (Daily Activity Report)",
      desc: "Sistem berbasis web yang dikembangkan untuk mempermudah pencatatan, pemantauan, dan pelaporan kegiatan harian dengan fitur unggah dokumentasi, filter data, serta ekspor laporan.",
      tech: ["PHP", "MySQL"],
      image: "./projects-picture/projects5.png", // Path ke screenshot aplikasi Anda
      demo: "#",
      code: "#",
    },
  ];

  return (
    <div name="portfolio" className="w-full h-full pt-24 pb-32">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white inline-block">
            Portofolio <span className="text-zinc-500 dark:text-accent"> & Karya.</span>
          </h2>
          <p className="py-4 text-zinc-600 dark:text-zinc-400">Jejak digital, proyek aplikasi, dan pencapaian edukasi saya.</p>
        </div>

        {/* SECTION 1: CREATOR HIGHLIGHTS */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* TikTok Card - Glow Effect Hover */}
          {/* TikTok Card - Glow Effect Hover (Sekarang bisa diklik seluruh kartunya) */}
          <motion.a
            href="https://www.tiktok.com/@tipsntrick.tech?_r=1&_t=ZS-97lqxx1En0z" 
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center p-6 bg-white dark:bg-darkCard border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
              <FaTiktok size={150} />
            </div>
            <div className="mr-6 z-10 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <img src="./logo/logo-tiktok.png" alt="Logo TikTok Saya" className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-lg border border-zinc-200 dark:border-zinc-700 bg-white" />
            </div>
            <div className="z-10">
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-1">TikTok Community </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-zinc-900 dark:text-white">
                  <AnimatedNumber end={72000} />
                </span>
                <span className="text-xl font-bold text-zinc-900 dark:text-white">+</span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Mengedukasi audiens lewat Tutorial Teknologi, Web Development, AI Tools, Excel & Word tips</p>
            </div>
          </motion.a>
          {/* Lynk.id Card - Glow Effect Hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center p-6 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900/50 dark:to-darkCard border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
              <FaStore size={150} />
            </div>
            <div className="mr-6 z-10 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <img src="./logo/logo-lynk.png" alt="Logo Lynk.id saya" className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-lg border border-zinc-200 dark:border-zinc-700 bg-white" />
            </div>
            <div className="z-10">
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-1">Digital Product Store (Lynk.id)</h3>
              <a href="https://lynk.id/tipsntech" target="_blank" rel="noreferrer" className="text-2xl font-bold text-zinc-900 dark:text-white hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors flex items-center gap-2">
                TIPS N TECH <FaExternalLinkAlt size={14} className="text-zinc-400" />
              </a>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">Menyediakan berbagai produk digital berkualitas, seperti website, source code, template Excel, Ebook, prompt AI, dan materi edukasi</p>
            </div>
          </motion.div>
        </div>

        <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 mb-12"></div>

        {/* SECTION 2: WEB PROJECTS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* PERUBAHAN: Mengambil parameter "image" dari array projects */}
          {projects.map(({ id, title, desc, tech, image, demo, code }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white dark:bg-darkCard border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* PERUBAHAN: Menghapus FiMonitor dan menggantinya dengan tag img */}
              <div className="h-48 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 flex-grow">{desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tech.map((item, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-md border border-zinc-200 dark:border-zinc-700">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 text-sm font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
