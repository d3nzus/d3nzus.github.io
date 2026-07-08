import Education from "../blocks/Education";
import IntroBlock from "../blocks/IntroBlock";
import Project from "../blocks/Project";
import Header from "../components/Header";

function Home() {
  return (
    <div className="h-screen w-3/5 mx-auto">
      <Header />
      <IntroBlock />
      <Project/>
      <Education />
    </div>
  );
}

export default Home;