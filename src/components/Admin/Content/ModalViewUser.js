import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash'

const ModalViewUser = (props) => {
    const {show, setShow, dataUpdate} = props;

    const handleClose = () => {
        setShow(false);
        props.resetUpdateData();
    };
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        if(!_.isEmpty(dataUpdate)){
            if(dataUpdate.image){
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
            }
        }
    }, [dataUpdate])

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
                size='xl'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email:</label>
                            <b><br />{dataUpdate && dataUpdate.email ? dataUpdate.email : ""}</b>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password: </label>
                            <b><br />*******</b>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username:</label>
                            <b><br />{dataUpdate && dataUpdate.username ? dataUpdate.username : ""}</b>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role: </label>
                            <b><br />{dataUpdate && dataUpdate.role ? dataUpdate.role : ""}</b>
                        </div>
                        <label className="form-label">Image: </label>
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
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewUser