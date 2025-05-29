import { useRef, useState } from "react"


export default function Experience({
    experiences,
    setExperiences
}){
    const nextId = useRef(2)
    
    const [isAdding, setIsAdding] = useState(false)
    const [form, setForm] = useState({
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        location: "",
        description: ""
    })
    const [editingIndex, setEditingIndex] = useState(null)

    function handleFormChange(e) {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value
        });
      }

    function handleAddSchool(){
        setIsAdding(true)
        setEditingIndex(null);
    }

    function handleEditWork(index){
        setForm(experiences[index]);
        setIsAdding(true);
        setEditingIndex(index);
    }

    function Work({work, index}){
        return(
            <button onClick={() => handleEditWork(index)} className="school">
                <p>{work.companyName}</p>
            </button>
        )
    }

    function handleSave(){
        if (editingIndex !== null) {
            setExperiences(prev => {
              const updated = [...prev];
              updated[editingIndex] = form;
              return updated;
            });
        } else {
            if(form.companyName){
                setExperiences(prev => [...prev, {id: nextId.current++, ...form}])
            }
        }

        setForm({
            companyName: "",
            positionTitle: "",
            startDate: "",
            endDate: "",
            location: "",
            description: ""
        })
        setIsAdding(false)
        setEditingIndex(null);
    }
    console.log(experiences)

    function handleDelete(e, index){
        e.preventDefault()
        if(index === null) return (
            setIsAdding(false)

        )
        setExperiences(prev => {
            const piece1 = prev.slice(0, index);
            const piece2 = prev.slice(index + 1)
            return [...piece1, ...piece2];
          });

        setForm({
            companyName: "",
            positionTitle: "",
            startDate: "",
            endDate: "",
            location: "",
            description: ""
        })
        setIsAdding(false)
        setEditingIndex(null);
    }


    return(
        <div className="templateLoader education">
            <h1>Experiences</h1>

            {isAdding ? (
               <form className="addSchoolForm">
                    <label>
                        <p>Company Name <i style={{fontWeight: 0, fontSize: 'small'}}>(required)</i></p>
                        <input
                            name="companyName"
                            value={form.companyName}
                            onChange={handleFormChange}
                            placeholder="Enter Company Name"
                        />
                    </label>
                    <label>
                        Position Title
                        <input
                            name="positionTitle"
                            value={form.positionTitle}
                            onChange={handleFormChange}
                            placeholder="Enter Position Title"
                        />
                    </label>
                    <label>
                        Start Date
                        <input
                            name="startDate"
                            value={form.startDate}
                            onChange={handleFormChange}
                            placeholder="Enter Start Date"
                        />
                    </label>
                    <label>
                        End Date
                        <input
                            name="endDate"
                            value={form.endDate}
                            onChange={handleFormChange}
                            placeholder="Enter End Date"
                        />
                    </label>
                    <label>
                        Location
                        <input
                            name="location"
                            value={form.location}
                            onChange={handleFormChange}
                            placeholder="Enter Location"
                        />
                    </label>
                    <label>
                        Description
                        <input
                            name="description"
                            value={form.description}
                            onChange={handleFormChange}
                            placeholder="Enter Description"
                        />
                    </label>
                    <div className="wrapperBtn">
                        <button className="deleteBtn" onClick={(e) => handleDelete(e, editingIndex)}>Delete</button>
                        <button className="saveBtn" onClick={handleSave}>Save</button>
                    </div>
                </form>)
            
            
            : 
            
            (<div className="educationSection">
                {experiences.map((work,index) => {
                    return <Work key={work.id} work={work} index={index}/>
                })}
                <div className="wrapperBtn">
                    <button className="educateBtn" onClick={handleAddSchool}>+ Experience</button>
                </div>
            </div>)
            }
        </div>
    )
}