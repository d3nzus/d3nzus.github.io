import AchievementCard from "../components/AchievementCard";

function Achievements() {
    return(
         <section aria-labelledby="achievements-title" className="container mx-auto top-10 relative align-middle justify-center">
            <h2 id="achievements-title" className="text-4xl font-bold text-white my-10 text-left">MY LATEST ACHIEVEMENTS</h2>
            <AchievementCard />
        </section>
    );
}

export default Achievements;