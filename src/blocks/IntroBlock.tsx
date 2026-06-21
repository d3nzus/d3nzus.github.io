function IntroBlock() {
    return(
     <div className="container mx-auto p-4 bg-black">
      <div className="container mx-0 p-8 bg-gray-500">
        <p className="text-sm">D3nzus.Github.IO</p>
      </div>

      <div className="my-4">
      <h1 className="text-5xl font-bold text-white ">RENZ FREDERICK P. BAÑAS</h1>
      <p className="text-lg text-gray-400">Student Web Designer/Developer</p>
      <br />
      <div className="flex flex-row gap-4"> 
        <p className="text-md text-white text-justify w-3/5 wrap-anywhere h-fit">
        I am Renz, a student studying Computer Science at the University of the Philippines -
        Visayas. I am someone who’s passionate when it comes to accessible and open-source
        technologies and the belief that computer science as a field should be used for the 
        benefit and perpetuation of the human race.
        <br/> <br/>
        As a student developer, I push myself to create tools that not only function as intended 
        but are easy, convenient and fun for the user. I hope to continue learning and honing 
        my skills moving forward.
        <br/> <br/>
        <p className="text-lg text-gray-400 mt-1.25 text-center m-3">"Full-stack development for the people, by the people."</p>
        </p>
        <img src="/src/public/image.png" alt="Picture" className="w-7/20 h-auto z-0 shrink-0 -top-50 relative object-cover pointer-events-none" />
      </div>
      
      </div>
    </div>
    );
}

export default IntroBlock;