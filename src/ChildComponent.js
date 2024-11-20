import React from "react";      

class ChildComponent extends React.Component{
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
        // let name = this.props.name
        // let age = this.props.age

        let {name, age, address, arrJobs} = this.props
        return(
            <div>
                Child component: {name} - {age} - {address}
                <div className="jobsList">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
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