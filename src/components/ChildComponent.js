import React from "react";      

class ChildComponent extends React.Component{
    state = {
        firstName: "",
        lastName: "",
        age: "",
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
    handleChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alert("Click me")
    }

    render() {
        // let name = this.props.name
        // let age = this.props.age
        return(
            <div>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)}/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)}/><br/>
                    <label htmlFor="age">Age:</label><br/>
                    <input type="text" value={this.state.age} onChange={(event) => this.handleChangeAge(event)}/><br/>
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)}/>
                </form>
                Child component: {this.state.firstName} - {this.state.lastName} - {this.state.age}
            </div>
        )
    }
}

export default ChildComponent;