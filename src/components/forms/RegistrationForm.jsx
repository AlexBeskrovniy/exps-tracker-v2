import { useRef, useState } from 'react';
import { useFetch } from '../../Utils';
import { useAlertContext } from "../../providers/AlertProvider";
import { Row, Form, Button, FloatingLabel, Spinner } from 'react-bootstrap';

const RegistrationForm = (props) => {
    const { useAlert } = useAlertContext();

    const [loading, setLoading] = useState(false);

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = 
        {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirm: confirmRef.current.value
        }
        console.log(formData);
        // const response = await useFetch('http://localhost:3001/api/records/create', 'POST', formData);
        // if(response.ok) {
        //     useActualData();
        //     useAlert('success', 'New record has created.');
        // } else {
        //     useAlert('danger', `Something went wrong... Error status: ${response.status}(${response.statusText})`);
        // }
        // props.handleClose();
    }

    return (

        <Form onSubmit={handleSubmit}>
            <FloatingLabel
                controlId="floatingInputNum"
                label="Your Username"
                className="mb-3"
            >
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Username"
                    ref={nameRef}
                    required
                />
            </FloatingLabel>
            
            <FloatingLabel
                controlId="floatingInputEmail"
                label="Your Email"
                className="mb-3"
            >
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    ref={emailRef}
                    required
                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInputPass"
                label="Your Password"
                className="mb-3"
            >
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={passwordRef}
                    required
                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingInputConfirm"
                label="Confirm Your Password"
                className="mb-3"
            >
                <Form.Control
                    type="password"
                    name="confirm"
                    placeholder="Password"
                    ref={confirmRef}
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
                    {loading ? <Spinner as="span" animation="border" variant="warning" size="sm" /> : "Submit"}
                </Button>
            </Row>
        </Form> 
    );
}

export default RegistrationForm;