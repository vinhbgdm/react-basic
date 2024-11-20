import React from "react";      

class MyComponent extends React.Component{
    state = {
        firstName: "",
        lastName: ""
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
            </div>
        )
    }
}

export default MyComponent;