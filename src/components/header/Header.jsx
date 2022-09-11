import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Logo from './Logo';
import Nav from './Nav';
import Total from './Total';
import ModalWrapper from '../modals/ModalWrapper';
import RecordForm from '../forms/RecordForm';
import ModalRegistration from '../modals/ModalRegistration';
import ModalLogin from '../modals/ModalLogin';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className="p-3 bg-dark text-white">
            <Container>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <Logo />

                    <Nav />

                    <Total />

                    <ModalWrapper 
						form={<RecordForm type="Submit" handleClose={handleClose} />}
						btnTitle="Create Record"
                        btnVariant="outline-warning"
						btnSize="lg"
                        btnClassList="d-none d-lg-inline-block"
						modalTitle="Create a new Record"
                        show={show}
                        handleShow={handleShow}
                        handleClose={handleClose}
					/>
                    
                    <ModalRegistration />
                    <ModalLogin />
                </div>
            </Container>
        </header>
    );
}

export default Header;