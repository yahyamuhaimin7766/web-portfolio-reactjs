import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaTiktok, FaFacebookF, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const About = () => {
  const skills = ["Laravel", "ReactJs", "Tailwind", "Excel", "Visio", "Digital Creator", "Premier Pro & Capcut", "Analytics", "Interpersonal Communication", "Problem Solving", "Time Management", "Attention to Detail", "Adaptability"];

  const socials = [
    { id: 1, child: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/yahyamuhaimin03?utm_source=share_via&utm_content=profile&utm_medium=member_ios", color: "hover:text-[#0a66c2] dark:hover:text-[#0a66c2]" },
    { id: 2, child: <FaGithub size={24} />, href: "https://github.com/yahyamuhaimin7766", color: "hover:text-zinc-900 dark:hover:text-white" },
    { id: 3, child: <FaTiktok size={24} />, href: "https://www.tiktok.com/@tipsntrick.tech?_r=1&_t=ZS-97lqxx1En0z", color: "hover:text-black dark:hover:text-white" },
    { id: 4, child: <FaInstagram size={24} />, href: "https://www.instagram.com/yahyaa.m_?igsh=MWc1NjJtYnQ3eW53OA%3D%3D&utm_source=qr", color: "hover:text-pink-600 dark:hover:text-pink-400" },
    { id: 5, child: <FaXTwitter size={24} />, href: "https://x.com/yahyamuhaimin63?s=11", color: "hover:text-black dark:hover:text-white" },
    { id: 6, child: <FaFacebookF size={24} />, href: "https://www.facebook.com/share/1CAifaQwbZ/?mibextid=wwXIfr", color: "hover:text-blue-600 dark:hover:text-blue-400" },
  ];

  return (
    <div name="about" className="w-full min-h-screen pt-24 pb-12 flex items-center">
      <div className="max-w-screen-lg p-4 mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="pb-10">
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Profil <span className="text-zinc-500 dark:text-accent">Singkat.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Kolom Kiri: Deskripsi Diri */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col space-y-6">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Saya adalah seorang Digital Creator & Tech Enthusiast yang memiliki ketertarikan pada pengembangan website, produktivitas digital, dan pembuatan konten. Saya senang mempelajari teknologi baru serta membangun solusi yang
              sederhana, fungsional, dan mudah digunakan.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Di sisi profesional, saya berkarier sebagai Quality Control Inspector di PT Astra International Tbk - Daihatsu Sales Operation, dengan tanggung jawab memastikan kualitas kendaraan melalui proses inspeksi yang akurat dan sesuai
              standar perusahaan. Pengalaman tersebut memperkuat kemampuan saya dalam berpikir analitis, dan memperhatikan detail setiap pekerjaan.
            </p>
          </motion.div>

          {/* Kolom Kanan: Tech Stack, Quote & Sosial Media */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            {/* 1. Tech Stack */}
            <h3 className="text-xl font-bold mb-6 text-zinc-800 dark:text-zinc-200">Tech Stack & Keahlian</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-5 py-2.5 text-sm font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg shadow-sm hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* 2. Deretan Icon Social Media */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Mari Terhubung</h3>
              <div className="flex flex-wrap gap-4">
                {socials.map(({ id, child, href, color }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-darkCard/50 backdrop-blur-sm text-zinc-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md ${color}`}
                  >
                    {child}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
