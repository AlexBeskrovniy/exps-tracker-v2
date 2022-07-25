import { Row, Form, Button, FloatingLabel } from 'react-bootstrap';
import { useRef } from 'react';

const CategoryForm = (props) => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const idRef = useRef();

    const handleSubmit = async () => {
        const formData = 
        {
            name: nameRef.current.value,
            description: descriptionRef.current.value
        }
        console.log(JSON.stringify(formData));
        try {
            const res = await fetch('http://localhost:3001/api/categories/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            console.log(data); 
            props.handleClose();
        } catch (err) {
            console.error(err);
        }

    }

    const handleEdit = async () => {
        const formData = 
        {
            id: idRef.current.value,
            name: nameRef.current.value,
            description: descriptionRef.current.value
        }
        console.log(JSON.stringify(formData));
        try {
            const res = await fetch('http://localhost:3001/api/categories/edit', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            console.log(data); 
            props.handleClose();
        } catch (err) {
            console.error(err);
        }

    }

    const handleDelete = async () => {
        const formData = 
        {
            id: idRef.current.value,
        }
        console.log(JSON.stringify(formData));
        try {
            const res = await fetch('http://localhost:3001/api/categories/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            console.log(data); 
            props.handleClose();
        } catch (err) {
            console.error(err);
        }
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
                    onClick={props.type === "Submit" ? handleSubmit : handleEdit}
                >
                    {props.type}
                </Button>
               { props.type === "Edit" &&
                    <>
                        <Form.Control
                            type="hidden"
                            name="name"
                            placeholder="Name"
                            ref={idRef}
                            defaultValue={props.dataId}
                            required
                        />
                        <Button
                            variant="outline-warning"
                            size="lg"
                            className="mt-2"
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    </>
                }
            </Row>
        </>

    );
}

export default CategoryForm;