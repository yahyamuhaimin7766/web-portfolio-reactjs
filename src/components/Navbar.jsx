import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiBriefcase, FiBook, FiLayout, FiMail, FiMoon, FiSun } from "react-icons/fi"; // Menggunakan Feather Icons yang elegan & tipis standar iOS/Android

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // LOGIKA BARU: Melacak seksi mana yang sedang aktif di layar secara real-time
  const [activeLink, setActiveLink] = useState("home");

  // Logika Smart Navbar (Hanya untuk Header Atas)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const links = [
    { id: 1, name: "Home", link: "home", icon: <FiHome size={22} /> },
    { id: 2, name: "About", link: "about", icon: <FiUser size={22} /> },
    { id: 3, name: "Experience", link: "experience", icon: <FiBriefcase size={22} /> },
    { id: 4, name: "Education", link: "education", icon: <FiBook size={22} /> },
    { id: 5, name: "Portfolio", link: "portfolio", icon: <FiLayout size={22} /> },
    { id: 6, name: "Contact", link: "contact", icon: <FiMail size={22} /> },
  ];

  return (
    <>
      {/* ========================================================= */}
      {/* HEADER ATAS (Desktop Navigation & Mobile Logo/Dark Mode)  */}
      {/* ========================================================= */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNav ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex justify-between items-center w-full h-20 px-4 md:px-8 text-zinc-900 dark:text-white bg-white/80 dark:bg-darkBg/80 backdrop-blur-md fixed top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 shadow-sm"
      >
        {/* Logo & Server Status */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-black font-signature tracking-tighter">Portofolio</h1>

          {/* Indikator Server Status ala Fullstack Developer */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-full border border-zinc-200 dark:border-zinc-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
        </div>

        {/* --- DESKTOP MENU --- */}
        <ul className="hidden md:flex items-center">
          {links.map(({ id, name, link }) => (
            <li key={id} className="px-4">
              <Link
                to={link}
                smooth
                duration={500}
                spy={true}
                onSetActive={() => setActiveLink(link)} // Menyelaraskan dengan menu bawah jika di-scroll
                activeClass="!text-zinc-900 dark:!text-white font-bold"
                className="cursor-pointer capitalize font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all duration-200"
              >
                {name}
              </Link>
            </li>
          ))}
          {/* Tombol Dark Mode (Desktop) */}
          <li className="ml-4 border-l border-zinc-300 dark:border-zinc-700 pl-6">
            <button onClick={toggleDarkMode} className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </li>
        </ul>

        {/* --- MOBILE HEADER MENU --- */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleDarkMode} className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* ========================================================= */}
      {/* BOTTOM NAVIGATION BAR (Khusus Mobile dengan Animasi Spring)*/}
      {/* ========================================================= */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-[72px] bg-white/90 dark:bg-darkBg/90 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 z-50 flex justify-around items-center px-2 pb-1">
        {links.map(({ id, name, link, icon }) => {
          // Cek apakah item ini yang sedang aktif dibuka oleh user
          const isActive = activeLink === link;

          return (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              spy={true}
              offset={-20}
              onSetActive={() => setActiveLink(link)} // Mengubah state saat user scroll/klik
              className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
            >
              {/* PERBAIKAN ANIMASI: Mengontrol gerakan, ukuran, dan transisi warna ikon sekaligus */}
              <motion.div
                whileTap={{ scale: 0.85 }} // Efek sedikit mengecil saat ditekan jari (haptic feel)
                animate={{
                  y: isActive ? -6 : 0, // Meloncat ke atas setinggi 6px jika aktif
                  scale: isActive ? 1.15 : 1, // Membesar sedikit jika aktif
                  color: isActive
                    ? darkMode
                      ? "#ffffff"
                      : "#18181b" // Warna aktif terang/gelap
                    : darkMode
                    ? "#52525b"
                    : "#a1a1aa", // Warna tidak aktif redup
                }}
                transition={{
                  type: "spring",
                  stiffness: 380, // Tingkat kekencangan pegas (membal halus)
                  damping: 18, // Mengurangi goyangan berlebih di akhir lompatan
                }}
                className="mb-1 pointer-events-none"
              >
                {icon}
              </motion.div>

              {/* Teks Mikro di bawah Ikon */}
              <span
                className={`text-[10px] font-semibold tracking-wide transition-all duration-300 pointer-events-none ${
                  isActive ? "text-zinc-900 dark:text-white font-bold opacity-100 scale-105" : "text-zinc-400 dark:text-zinc-500 opacity-80"
                }`}
              >
                {name}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
