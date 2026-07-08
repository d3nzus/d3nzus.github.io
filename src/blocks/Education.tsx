import EducationCard from "../components/EducationCard";

function Education() {
    return (
        <div className="container mx-auto top-10 relative align-middle justify-center">
            <h1 className="text-4xl font-bold text-white my-10 text-left">I STUDIED:</h1>
            <EducationCard degree="Bachelor of Science in Computer Science" school="University of the Philippines - Visayas" duration="2024 - now" />
            <EducationCard degree="Specialization Years Program - CS Elective" school="Philippine Science High School - Western Visayas Campus in Iloilo City" duration="2022 - 2024" />
        </div>
    );
}

export default Education;