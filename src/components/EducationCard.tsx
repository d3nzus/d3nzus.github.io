function EducationCard({ degree, school, duration }: { degree: string; school: string; duration: string }) {
    return (
        <div className="bg-gray-500 rounded-4xl w-3/4 h-fit mx-auto p-5 my-2 flex flex-col align-baseline justify-start">
            <p className="text-white text-xl">{degree}</p>
            <p className="text-white text-md">{school}</p>
            <p className="text-white text-sm">{duration}</p>
        </div>
    );
}

export default EducationCard;