import AchievementCard from "../components/AchievementCard";

function Achievements() {
    return(
         <div className="container mx-auto top-10 relative align-middle justify-center">
            <h1 className="text-4xl font-bold text-white my-10 text-left">MY LATEST ACHIEVEMENTS</h1>
            <AchievementCard />
        </div>
    );
}

export default Achievements;