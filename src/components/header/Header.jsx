import { useState } from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import Logo from './Logo';
import Nav from './Nav';
import Total from './Total';
import ModalWrapper from '../modals/ModalWrapper';
import RecordForm from '../forms/RecordForm';

import { useAuthContext } from "../../providers/AuthProvider";
import { useDataContext } from '../../providers/DataProvider';

const Header = () => {
    const { user, onLogOut } = useAuthContext();
    const { useClearData } = useDataContext();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logOutAndClearData = () => {
        onLogOut();
        useClearData();
    }

    return (
        <header className="p-3 bg-dark text-white">
            <Container>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <Logo />
                    
                    {user && (
                        <>
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

                            <Dropdown className="mx-4">
                                <Dropdown.Toggle variant="outline-warning" size="lg" className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person mx-1" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    </svg>
                                    <span>{ user.name }</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant="dark">
                                    <Dropdown.Item onClick={logOutAndClearData}>
                                        Log Out
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </>
                    )}
                </div>
            </Container>
        </header>
    );
}

export default Header;