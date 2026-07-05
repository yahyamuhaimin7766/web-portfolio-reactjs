import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div name="home" className="h-screen w-full flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Efek Cahaya Latar Belakang (Ambient Glow) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-zinc-300/30 dark:bg-zinc-600/20 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-400/20 dark:bg-zinc-700/20 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }}></div>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-screen-md mx-auto flex flex-col items-center justify-center h-full z-10 pt-10">
        {/* Foto Profil dengan Efek Glow */}
        <div className="mb-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-zinc-300 to-zinc-500 dark:from-zinc-600 dark:to-zinc-400 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <img src="./profilku.jpg" /* Pastikan nama file sesuai */ alt="Profil Yahya" className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-white dark:border-zinc-800 shadow-xl" />
        </div>

        {/* Teks Nama Hologram */}
        <h2 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white mb-3">
          Hi, I'm <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-900 dark:from-white dark:to-zinc-500">Yahya Muhaimin</span>
        </h2>

        {/* Efek Animasi Ketik (Typewriter) */}
        <div className="text-xl sm:text-3xl font-bold text-zinc-600 dark:text-zinc-300 h-12 sm:h-16">
          <TypeAnimation sequence={["Digital Creator", 1500, "Tech Enthusiast", 1500]} wrapper="span" speed={50} repeat={Infinity} className="inline-block" />
        </div>

        {/* Teks Deskripsi Baru (Bahasa Inggris) */}
        <p className="py-4 max-w-lg mx-auto text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
          Passionate about creating digital experiences through content and web development. I enjoy learning new technologies, building modern websites, and creating content that educates, inspires, and delivers value.
        </p>

        {/* Tombol CV */}
        <div className="flex gap-4 mt-2">
          <a
            href="https://drive.google.com/drive/folders/1ocWxdtbVLR2DZfMZInUSv9HJ9Wmw6vcN?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group relative px-6 py-3 font-bold text-white rounded-lg bg-zinc-900 dark:bg-white dark:text-zinc-900 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300"
          >
            <span className="relative z-10">Minta Akses CV</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
