import { Modal, Button } from 'react-bootstrap';

const ModalWrapper = (props) => {

    return (
        <>
            <Button
                variant={props.btnVariant}
                size={ props.btnSize }
                className={props.btnClassList}
                onClick={props.handleShow}
            >
                { props.btnTitle }
            </Button>

            <Modal show={props.show} onHide={props.handleClose} centered contentClassName="modal-window bg-dark mx-auto">
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