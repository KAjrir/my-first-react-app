import { useRef, useState } from "react"

export default function Education({
    schools,
    setSchools
}){
    const nextId = useRef(2);

    const [isAdding, setIsAdding] = useState(false)
    const [form, setForm] = useState({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: ""
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

    function handleEditSchool(index) {
        setForm(schools[index]);
        setIsAdding(true);
        setEditingIndex(index);
      }
      

    function School({school, index}){
        return(
            <button onClick={() => handleEditSchool(index)} className="school">
                <p>{school.school}</p>
            </button>
        )
    }

    function handleSave(){
        if (editingIndex !== null) {
            setSchools(prev => {
              const updated = [...prev];
              updated[editingIndex] = form;
              return updated;
            });
          } else {
            if(form.school){
                setSchools(prev => [...prev, {id: nextId.current++, ...form}])
            }
        }
        setForm({
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: ""
        })
        setIsAdding(false)
        setEditingIndex(null);
    }

    function handleDelete(e, index){
        e.preventDefault()
        if(index  === null) return(
            setIsAdding(false)
        )
        setSchools(prev => {
            const piece1 = prev.slice(0, index);
            const piece2 = prev.slice(index + 1)
            return [...piece1, ...piece2];
          });

        setForm({
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: ""
        })
        setIsAdding(false)
        setEditingIndex(null);
    }

    console.log(schools)

    return(
        <div className="templateLoader education">
            <h1>Education</h1>

            {isAdding ? (
               <form className="addSchoolForm">
                    <label>
                        <p>School <i style={{fontWeight: 0, fontSize: 'small'}}>(required)</i></p>
                        <input
                            name="school"
                            value={form.school}
                            onChange={handleFormChange}
                            placeholder="Enter school / uiversity"
                        />
                    </label>
                    <label>
                        Degree
                        <input
                            name="degree"
                            value={form.degree}
                            onChange={handleFormChange}
                            placeholder="Enter Degree / Field Of Study"
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
                    <div className="wrapperBtn">
                        <button className="deleteBtn" onClick={(e) => handleDelete(e, editingIndex)}>Delete</button>
                        <button className="saveBtn" onClick={handleSave}>Save</button>
                    </div>
                </form>)
            
            
            : 
            
            (<div className="educationSection">
                {schools.map((school,index) => {
                    return <School key={school.id} school={school} index={index}/>
                })}
                <div className="wrapperBtn">
                    <button className="educateBtn" onClick={handleAddSchool}>+ Education</button>
                </div>
            </div>)
            }
        </div>
    )
}