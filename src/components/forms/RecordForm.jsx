import moment from 'moment';
import { useRef, useState, useEffect } from 'react';
//import { useFetch } from '../../Utils';
import { useAuthContext } from '../../providers/AuthProvider';
import { useDataContext } from '../../providers/DataProvider';
import { useAlertContext } from "../../providers/AlertProvider";
import { Row, Form, Button, FloatingLabel, Spinner } from 'react-bootstrap';
import AlertConfirm from '../alerts/AlertConfirm';

const RecordForm = (props) => {
    const { token, onLogOut } = useAuthContext();
    const { categories, useFetch, useActualCategories, useActualRecords } = useDataContext();
    const { useAlert } = useAlertContext();

    const [loading, setLoading] = useState(false);

    const dateRef = useRef();
    const moneyRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const idRef = useRef();

    useEffect(() => {
		useActualCategories();
	}, []);

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
        const response = await useFetch('http://localhost:3001/api/records/create', token, 'POST', formData);
        if(response.ok) {
            useActualRecords();
            useAlert('success', 'New record has created.');
        } else {
            const data = await response.json();
            useAlert('danger', `Something went wrong... Error status: ${response.status}(${response.statusText}) - ${data.message}`);
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
        const response = await useFetch('http://localhost:3001/api/records/edit', token, 'PUT', formData);
        if(response.ok) {
            useActualRecords();
            useAlert('success', 'Record has updated.');
        } else {
            const data = await response.json();
            useAlert('danger', `Something went wrong... Error status: ${response.status}(${response.statusText}) - ${data.message}`);
        }
        props.handleClose();
    }

    const handleDelete = async () => {
        const formData = 
        {
            id: idRef.current.value,
        }

        const response = await useFetch('http://localhost:3001/api/records/delete', token, 'DELETE', formData);
        if(response.ok) {
            useActualRecords();
            useAlert('success', 'Record has deleted.');
        } else {
            const data = await response.json();
            useAlert('danger', `Something went wrong... Error status: ${response.status}(${response.statusText}) - ${data.message}`);
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
                    defaultValue={props.dataCreatedAt ? moment(new Date(props.dataCreatedAt)).format('yyyy-MM-DD') : moment().format('yyyy-MM-DD')}
                    
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
                label="Choose the Category"
                className="mb-3"
            >
                    { categories.length ? (
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
                ) : (
                    <Form.Select
                        name="category"
                        ref={categoryRef}
                        defaultValue=""
                    >
                        <option value="">No category</option>
                    </Form.Select>
                )}
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
            <Row className="px-2">
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
                        <AlertConfirm variant={'warning'} message={'This action will delete this record.'} handleDelete={handleDelete} />
                    </>
                    }
            </Row>
        </Form> 
    );
}

export default RecordForm;