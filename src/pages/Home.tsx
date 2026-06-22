import Current from "../blocks/Current";
import IntroBlock from "../blocks/IntroBlock";
import Header from "../components/Header";
import Line from "../components/Line";
import Socials from "../components/Socials";

function Home() {
  return (
    <div>
      <Header />
      <IntroBlock />
      <Current />
    </div>
  );
}

export default Home;