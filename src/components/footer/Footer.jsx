import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ModalWrapper from '../modals/ModalWrapper';
import RecordForm from '../forms/RecordForm';

const thisYear = new Date().getFullYear();

const Footer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <footer className="footer fixed-bottom bg-dark text white pb-3">
            <Row className="d-flex justify-content-center">
                <ModalWrapper 
                    form={<RecordForm type="Submit" handleClose={handleClose} />}
                    btnTitle="Create Record"
                    btnVariant="warning"
                    btnSize="lg"
                    btnClassList="d-lg-none d-inline-block"
                    modalTitle="Create a new Record"
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
				/>
            </Row>
            <Container>
                <div className="d-flex flex-wrap align-items-center justify-content-around pt-3">
                    <div>
                        <p className="text-white mb-0">Expenses Tracker version: 2.0.0.</p>
                    </div>
                    <div>
                        <p className="text-white mb-0">
                            All rights reserved - {thisYear}
                        </p>
                    </div>
                    <div>
                        <a href="https://github.com/AlexBlacksmith/exps-tracker-v2" target="_blank" className="nav-link text-white p-0">GitHub Repo.</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;