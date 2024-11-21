import React from "react";      
import ChildComponent from "./ChildComponent";
import InforComponent from "./InforComponent";

class MyComponent extends React.Component{
    state = {
        firstName: "MyComponent",
        lastName: "MyComponent",
        age: "MyComponent",
        arrJobs:[
            {id: '1', title: 'Java Developers', salary:'500$'},
            {id: '2', title: 'React Tester', salary:'600$'},
            {id: '3', title: 'Python BA', salary:'700$'}
        ]
    }
    
    render() {
        return(
            <div>
                <ChildComponent/>
                <InforComponent
                    name={this.state.firstName}
                    age={this.state.age}
                    address={'Bắc Giang'}
                    arrJobs={this.state.arrJobs}
                />
            </div>
        )
    }
}

export default MyComponent;