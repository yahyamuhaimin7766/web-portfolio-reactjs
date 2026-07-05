import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState("light");

  // Logic untuk Dark Mode
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "education" },
    { id: 5, link: "portfolio" },
    { id: 6, link: "contact" },
  ];

  return (
    <nav className="fixed w-full h-20 px-4 flex justify-between items-center bg-white/80 dark:bg-darkBg/80 backdrop-blur-md z-50 shadow-sm">
      <div>
        <h1 className="text-2xl font-bold font-signature ml-2 text-accent">Portofolio</h1>
      </div>

      <ul className="hidden md:flex items-center">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium hover:text-accent duration-200">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <button onClick={handleThemeSwitch} className="p-2 ml-4 rounded-full bg-slate-200 dark:bg-slate-700 hover:scale-105 duration-200">
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </ul>

      {/* Mobile Menu */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-100 dark:bg-darkBg">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-accent duration-200">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
          <button onClick={handleThemeSwitch} className="mt-8 p-4 rounded-full bg-slate-200 dark:bg-slate-700">
            {theme === "dark" ? <FiSun size={30} /> : <FiMoon size={30} />}
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
