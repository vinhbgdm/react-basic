import React from "react";      
import ChildComponent from "./ChildComponent";
import InfoComponent from "./InfoComponent";

class MyComponent extends React.Component{
    state = {
        firstName: "Component1",
        lastName: "Component1",
        age: "25",
        address: 'Bắc Giang',
        arrJobs:[
            {id: '1', title: 'Java Developer', salary:'500'},
            {id: '2', title: 'React Tester', salary:'600'},
            {id: '3', title: 'Python BA', salary:'700'}
        ],
        arrChilds:[
            {id: '1', firstName: 'Vinh', lastName: 'Vinh', age: '23'},
            {id: '2', firstName: 'Lê', lastName: 'Ngọc', age: '22'},
            {id: '3', firstName: 'Kim', lastName: 'Tuyến', age: '22'}
        ]
    }

    handleAddNewInfo = (childObj) => {
        this.setState({
            arrChilds: [childObj, ...this.state.arrChilds]
        })
    }

    handleDeleteInfo = (infoId) => {
        let listInfoClone = this.state.arrChilds
        listInfoClone = listInfoClone.filter(item => item.id !== infoId)
        this.setState({
            arrChilds: listInfoClone
        })
    }
    
    render() {
        return(
            <>
                <ChildComponent
                    handleAddNewInfo = {this.handleAddNewInfo}
                    handleDeleteInfo = {this.handleDeleteInfo}
                    arrChilds = {this.state.arrChilds}
                />
                <InfoComponent
                    name = {this.state.firstName}
                    age = {this.state.age}
                    address = {this.state.address}
                    arrJobs = {this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;