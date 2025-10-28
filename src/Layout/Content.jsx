



export default function Content({
    schools,
    experiences,
    personalInfo
}){
    const data = schools
    const data1 = experiences 

    return(
        <div className="right">
            <div className="headWrapper">
                <header className="header">
                    <h1>{personalInfo.fullName}</h1>
                    <div className="subInformation">
                        <p>{personalInfo.email}</p>
                        <p>{personalInfo.phoneNumber}</p>
                        <p>{personalInfo.address}</p>
                    </div>
                </header>
                <main>
                    <div className="wrapperMain">
                        {schools.length > 0 &&
                        <div className="educationContentSection">
                            <div className="hrLine">Education</div>
                            <div className="schoolsContent">
                            {data.map((school, index) => {
                                return(
                                    <div key={index} className="schoolContent">
                                        <div className="dateAndLocation">
                                            <p>{`${school.startDate} - ${school.endDate}`}</p>
                                            <p>{school.location}</p>
                                        </div>
                                        <div className="studyInfo">
                                            <p><strong>{school.school}</strong></p>
                                            <p>{school.degree}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                        }
                        {experiences.length > 0 && 
                        <div className="experienceContentSection">
                            <div className="hrLine">Experience</div>
                            <div className="schoolsContent">
                            {data1.map((work, index) => {
                                return(
                                    <div key={index} className="schoolContent">
                                        <div className="dateAndLocation">
                                            <p>{`${work.startDate} - ${work.endDate}`}</p>
                                            <p>{work.location}</p>
                                        </div>
                                        <div className="studyInfo">
                                            <p><strong>{work.companyName}</strong></p>
                                            <p>{work.positionTitle}</p>
                                            <p>{work.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                        }
                    </div>
                </main>

            </div>
        </div>
    )
}