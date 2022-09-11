import { useState } from 'react';
import ModalWrapper from './ModalWrapper';
import RegistrationForm from '../forms/RegistrationForm';

const ModalRegistration = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <ModalWrapper 
            form={<RegistrationForm  handleClose={handleClose} />}
            btnTitle="Sign Up"
            btnVariant="warning"
            btnSize="lg"
            btnClassList="ms-2"
            modalTitle="Create Your Profile"
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
        />
    );
}

export default ModalRegistration;