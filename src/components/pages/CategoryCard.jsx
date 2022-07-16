import { Row, Card, Button } from 'react-bootstrap';

const CategoryCard = (props) => {
    return (
        <Card bg="dark" text="white" data-category-div>
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
                    <Button
                        variant="outline-warning"
                        data-edit-button
                        data-bs-toggle="modal"
                        data-bs-target="#modalFormEditCategory">
                            Edit
                    </Button>
                </Row>
            </Card.Footer>
        </Card>
    );
}

export default CategoryCard;