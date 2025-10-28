import Editor from "./Layout/Editor.jsx"
import Content from "./Layout/Content.jsx"
import { useState } from "react";

import "../styles/App.css"


function App() {
  const [schools, setSchools] = useState([
      {
        id: 1,
        school: "Oxford University", 
        degree: "University",
        startDate: "09-2015",
        endDate: "06-2021",
        location: "England"
      }
  ]);
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      companyName: "Apple",
      positionTitle: "Medior Full-stack developer",
      startDate: "10-2024",
      endDate: "present",
      location: "LA, California",
      description: "Writing excellent code to up this firm."
    }
  ]);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Steve Jobs",
    email: "steve_jobs@apple.com",
    phoneNumber: "+1 213-1234567",
    address: "Los Angeles, California, United States"
  });

  return (
    <div className="layout">
      <Editor 
        schools={schools}
        setSchools={setSchools}
        experiences={experiences}
        setExperiences={setExperiences}
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <Content 
        schools={schools}
        experiences={experiences}
        personalInfo={personalInfo}

      />
    </div>
  )
}

export default App
