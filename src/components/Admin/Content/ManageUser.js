import ModalCreateUser from "./ModalCreateUser"
import "./ManageUser.scss"
const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage user
            </div>
            <div className="user-content">
                <ModalCreateUser />
                <div className="">
                    Table user
                </div>
            </div>
        </div>
    )
}
export default ManageUser