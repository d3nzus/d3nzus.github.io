import Line from "../components/Line";
import Socials from "../components/Socials";

function IntroBlock() {
  return (
    <div className="container mx-auto -top-30 relative">
      {/* This div covers all content*/}
      <div className="my-4 flex flex-row gap-4">
        {/* This div covers all content except image, so that it renders seperately in the flex display*/}
        <div className="-mx-1 flex flex-col top-35 relative">
          <h1 className="text-6xl
           font-bold text-white -my-1 ">
            RENZ FREDERICK P. BAÑAS
          </h1>
          <p className="text-2xl text-gray-400 -my-1">
            Student Web Designer/Developer
          </p>
          <br />

          <p className="text-md text-white text-justify w-full wrap-anywhere h-fit">
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
          </p>
          </div>
          <img
            src="src/public/image.png"
            alt="Picture"
            className="w-8/22 h-auto z-0 shrink-0 relative object-cover pointer-events-none"
          />
        </div>
      </div>
  );
}

export default IntroBlock;
