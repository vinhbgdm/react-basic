import React, { useEffect, useState } from "react";      

const ChildComponent = (props) => {
    const {arrChilds} = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const handleChangeLastName = (event) => {
        setLastName(event.target.value)
    }
    const handleChangeAge = (event) => {
        setAge(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleAddNewInfo({
            id: Math.floor((Math.random() * 100) + 1) + 'rd',
            firstName: firstName,
            lastName: lastName,
            age: age
        });
    }
    console.log("Call render")
    useEffect(() => {
        console.log("Call useEffect")
        setTimeout(() => {
            document.title = "VinhBGDM"
        }, 3000)
    }, [arrChilds])
    return(
        <div>
            <form>
                <label htmlFor="fname">First name:</label><br/>
                <input type="text" value={firstName} onChange={(event) => handleChangeFirstName(event)}/><br/>
                <label htmlFor="lname">Last name:</label><br/>
                <input type="text" value={lastName} onChange={(event) => handleChangeLastName(event)}/><br/>
                <label htmlFor="age">Age:</label><br/>
                <input type="text" value={age} onChange={(event) => handleChangeAge(event)}/><br/>
                <input type="submit" value="Add" onClick={(event) => handleSubmit(event)}/>
            </form>
            Add child component: {firstName} - {lastName} - {age}
            <div className="childs-list">
                {
                    arrChilds.map((item, index) => {
                        return (
                            <div key={item.id} className="info-item">
                                {item.id} - {item.firstName} - {item.lastName} - {item.age}
                                <button onClick={() => props.handleDeleteInfo(item.id)}>X</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ChildComponent;