import React from "react";      
import "../styles/DisplayInfo.scss"
import logo from "../views/logo.svg"

class InfoComponent extends React.Component{
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render(){
        let {name, age, address, arrJobs} = this.props
        console.log(arrJobs)
        return(
            <div className="display-info">
                ---------------------------------------------------------------------------------------------------------------------------<br/>
                <img src={logo} alt=""/>
                <div>
                    <input type="submit" value={this.state.isShowListUser ? "Hide list user" : "Show list user"} onClick={() => {this.handleShowHide()}} />  
                </div>

                { this.state.isShowListUser &&
                <div className="jobsList">
                    Infor component: {name} - {age} - {address}
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id} className={+item.salary > 600 ? "green" : "red"}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
                }
            </div>
        )
    }
}

export default InfoComponent;