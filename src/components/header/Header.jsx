import Logo from './Logo';
import Nav from './Nav';
import Total from './Total';
import CreateButton from '../details/Button';

const Header = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <Logo />

                    <Nav />

                    <Total />

                    <CreateButton
                        variant="outline-warning"
                        size="lg"
                        title = "Create Record"
                        classes="d-none d-lg-inline-block"
                        toggle="modal"
                        modalId="#modalFormNewRecord"
                    />
                    
                </div>
            </div>
        </header>
    );
}

export default Header;