import React from "react";      

class MyComponent extends React.Component{
    state = {
        name: "vinhbgdm",
        channel: "Vinh Youtube"
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        let name = "Vinh BG";
        return(
            <div>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                </div>
                <div className="second">
                    {console.log('My name is', name)}
                    Hello {this.state.name}, 
                    Hello {this.state.channel}
                </div>
            </div>
        )
    }
}

export default MyComponent;