import moment from 'moment';
import { useRef, useState } from 'react';
import { useFetch } from '../../Utils';
import { useRecordsContext } from '../../providers/RecordsProvider';
import { useCategoriesContext } from '../../providers/CategoriesProvider';
import AlertCard from '../pages/AlertCard';
import { Row, Form, Button, FloatingLabel, Spinner } from 'react-bootstrap';

const RecordForm = (props) => {
    const { useActualData } = useRecordsContext();
    const { categories } = useCategoriesContext();

    const [loading, setLoading] = useState(false);

    const dateRef = useRef();
    const moneyRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const idRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = 
        {
            createdAt: dateRef.current.value && new Date(dateRef.current.value).toISOString(),
            money: moneyRef.current.value,
            category: categoryRef.current.value,
            description: descriptionRef.current.value
        }
        const response = await useFetch('http://localhost:3001/api/records/create', 'POST', formData);
        console.log(response);
        if(response) {
            useActualData();
        }
        props.handleClose();
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = 
        {
            id: idRef.current.value,
            createdAt: new Date(dateRef.current.value).toISOString(),
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

        <Form onSubmit={props.type === "Submit" ? handleSubmit : handleEdit}>
            <FloatingLabel
                controlId="floatingInputDate"
                label="Date"
                className="mb-3"
            >
                <Form.Control
                    type="date"
                    name="date"
                    placeholder="Date"
                    ref={dateRef}
                    defaultValue={moment(new Date(props.dataCreatedAt)).format('yyyy-MM-DD')}
                    
                />
            </FloatingLabel>
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
                    disabled={loading}
                    variant="outline-warning"
                    size="lg"
                    type="submit"
                    >
                        {loading ? <Spinner as="span" animation="border" variant="warning" /> : props.type}
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

                        {/* <Button
                            variant="outline-warning"
                            size="lg"
                            className="mt-2"
                            onClick={handleDelete}
                            >
                            Delete
                        </Button> */}
                        <AlertCard variant={'danger'} message={'Are you sure? This action will delete this record.'} handleDelete={handleDelete} />
                    </>
                    }
            </Row>
        </Form> 
    );
}

export default RecordForm;