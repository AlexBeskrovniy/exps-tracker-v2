import { useState, useEffect, useRef } from 'react';
import { Row, Form, Button, FloatingLabel } from 'react-bootstrap';

const RecordForm = (props) => {
    const [categories, setCategories] = useState([]);

    const moneyRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = () => {
        const data = 
        {
            money: moneyRef.current.value,
            category: categoryRef.current.value,
            description: descriptionRef.current.value
        }
        console.log(data);
        props.handleClose();
    }

    const handleDelete = () => {
        console.log("Deleted");
        props.handleClose();
    }
//NOTE: Double fetch - need fix
    useEffect(() => {
        fetch('http://localhost:3001/api/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
            .catch(err => console.error(err));
    }, []);
    
    

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

export default RecordForm;