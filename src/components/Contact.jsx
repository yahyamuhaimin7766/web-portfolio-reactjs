import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiSend, FiCheckCircle, FiAlertCircle, FiRefreshCw } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // ==========================================
  // STATE UNTUK VERIFIKASI ANTI-BOT (CAPTCHA)
  // ==========================================
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [userAnswer, setUserAnswer] = useState("");
  const [isBotError, setIsBotError] = useState(false);

  // Fungsi untuk membuat pertanyaan matematika acak baru
  const generateNewNumbers = () => {
    const n1 = Math.floor(Math.random() * 8) + 2; // Angka acak 2 - 9
    const n2 = Math.floor(Math.random() * 8) + 2; // Angka acak 2 - 9
    setCaptcha({ num1: n1, num2: n2 });
    setUserAnswer("");
    setIsBotError(false);
  };

  // Generate angka pertama kali saat halaman dibuka
  useEffect(() => {
    generateNewNumbers();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // VALIDASI: Cek apakah jawaban user benar
    const correctSum = captcha.num1 + captcha.num2;
    if (parseInt(userAnswer) !== correctSum) {
      setIsBotError(true);
      return; // Stop proses, email tidak akan terkirim ke EmailJS
    }

    setIsSending(true);
    setIsBotError(false);

    // KUNCI EMAILJS ANDA
    const serviceID = "service_o6z9xn4"; // Contoh: 'service_abc123'
    const templateID = "template_uje5tj8"; // Contoh: 'template_xyz789'
    const publicKey = "91ek3flmxSZJlqRYX"; // Contoh: 'aB1cD2eF3gH4iJ5kL'

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        setIsSuccess(true);
        setIsSending(false);
        e.target.reset(); // Kosongkan form input nama/email/pesan
        generateNewNumbers(); // Generate angka baru setelah sukses

        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      },
      (error) => {
        alert("Terjadi kesalahan, pesan gagal terkirim.");
        setIsSending(false);
        generateNewNumbers();
        console.log(error.text);
      }
    );
  };

  return (
    <div name="contact" className="w-full min-h-screen pt-24 pb-20 flex items-center bg-zinc-50 dark:bg-darkBg/50 relative">
      <div className="max-w-screen-md mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white inline-block">
            Mari <span className="text-zinc-500 dark:text-accent">Berdiskusi.</span>
          </h2>
          <p className="py-4 text-zinc-600 dark:text-zinc-400">Punya ide proyek, tawaran kerja, atau sekadar ingin menyapa? Kirimkan pesan Anda!</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex justify-center items-center relative">
          {/* Notifikasi Sukses */}
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium shadow-lg z-20 w-max"
            >
              <FiCheckCircle size={18} /> Pesan berhasil terkirim ke email Anda!
            </motion.div>
          )}

          <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full md:w-4/5 bg-white dark:bg-darkCard p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-zinc-200 dark:border-zinc-800">
            {/* Input Nama */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Nama Lengkap</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full p-3.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 focus:border-zinc-400 dark:focus:border-zinc-500 rounded-xl focus:outline-none transition-colors text-zinc-900 dark:text-white"
                placeholder="Masukkan nama Anda"
              />
            </div>

            {/* Input Email */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Email Aktif</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full p-3.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 focus:border-zinc-400 dark:focus:border-zinc-500 rounded-xl focus:outline-none transition-colors text-zinc-900 dark:text-white"
                placeholder="email@anda.com"
              />
            </div>

            {/* Input Pesan */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Pesan</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full p-3.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 focus:border-zinc-400 dark:focus:border-zinc-500 rounded-xl focus:outline-none transition-colors text-zinc-900 dark:text-white resize-none"
                placeholder="Tuliskan pesan Anda di sini..."
              ></textarea>
            </div>

            {/* ========================================================= */}
            {/* KARTU VERIFIKASI KEAMANAN (FUTURISTIK ANTI-BOT) */}
            {/* ========================================================= */}
            <div className="mb-8 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Security Verification</label>
                <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 font-medium">
                  <span>
                    Berapa hasil dari{" "}
                    <strong className="text-zinc-900 dark:text-white font-black text-lg">
                      {captcha.num1} + {captcha.num2}
                    </strong>{" "}
                    ?
                  </span>
                  <button type="button" onClick={generateNewNumbers} className="p-1 hover:text-zinc-900 dark:hover:text-white transition-colors" title="Ganti angka">
                    <FiRefreshCw size={14} className="animate-spin-slow" />
                  </button>
                </div>
              </div>

              <div className="w-full sm:w-32">
                <input
                  type="number"
                  required
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Jawaban"
                  className="w-full p-2.5 bg-white dark:bg-darkCard border border-zinc-300 dark:border-zinc-700 focus:border-zinc-500 rounded-lg text-center font-bold text-zinc-900 dark:text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Error Notifikasi jika Jawaban Salah */}
            {isBotError && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs sm:text-sm rounded-lg flex items-center gap-2 font-medium">
                <FiAlertCircle size={16} /> Jawaban salah. Silakan hitung kembali untuk membuktikan Anda manusia.
              </motion.div>
            )}

            {/* Tombol Kirim */}
            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-4 px-6 flex items-center justify-center gap-2 rounded-xl font-bold text-white transition-all duration-300 ${
                isSending ? "bg-zinc-400 dark:bg-zinc-700 cursor-not-allowed" : "bg-zinc-900 dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:-translate-y-1 hover:shadow-lg"
              }`}
            >
              {isSending ? (
                "Mengirim Pesan..."
              ) : (
                <>
                  Kirim Pesan <FiSend size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
