import ModalCreateUser from "./ModalCreateUser"
import "./ManageUser.scss"
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from '../../../services/apiService'
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [listUser, setListUser] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});

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

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
    }

    const resetUpdateData = () => {
        setDataUpdate()
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
                    <TableUser 
                        listUser={listUser}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                    />
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUser={fetchListUser}
                />
                <ModalUpdateUser 
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUser={fetchListUser}
                    resetUpdateData={resetUpdateData}
                />
            </div>
        </div>
    )
}
export default ManageUser