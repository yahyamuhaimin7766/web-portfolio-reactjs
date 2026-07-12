import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiBriefcase, FiBook, FiLayout, FiMail, FiMoon, FiSun } from "react-icons/fi";

// Menerima props 'mode' dari App.jsx
const Navbar = ({ mode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("home");

  // Sinkronisasi status dark mode
  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

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
      {/* HEADER ATAS */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNav ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex justify-between items-center w-full h-20 px-4 md:px-8 text-zinc-900 dark:text-white bg-white/80 dark:bg-darkBg/80 backdrop-blur-md fixed top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 shadow-sm"
      >
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-black font-signature tracking-tighter">
            {/* Teks Logo Berubah Mengikuti Mode */}
            {mode === "developer" ? "Portofolio" : "Tips N Tech"}
          </h1>

          <div className="flex items-center gap-2 px-2.5 py-1 sm:bg-zinc-100 sm:dark:bg-zinc-800/50 sm:rounded-full sm:border border-zinc-200 dark:border-zinc-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="hidden sm:block text-[10px] font-mono text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest mt-[1px]">
              {/* Indikator Status Berubah Mengikuti Mode */}
              {mode === "developer"}
            </span>
          </div>
        </div>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center">
          {/* Link Navigasi HANYA muncul di mode Portofolio */}
          {mode === "developer" && (
            <ul className="flex items-center">
              {links.map(({ id, name, link }) => (
                <li key={id} className="px-4">
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    spy={true}
                    onSetActive={() => setActiveLink(link)}
                    activeClass="!text-zinc-900 dark:!text-white font-bold"
                    className="cursor-pointer capitalize font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all duration-200"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Tombol Dark Mode SELALU muncul */}
          <div className={mode === "developer" ? "ml-4 border-l border-zinc-300 dark:border-zinc-700 pl-6" : ""}>
            <button onClick={toggleDarkMode} className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE HEADER MENU --- */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleDarkMode} className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* BOTTOM NAVIGATION BAR (Khusus Mobile & Khusus Mode Portofolio) */}
      {mode === "developer" && (
        <div className="md:hidden fixed bottom-0 left-0 w-full h-[72px] bg-white/90 dark:bg-darkBg/90 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 z-50 flex justify-around items-center px-2 pb-1">
          {links.map(({ id, name, link, icon }) => {
            const isActive = activeLink === link;
            return (
              <Link key={id} to={link} smooth duration={500} spy={true} offset={-20} onSetActive={() => setActiveLink(link)} className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                <motion.div
                  whileTap={{ scale: 0.85 }}
                  animate={{ y: isActive ? -6 : 0, scale: isActive ? 1.15 : 1, color: isActive ? (darkMode ? "#ffffff" : "#18181b") : darkMode ? "#52525b" : "#a1a1aa" }}
                  transition={{ type: "spring", stiffness: 380, damping: 18 }}
                  className="mb-1 pointer-events-none"
                >
                  {icon}
                </motion.div>
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
      )}
    </>
  );
};

export default Navbar;
