import ModalCreateUser from "./ModalCreateUser"
import "./ManageUser.scss"
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from '../../../services/apiService'

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [listUser, setListUser] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        fetchListUser()
    }, []);

    const fetchListUser = async () => {
        let res = await getAllUser()
        console.log(res)
        if(res.EC === 0){
            setListUser(res.DT)
        }
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage user
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}><FcPlus /> Add new user</button>
                </div>
                <div className="table-user-container">
                    <TableUser listUser={listUser}/>
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUser={fetchListUser}
                />
            </div>
        </div>
    )
}
export default ManageUser