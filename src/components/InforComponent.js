import React from "react";      

class InforComponent extends React.Component{
    render(){
        let {name, age, address, arrJobs} = this.props
        return(
            <div className="jobsList">
                Infor component: {name} - {age} - {address}
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
        )
    }
}

export default InforComponent;