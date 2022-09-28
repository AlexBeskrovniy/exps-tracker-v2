import { useRef, useState } from 'react';
import { useFetch } from '../../Utils';
import { useAuthContext } from '../../providers/AuthProvider';
import { useCategoriesContext } from '../../providers/CategoriesProvider';
import { useAlertContext } from "../../providers/AlertProvider";
import { Row, Form, Button, FloatingLabel, Spinner } from 'react-bootstrap';
import AlertConfirm from '../alerts/AlertConfirm';

const CategoryForm = (props) => {
    const { token } = useAuthContext();
    const { useActualData } = useCategoriesContext();
    const { useAlert } = useAlertContext();

    const [loading, setLoading] = useState(false);

    const nameRef = useRef();
    const descriptionRef = useRef();
    const idRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = 
        {
            name: nameRef.current.value,
            description: descriptionRef.current.value
        }

        const response = await useFetch('http://localhost:3001/api/categories/create', token, 'POST', formData);
        if(response.ok) {
            await useActualData();
            useAlert('success', 'New category has created.');
        } else {
            useAlert('danger', `Something went wrong... Error status: ${response.status}(${response.statusText})`);
        }
        props.handleClose();
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = 
        {
            id: idRef.current.value,
            name: nameRef.current.value,
            description: descriptionRef.current.value
        }
        
        const response = await useFetch('http://localhost:3001/api/categories/edit', token, 'PUT', formData);
        if(response.ok) {
            useActualData();
            useAlert('success', 'Category has updated.');
        } else {
            useAlert('danger', `Something went wrong... Error status: ${response.status}(${response.statusText})`);
        }
        props.handleClose();
    }

    const handleDelete = async () => {
        const formData = 
        {
            id: idRef.current.value,
        }
        
        const response = await useFetch('http://localhost:3001/api/categories/delete', token, 'DELETE', formData);
        if(response.ok) {
            useActualData();
            useAlert('success', 'Category has deleted.');
        } else {
            useAlert('danger', `Something went wrong... Error status: ${response.status}(${response.statusText})`);
        }
        props.handleClose();
    }

    return (
        <Form onSubmit={props.type === "Submit" ? handleSubmit : handleEdit}>
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
                    required
                />
            </FloatingLabel>
            <Row className="d-flex justify-content-between px-2">
                <Button
                    disabled={loading}
                    variant="outline-warning"
                    size="lg"
                    type="submit"
                >
                    {loading ? <Spinner as="span" animation="border" variant="warning" size="sm" /> : props.type}
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
                        <AlertConfirm variant={'warning'} message={'This action will delete this category.'} handleDelete={handleDelete} />
                    </>
                }
            </Row>
        </Form>
    );
}

export default CategoryForm;