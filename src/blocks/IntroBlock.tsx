import Line from "../components/Line";
import Socials from "../components/Socials";

function IntroBlock() {
  return (
    <div className="container mx-auto relative">

      <div className="my-4 flex flex-col md:flex-row-reverse gap-6 items-center md:items-start">

        <img
          src="/image.png"
          alt="Picture"
          className="w-40 sm:w-56 md:w-2/5 h-auto z-0 shrink-0 relative object-cover pointer-events-none"
        />

        <div className="flex flex-col relative w-full md:w-3/5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white -my-1 text-center md:text-left">
            RENZ FREDERICK P. BAÑAS
          </h1>
          <p className="text-lg text-gray-400 -my-1 text-center md:text-left">
            Student Web Designer/Developer
          </p>
          <br />

          <div className="text-md text-white text-justify w-full wrap-anywhere h-fit leading-5">
            I am Renz, a student studying Computer Science at the University of
            the Philippines - Visayas. I am someone who’s passionate when it
            comes to accessible and open-source technologies and the belief that
            computer science as a field should be used for the benefit and
            perpetuation of the human race.
            <br /> <br />
            As a student developer, I push myself to create tools that not only
            function as intended but are easy, convenient and fun for the user.
            I hope to continue learning and honing my skills moving forward.
            <br /> <br />
            <p className="text-lg text-gray-400 mt-1.25 text-center m-3">
              "Full-stack development for the people, by the people."
            </p>
            <Socials />
            <Line />
          </div>
        </div>

      </div>
    </div>
  );
}

export default IntroBlock;