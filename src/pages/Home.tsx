import Current from "../blocks/Current";
import IntroBlock from "../blocks/IntroBlock";
import Previous from "../blocks/Previous";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <IntroBlock />
      <Current />
      <Previous />
    </div>
  );
}

export default Home;