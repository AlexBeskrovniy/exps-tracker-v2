import { useState } from 'react';
import ModalWrapper from './ModalWrapper';
import LoginForm from '../forms/LoginForm';

const ModalLogin = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <ModalWrapper 
            form={<LoginForm  handleClose={handleClose} />}
            btnTitle="Sign In"
            btnVariant="outline-warning"
            btnSize="lg"
            btnClassList="ms-2"
            modalTitle="Login to Your Profile"
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
        />
    );
}

export default ModalLogin;