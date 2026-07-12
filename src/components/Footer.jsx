const Footer = ({ mode }) => {
  return (
    <footer className="w-full py-6 mt-auto border-t border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-darkBg/50 backdrop-blur-sm z-10 relative">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        {/* Teks Copyright Pintar (Berubah Sesuai Mode) */}
        <p className="text-sm text-zinc-500 dark:text-zinc-500 font-medium text-center">
          © {new Date().getFullYear()} {mode === "developer" ? "Yahya Muhaimin" : "Tips N Tech"}. All rights reserved.
        </p>

        {/* Spasi tambahan khusus di HP saat mode Portofolio agar Footer tidak tertutup navigasi bawah */}
        {mode === "developer" && <div className="h-16 md:hidden"></div>}
      </div>
    </footer>
  );
};

export default Footer;
