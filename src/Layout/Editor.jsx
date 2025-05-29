import Experience from "../Components/Experience";
import Education from "../Components/Education";
import TemplateLoader from "../Components/TemplateLoader";


export default function Editor({
    schools,
    setSchools,
    experiences,
    setExperiences,
    personalInfo,
    setPersonalInfo
}){

    return (
        <div className="left">
            <TemplateLoader 
                personalInfo={personalInfo}
                setPersonalInfo={setPersonalInfo}
            />
            <Education 
                schools={schools}
                setSchools={setSchools}
            />
            <Experience 
                experiences={experiences}
                setExperiences={setExperiences}
            />
        </div>
    )
}