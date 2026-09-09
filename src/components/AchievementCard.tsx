function AchievementCard() {
  return (
    <div className="bg-gray-500 rounded-4xl w-[90%] sm:w-3/4 h-fit mx-auto p-5 sm:p-7 my-10 flex flex-col gap-4 align-middle justify-center">
      <img src="/achievement-images/Achievement1.png" alt="achievement" className="h-1/2 w-fill object-fill" />
      <div className="flex flex-col align-baseline w-full">
        <h1 className="text-xl text-white mt-4 text-left">Champion at Quantum Computing and Cybersecurity CTF Hackathon 2026 </h1>
        <p className="text-sm text-gray-300 mt-2 text-left">
          Our team successfully won the championship title in Quantum Computing and Cybersecurity CTF Hackathon 2026 at UPV Iloilo, scoring a total of 165 points.
        </p>

      </div>
    </div>
  );
}

export default AchievementCard;
