import Education from "../blocks/Education";
import IntroBlock from "../blocks/IntroBlock";
import Project from "../blocks/Project";
import Header from "../components/Header";
import Achievements from "../blocks/Achievements";

function Home() {
  return (
    <div className="h-screen w-4/5 mx-auto">
      <Header />
      <IntroBlock />
      <Achievements />
      <Project/>
      <Education />
    </div>
  );
}

export default Home;