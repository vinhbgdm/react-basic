import React from "react";      
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component{
    state = {
        firstName: "",
        lastName: "",
        arrJobs:[
            {id: '1', title: 'Java Developers', salary:'500$'},
            {id: '2', title: 'React Tester', salary:'600$'},
            {id: '3', title: 'Python BA', salary:'700$'}
        ]
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alert("Click me")
    }
    render() {
        return(
            <div>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)}/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)}/><br/><br/>
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)}/>
                </form>

                <ChildComponent 
                    name={this.state.firstName}
                    age={'23'}
                    address={'Bắc Giang'}
                    arrJobs={this.state.arrJobs}
                />
            </div>
        )
    }
}

export default MyComponent;