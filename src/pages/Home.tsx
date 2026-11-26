import Education from "../blocks/Education";
import IntroBlock from "../blocks/IntroBlock";
import Project from "../blocks/Project";
import Header from "../components/Header";
import Achievements from "../blocks/Achievements";

function Home() {
  return (
    <div className="min-h-screen w-full px-4 sm:px-6 md:w-11/12 lg:w-4/5 mx-auto">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <IntroBlock />
        <Achievements />
        <Project />
        <Education />
      </main>
      <footer className="container mx-auto py-8 text-center text-sm text-gray-400">
        © 2026 Renz Frederick P. Bañas. Built with React, Vite, and Tailwind CSS.
      </footer>
    </div>
  );
}

export default Home;
