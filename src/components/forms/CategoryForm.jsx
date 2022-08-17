import { useRef } from 'react';
import { useFetch } from '../../Utils';
import { useCategoriesContext } from '../../providers/CategoriesProvider';
import { Row, Form, Button, FloatingLabel } from 'react-bootstrap';


const CategoryForm = (props) => {
    
    const { useActualData } = useCategoriesContext();

    const nameRef = useRef();
    const descriptionRef = useRef();
    const idRef = useRef();

    const handleSubmit = async () => {
        const formData = 
        {
            name: nameRef.current.value,
            description: descriptionRef.current.value
        }
        const response = await useFetch('http://localhost:3001/api/categories/create', 'POST', formData);

        if(response) {
            useActualData();
        }
        props.handleClose();
    }

    const handleEdit = async () => {
        const formData = 
        {
            id: idRef.current.value,
            name: nameRef.current.value,
            description: descriptionRef.current.value
        }
        
        const response = await useFetch('http://localhost:3001/api/categories/edit', 'PUT', formData);

        if(response) {
            useActualData();
        }
        props.handleClose();
    }

    const handleDelete = async () => {
        const formData = 
        {
            id: idRef.current.value,
        }
        
        const response = await useFetch('http://localhost:3001/api/categories/delete', 'DELETE', formData);

        if(response) {
            useActualData();
        }
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