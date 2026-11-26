function EducationCard({ degree, school, duration }: { degree: string; school: string; duration: string }) {
    return (
        <div className="bg-gray-500 rounded-4xl w-3/4 h-fit mx-auto p-5 my-2 flex flex-col align-baseline justify-start animate-fade-in">
            <h3 className="text-white text-xl">{degree}</h3>
            <hr className="my-2 border-0 border-t border-gray-300/50" />
            <p className="text-white text-base">{school}</p>
            <p className="text-white text-sm">{duration}</p>
        </div>
    );
}

export default EducationCard;