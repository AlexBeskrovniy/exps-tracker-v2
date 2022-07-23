import { Row, Form, Button, FloatingLabel } from 'react-bootstrap';
import { useRef } from 'react';

const CategoryForm = (props) => {
    const nameRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = () => {
        const data = 
        {
            name: nameRef.current.value,
            description: descriptionRef.current.value
        }
        console.log(data);
        props.handleClose();
    }

    const handleDelete = () => {
        console.log("Deleted");
        props.handleClose();
    }

    return (
        <>
            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    ref={nameRef}
                    defaultValue={props.dataName}
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
                    ref={descriptionRef}
                    defaultValue={props.dataDescription}
                />
            </FloatingLabel>
            <Row className="d-flex justify-content-between px-2">
                <Button
                    variant="outline-warning"
                    size="lg"
                    onClick={handleSubmit}
                >
                    {props.type}
                </Button>
               { props.type === "Edit" &&
                    <Button
                        variant="outline-warning"
                        size="lg"
                        className="mt-2"
                        onClick={handleDelete}
                >
                        Delete
                    </Button>
                }
            </Row>
        </>

    );
}

export default CategoryForm;