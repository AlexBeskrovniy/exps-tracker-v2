import { useRef } from 'react';
import { useFetch } from '../../Utils';
import { useRecordsContext } from '../../providers/RecordsProvider';
import { useCategoriesContext } from '../../providers/CategoriesProvider';

import { Row, Form, Button, FloatingLabel } from 'react-bootstrap';

const RecordForm = (props) => {
    const { useActualData } = useRecordsContext();
    const { categories } = useCategoriesContext();

    const moneyRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const idRef = useRef();

    const handleSubmit = async () => {
        const formData = 
        {
            money: moneyRef.current.value,
            category: categoryRef.current.value,
            description: descriptionRef.current.value
        }

        const response = await useFetch('http://localhost:3001/api/records/create', 'POST', formData);

        if(response) {
            useActualData();
        }
        props.handleClose();
    }

    const handleEdit = async () => {
        const formData = 
        {
            id: idRef.current.value,
            money: moneyRef.current.value,
            category: categoryRef.current.value,
            description: descriptionRef.current.value
        }

        const response = await useFetch('http://localhost:3001/api/records/edit', 'PUT', formData);

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

        const response = await useFetch('http://localhost:3001/api/records/delete', 'DELETE', formData);

        if(response) {
            useActualData();
        }
        props.handleClose();
    }

    return (

        <>
            <FloatingLabel
                controlId="floatingInputNum"
                label="How much money was spent?"
                className="mb-3"
            >
                <Form.Control
                    type="number"
                    name="money"
                    placeholder="How much"
                    ref={moneyRef}
                    defaultValue={props.dataMoney}
                    required
                />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingSelect"
                label="How much money was spent?"
                className="mb-3"
            >
                    { categories.length && (
                    <Form.Select
                        name="category"
                        ref={categoryRef}
                        defaultValue={ categories.find(category => props.dataCategoryName === category.name)?._id}
                    >
                        <option value="">No category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category._id}>{category.name}</option>
                        ))}
                    </Form.Select>
                ) }
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
            <Row className="px-2">
                <Button
                    variant="outline-warning"
                    size="lg"
                    type="submit"
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

export default RecordForm;