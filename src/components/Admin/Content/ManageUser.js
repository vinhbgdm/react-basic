import ModalCreateUser from "./ModalCreateUser"

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage user
            </div>
            <div className="user-content">
                <button>Add new user</button>
                <div className="">
                    Table user
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}
export default ManageUser