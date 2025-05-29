import Editor from "./Layout/Editor.jsx"
import Content from "./Layout/Content.jsx"
import { useState } from "react";

import "../styles/App.css"


function App() {
  const [schools, setSchools] = useState([
      {
        id: 1,
        school: "Damstede", 
        degree: "VWO",
        startDate: "09-2015",
        endDate: "06-2021",
        location: "Amsterdam"
      }
  ]);
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      companyName: "Hellofresh",
      positionTitle: "Courier",
      startDate: "10-2024",
      endDate: "present",
      location: "Diemen, Amsterdam",
      description: "Delivering Packages"
    }
  ]);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Karim Ajrir",
    email: "ajrir_karim@outlook.com",
    phoneNumber: "+31 6 57523167",
    address: "Amsterdam, The Netherlands"
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
