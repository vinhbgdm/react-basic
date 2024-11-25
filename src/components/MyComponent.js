import React, { useState } from "react";      
import ChildComponent from "./ChildComponent";
import InfoComponent from "./InfoComponent";

const MyComponent = (props) => {
    const [listUser, setlistUser] = useState([
        {id: '1', firstName: 'Ninh', lastName: 'Vinh', age: '23'},
        {id: '2', firstName: 'Lê', lastName: 'Ngọc', age: '22'},
        {id: '3', firstName: 'Kim', lastName: 'Tuyến', age: '22'}
    ]);
    const [firstName] = useState("NĐV");
    const [age] = useState("23");
    const [address] = useState("BG");
    const [arrJobs] = useState([
        {id: '1', title: 'Java Developer', salary:'500'},
        {id: '2', title: 'React Tester', salary:'600'},
        {id: '3', title: 'Python BA', salary:'700'}
    ]);

    const handleAddNewInfo = (childObj) => {
        setlistUser([childObj, ...listUser])
    }

    const handleDeleteInfo = (infoId) => {
        let listInfoClone = listUser
        listInfoClone = listInfoClone.filter(item => item.id !== infoId)
        setlistUser(listInfoClone)
    }
    
    return(
        <>
            <ChildComponent
                handleAddNewInfo = {handleAddNewInfo}
                handleDeleteInfo = {handleDeleteInfo}
                arrChilds = {listUser}
            />
            <InfoComponent
                name = {firstName}
                age = {age}
                address = {address}
                arrJobs = {arrJobs}
            />
        </>
    )
}

export default MyComponent;