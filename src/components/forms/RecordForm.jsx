import { useState, useEffect } from 'react';
import { Row, Form, Button, FloatingLabel } from 'react-bootstrap';

const RecordForm = (props) => {
    const [categories, setCategories] = useState([{}]);

    useEffect(() => {
        fetch('http://localhost:3001/api/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error(err));
    }, []);

    return (

        <Form type={props.type}>
            <FloatingLabel
                controlId="floatingInputNum"
                label="How much money was spent?"
                className="mb-3"
            >
                <Form.Control
                    type="number"
                    name="money"
                    placeholder="How much"
                    required
                />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingSelect"
                label="How much money was spent?"
                className="mb-3"
            >
                    <Form.Select
                        name="category"
                    >
                        <option value="">No category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category._id}>{category.name}</option>
                        ))}
                    </Form.Select>

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

export default RecordForm;