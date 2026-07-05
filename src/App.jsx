import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-grid-pattern min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />

      <footer className="w-full text-center py-8 text-sm opacity-50 border-t border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">&copy; {new Date().getFullYear()} Portofolio. Yahya Muhaimin.</footer>
    </div>
  );
}

export default App;
