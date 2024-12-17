import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import { toast } from 'react-toastify';
import {putUpdateNewUser} from '../../../services/apiService'
import _ from 'lodash'

const ModalUpdateUser = (props) => {
    const {show, setShow, dataUpdate} = props;

    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setImage("");
        setPreviewImage("");
        props.resetUpdateData();
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        if(!_.isEmpty(dataUpdate)){
            setEmail(dataUpdate.email);
            setUsername(dataUpdate.username);
            setRole(dataUpdate.role);
            setImage("");
            if(dataUpdate.image){
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
            }
        }
    }, [dataUpdate, props.dataUpdate])

    const handleUploadImage = (event) => {
        if(event.target && event.target.files && event.target.files[0]){
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        } else {
            // setPreviewImage("")
        }
    }

    const handleSubmitCreateUser = async () => {
        if(!username) {
            toast.error('Invalid username')
            return
        }
        
        let data = await putUpdateNewUser(dataUpdate.id, username, role, image);

        if(data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await props.fetchListUser()
        }
        if(data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='xl'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} disabled onChange={(event) => setEmail(event.target.value)}/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            
                            <input type="password" className="form-control" value={password} disabled onChange={(event) => setPassword(event.target.value)}/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" onChange={(event) => setRole(event.target.value)} value={role}>
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label lable-upload" htmlFor='fileUpload'><FcPlus /> Upload File Image</label>
                            <input type="file" id='fileUpload' hidden onChange={(event) => handleUploadImage(event)}/>
                        </div>
                        <div className="col-md-12 image-preview">
                            {
                                // eslint-disable-next-line jsx-a11y/alt-text
                                previewImage ? <img src={previewImage} />
                                : <span>Preview Image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser