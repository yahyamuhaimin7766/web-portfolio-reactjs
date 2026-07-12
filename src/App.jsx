import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 

function App() {
  const [mode, setMode] = useState("developer");

  return (
    // Tambahkan 'flex flex-col' agar footer bisa selalu terdorong ke bawah
    <div className="bg-zinc-50 dark:bg-darkBg text-zinc-900 dark:text-zinc-100 min-h-screen transition-colors duration-300 bg-grid-pattern relative flex flex-col">
      <Navbar mode={mode} />

      {/* Bungkus konten di dalam tag <main> dengan 'flex-grow' */}
      <main className="flex-grow w-full">
        <Hero mode={mode} setMode={setMode} />

        {mode === "developer" && (
          <>
            <About />
            <Experience />
            <Education />
            <Portfolio />
            <Contact />
          </>
        )}
      </main>

      {/* Panggil Footer di paling bawah dan berikan prop mode */}
      <Footer mode={mode} />
    </div>
  );
}

export default App;
