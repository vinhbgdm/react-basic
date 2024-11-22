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
        this.props.handleAddNewInfo({
            id: Math.floor((Math.random() * 100) + 1) + 'rd',
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        });
    }

    render() {
        // let childsList = this.props.arrChilds
        let {arrChilds} = this.props
        return(
            <div>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)}/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)}/><br/>
                    <label htmlFor="age">Age:</label><br/>
                    <input type="text" value={this.state.age} onChange={(event) => this.handleChangeAge(event)}/><br/>
                    <input type="submit" value="Add" onClick={(event) => this.handleSubmit(event)}/>
                </form>
                Add child component: {this.state.firstName} - {this.state.lastName} - {this.state.age}
                <div className="childs-list">
                    {
                        arrChilds.map((item, index) => {
                            return (
                                <div key={item.id} className="info-item">
                                    {item.id} - {item.firstName} - {item.lastName} - {item.age}
                                    <button onClick={() => this.props.handleDeleteInfo(item.id)}>X</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ChildComponent;