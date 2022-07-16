import { Container, Row, Button } from 'react-bootstrap';


const thisYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer fixed-bottom bg-dark text white pb-3">
            <Row className="d-flex justify-content-center">
                <Button
                    variant="warning"
                    size="lg"
                    className="d-lg-none d-inline-block"
                    data-bs-toggle="modal"
                    data-bs-target="#modalFormNewRecord"
                >
                    Create Record
                </Button>
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