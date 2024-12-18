import ModalCreateUser from "./ModalCreateUser"
import "./ManageUser.scss"
import { FcPlus } from "react-icons/fc";
import { useEffect, useState } from "react";
import { getAllUser, getAllUserWithPaginate } from '../../../services/apiService'
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
    const LIMIT_USER = 2;
    const [pageCount, setPageCount] = useState(0);

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const [listUser, setListUser] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        // fetchListUser();
        fetchListUserWithPaginate(1);
    }, []);

    const fetchListUser = async () => {
        let res = await getAllUser()
        if(res.EC === 0){
            setListUser(res.DT)
        }
    }

    const fetchListUserWithPaginate = async (page) => {
        let res = await getAllUserWithPaginate(page, LIMIT_USER)
        if(res.EC === 0){
            setListUser(res.DT.users)
            setPageCount(res.DT.totalPages)
            console.log('data: ', res.DT)
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
    }

    const resetUpdateData = () => {
        setDataUpdate()
    }

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true)
        setDataUpdate(user)
    }

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true)
        setDataUpdate(user)
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
                    {/* <TableUser 
                        listUser={listUser}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}
                    <TableUserPaginate 
                        listUser={listUser}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUserWithPaginate={fetchListUserWithPaginate}
                        pageCount={pageCount}
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
                <ModalViewUser 
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataUpdate={dataUpdate}
                    fetchListUser={fetchListUser}
                    resetUpdateData={resetUpdateData}
                />
                <ModalDeleteUser 
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataUpdate={dataUpdate}
                    fetchListUser={fetchListUser}
                />
            </div>
        </div>
    )
}
export default ManageUser