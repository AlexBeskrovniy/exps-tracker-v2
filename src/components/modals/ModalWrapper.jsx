import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalWrapper = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                variant="outline-warning"
                size="lg"
                className="mt-3 mt-sm-0 ms-2"
                onClick={handleShow}
            >
                { props.btnTitle }
            </Button>

            <Modal show={show} onHide={handleClose} centered contentClassName="modal-window bg-dark mx-auto">
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title className="text-white">
                        { props.modalTitle }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { props.form }
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalWrapper;