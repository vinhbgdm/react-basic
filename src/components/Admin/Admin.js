import SideBar from "./SideBar"
import "./Admin.scss"
import { Outlet } from "react-router-dom";

const Admin = (props) => {
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar />
            </div>
            <div className="admin-content">
                <div className="admin-haeder">
                    
                </div>
                <div className="admin-main">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Admin