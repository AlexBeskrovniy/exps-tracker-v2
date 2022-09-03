import { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import ModalWrapper from '../modals/ModalWrapper';
import RecordForm from '../forms/RecordForm';

const RecordCard = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <Card.Footer className="border-white">
            <Row className="d-flex justify-content-between align-items-center text-center">
                <Col xs={4} lg={2} className="fs-5 text-white mx-auto">
                    {new Date(props.createdAt).toDateString()}
                </Col>
                <Col xs={4} lg={2} className="fs-5 text-white mx-auto">
                    {props.categoryName}
                </Col>
                <Col xs={4} lg={2} className="fs-3 mx-auto spent">
                    {props.money}
                </Col>
                <Col lg={5} className="fs-5 text-white mt-lg-0 mx-auto">
                    {props.description}
                </Col>
                <Col lg={1} className="d-grid fs-5 text-white mt-lg-0 mx-auto">
                    <ModalWrapper 
						form={<RecordForm 
                                type="Edit"
                                dataMoney={props.money}
                                dataCategoryName={props.categoryName}
                                dataDescription={props.description}
                                dataId={props.id}
                                dataCreatedAt={props.createdAt}
                                handleClose={handleClose}
                            />}
						btnTitle="Edit record"
                        btnVariant="warning"
                        btnSize="md"
						modalTitle="Edit this Record"
                        show={show}
                        handleShow={handleShow}
                        handleClose={handleClose}
					/>
                </Col>
            </Row>
        </Card.Footer>

    );
}

export default RecordCard;