import { Row, Form, Button, FloatingLabel } from 'react-bootstrap';

const CategoryForm = (props) => {
    return (

        <Form type={props.type}>
            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="New Category"
                    required
                />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingTextarea"
                label="Description"
                className="mb-3"
            >
                <Form.Control
                    as="textarea"
                    name="description"
                    placeholder="Description"
                />
            </FloatingLabel>
            <Row className="px-2">
                <Button
                    variant="outline-warning"
                    size="lg"
                    type="submit"
                >
                    {props.type}
                </Button>
            </Row>
        </Form>

    );
}

export default CategoryForm;