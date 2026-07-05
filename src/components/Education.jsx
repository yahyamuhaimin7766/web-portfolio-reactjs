import { motion } from "framer-motion";

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "S1 (S.Kom) - Teknik Informatika",
      institution: "Universitas Muhammadiyah Tangerang",
      duration: "Oktober 2020 - Agustus 2024",
      logo: "./logo/logo-kampus.png",
      desc: "Lulus dengan predikat Cum Laude dengan IPK 3,86. Aktif sebagai anggota Himpunan Mahasiswa, berpartisipasi dalam kegiatan organisasi, mendukung pelaksanaan program kerja, serta mengembangkan kemampuan komunikasi, kerja sama tim, kepemimpinan, dan pemecahan masalah.",
    },
    {
      id: 2,
      degree: "SMK - Teknik Komputer dan Jaringan",
      institution: "SMK Negeri 5 Kabupaten Tangerang",
      duration: "Juli 2017 - Mei 2020",
      logo: "./logo/logo-smk5.png",
      desc: "Menyelesaikan pendidikan kejuruan pada program Teknik Komputer dan Jaringan (TKJ) dengan nilai rata-rata 83,13. Menguasai kompetensi di bidang instalasi perangkat keras dan perangkat lunak komputer, konfigurasi jaringan, dan Memperoleh Sertifikat Kompetensi BNSP sebagai bukti kompetensi sesuai standar nasional di bidang Teknik Komputer dan Jaringan.",
    },
  ];

  return (
    <div name="education" className="w-full min-h-screen pt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white inline-block">Pendidikan</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 px-4 sm:px-0">
          {educations.map(({ id, degree, institution, duration, logo, desc }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-darkCard p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <img src={logo} alt={institution} className="w-14 h-14 rounded-md object-cover mr-4 border border-slate-200" />
                <div>
                  <h3 className="text-lg font-bold leading-tight">{degree}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{institution}</p>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-xs font-semibold text-accent px-2 py-1 bg-accent/10 rounded-md">{duration}</span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base flex-grow">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
