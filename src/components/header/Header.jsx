import { Container } from 'react-bootstrap';
import Logo from './Logo';
import Nav from './Nav';
import Total from './Total';
import ModalWrapper from '../modals/ModalWrapper';
import RecordForm from '../forms/RecordForm';

const Header = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <Container>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <Logo />

                    <Nav />

                    <Total />

                    <ModalWrapper 
						form={<RecordForm type="Submit" />}
						btnTitle="Create Record"
						modalTitle="Create a new Record" 
					/>
                    
                </div>
            </Container>
        </header>
    );
}

export default Header;