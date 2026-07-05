import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "QC Inspector - Logistics Department",
      company: "PT Astra International Tbk - Daihatsu Sales Operation",
      duration: "Maret 2026 - Sekarang",
      logo: "./logo/logo-astra.png",
      desc: [
        "Responsible for ensuring product quality and compliance with company standards through inspection and quality control processes. Conducted detailed inspections on vehicles and components to identify defects, ensure safety, and maintain product reliability. Collaborated with production and technical teams to resolve quality issues and implement corrective actions. Prepared inspection reports, documented findings, and contributed to continuous improvement initiatives to enhance overall product quality and operational efficiency.",
      ],
    },
    {
      id: 2,
      role: "Quality Control | Checker In Transit",
      company: "PT Prima Komponen Indonesia",
      duration: "Agustus 2024 - Februari 2026",
      logo: "./logo/logo-pk.png",
      desc: [
        "Ensuring that accessories and parts to be installed meet the required standards by inspecting material quality and verifying the authenticity of parts. Supervising technicians during installation, ensuring all procedures are carried out according to SOPs, and conducting tests to verify the functionality of installed parts. Detecting defects, providing repair recommendations, and ensuring corrective actions are implemented effectively. Creating inspection reports, documenting quality issues, and providing analysis and recommendations to management to support continuous quality improvement.",
      ],
    },
    {
      id: 3,
      role: "Mechanic Spesialist",
      company: "PT Prima Komponen Indonesia",
      duration: "Maret 2021 - Agustus 2024",
      logo: "./logo/logo-pk.png",
      desc: [
        "Installing automotive accessories, genuine parts, and vehicle components on Daihatsu vehicles according to manufacturer standards and SOPs. Inspecting component quality and compatibility before installation, performing functional testing after installation, troubleshooting technical issues, and ensuring all work meets quality, safety, and customer satisfaction standards.",
      ],
    },
    {
      id: 4,
      role: "Personalia | General Affairs - Intern",
      company: "PT Takagi Sari Multi Utama",
      duration: "November 2018 - Februari 2019",
      logo: "./logo/logo-takagi.png",
      desc: [
        "Preparing the onboarding process for new employee recruitment, including administrative documentation, orientation, and initial training. Assisting in managing the employee database by ensuring all employee information is accurate and up to date, as well as maintaining records of internal training. Managing and archiving employee documents, including employment contracts and performance evaluation records. Preparing logistical requirements for company events, including meeting rooms, catering, and training materials.",
      ],
    },
  ];

  return (
    // PERUBAHAN: Dihapus min-h-screen & bg-slate, diganti h-full dan ditambah pb-32 untuk jarak bawah
    <div name="experience" className="w-full h-full pt-24 pb-32">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* PERUBAHAN: Desain heading disamakan dengan gaya "Profil Singkat." */}
        <div className="pb-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white inline-block">
            Pengalaman <span className="text-zinc-500 dark:text-accent">Kerja.</span>
          </h2>
        </div>

        {/* PERUBAHAN: gap-6 diubah jadi gap-10 agar jarak antar 4 card tidak terlalu sesak */}
        <div className="flex flex-col gap-10 px-4 sm:px-0">
          {experiences.map(({ id, role, company, duration, logo, desc }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }} // Animasi hanya main sekali saat discroll
              className="flex flex-col md:flex-row bg-white/80 dark:bg-darkCard/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md duration-300 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8"
            >
              {/* Bagian Logo */}
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8 flex justify-center items-start">
                <img src={logo} alt={company} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-sm border border-zinc-200 dark:border-zinc-700 bg-white" />
              </div>

              {/* Bagian Detail Pekerjaan */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 sm:gap-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white leading-tight">{role}</h3>
                  <span className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-300 px-4 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full w-fit whitespace-nowrap border border-zinc-200 dark:border-zinc-700">{duration}</span>
                </div>
                <h4 className="text-md font-medium text-zinc-500 dark:text-zinc-400 mb-5">{company}</h4>

                {/* Deskripsi Pekerjaan */}
                <div className="text-zinc-600 dark:text-zinc-400 space-y-4 text-sm sm:text-base leading-relaxed">
                  {desc.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
