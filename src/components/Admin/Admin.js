import SideBar from "./SideBar"
import "./Admin.scss"

const Admin = (props) => {
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar />
            </div>
            <div className="admin-content">
                Admin component
            </div>
        </div>
    )
}
export default Admin