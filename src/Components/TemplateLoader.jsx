import { useState } from "react"

export default function TemplateLoader({
    personalInfo, 
    setPersonalInfo
}){


    function handleFormChange(e){
        const {name, value} = e.target
        setPersonalInfo(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return(
        <div className="templateLoader">
            <h1>Personal Details</h1>
            <form>
                <label>
                    Full Name
                    <input 
                        type="text"
                        name="fullName"
                        value={personalInfo.fullName}
                        onChange={handleFormChange}
                        placeholder="First and Lastname"
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={personalInfo.email}
                        onChange={handleFormChange}
                        placeholder="Enter your email" 
                    />
                </label>
                <label>
                    Phone number
                    <input 
                        type="text"
                        name="phoneNumber"
                        value={personalInfo.phoneNumber}
                        onChange={handleFormChange}
                        placeholder="+31 6 12345678"
                    />
                </label>
                <label>
                    Address
                    <input 
                        type="text"
                        name="address"
                        value={personalInfo.address}
                        onChange={handleFormChange}
                        placeholder="City, Country"
                    />
                </label>
            </form>
        </div>
    )
}