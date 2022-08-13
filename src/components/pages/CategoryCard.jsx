import { useState } from 'react';
import { Row, Card } from 'react-bootstrap';
import  ModalWrapper  from '../modals/ModalWrapper';
import  CategoryForm  from '../forms/CategoryForm';

const CategoryCard = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card bg="dark" text="white">
            <Card.Header>
                <Card.Title className="fs-3">
                    { props.categoryName }
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Subtitle className="fs-4">Description</Card.Subtitle>
                <Card.Text>
                    { props.categoryDescription }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="py-3">
                <Row className="px-2">
                    <ModalWrapper 
						form={<CategoryForm 
                            type="Edit" 
                            dataName={ props.categoryName } 
                            dataDescription={ props.categoryDescription }
                            dataId={props.categoryId}
                            handleClose={handleClose}
                            />}
						btnTitle="Edit Category"
                        btnVariant="warning"
                        btnSize="md"
						modalTitle="Edit this Category"
                        show={show}
                        handleShow={handleShow}
                        handleClose={handleClose}
					/>
                </Row>
            </Card.Footer>
        </Card>
    );
}

export default CategoryCard;