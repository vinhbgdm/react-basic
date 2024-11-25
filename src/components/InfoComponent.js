import { useState } from "react";      
import "../styles/DisplayInfo.scss"
import logo from "../views/logo.svg"

const InfoComponent = (props) => {
    const {name, age, address, arrJobs} = props;
    const [isShowListUser, setShowHideList] = useState(true);
    const handleShowHide = () => {
        setShowHideList(!isShowListUser)
    }
    return(
        <div className="display-info">
            ---------------------------------------------------------------------------------------------------------------------------<br/>
            <img src={logo} alt=""/>
            <div>
                <input type="submit" value={isShowListUser === true ? "Hide list user" : "Show list user"} onClick={() => handleShowHide()} />
            </div>
            { isShowListUser &&
            <div className="jobsList">
                Info component: {name} - {age} - {address}
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

export default InfoComponent;