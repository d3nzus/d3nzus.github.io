import Education from "../blocks/Education";
import IntroBlock from "../blocks/IntroBlock";
import Project from "../blocks/Project";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <IntroBlock />
      <Project/>
      <Education />
    </div>
  );
}

export default Home;