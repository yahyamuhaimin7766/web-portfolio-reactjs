import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiBriefcase, FiBook, FiLayout, FiMail, FiMoon, FiSun } from "react-icons/fi"; // Menggunakan Feather Icons karena desainnya tipis & elegan standar Apple/Android

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  // Array Links sekarang dilengkapi dengan Ikon
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
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-black font-signature tracking-tighter">Portofolio</h1>
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
        {/* Pada mobile, header atas hanya menampilkan tombol Dark Mode */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleDarkMode} className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* ========================================================= */}
      {/* BOTTOM NAVIGATION BAR (Khusus Mobile)                     */}
      {/* ========================================================= */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-[72px] bg-white/90 dark:bg-darkBg/90 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 z-50 flex justify-around items-center px-2 pb-1">
        {links.map(({ id, name, link, icon }) => (
          <Link
            key={id}
            to={link}
            smooth
            duration={500}
            spy={true}
            offset={-20}
            /* activeClass dengan ! (important) agar mengesampingkan warna default */
            activeClass="!text-zinc-900 dark:!text-white scale-110"
            className="flex flex-col items-center justify-center w-full h-full text-zinc-400 dark:text-zinc-500 cursor-pointer transition-all duration-300"
          >
            <div className="mb-1 pointer-events-none">{icon}</div>
            <span className="text-[10px] font-semibold pointer-events-none">{name}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
