import { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../providers/AuthProvider';
import { useAlertContext } from "../../providers/AlertProvider";
import { Container, Row, Form, Button, FloatingLabel, Spinner } from 'react-bootstrap';

import { HOST } from '../../config.js';

const Registration = () => {
    const navigate = useNavigate();
    const { onLogIn } = useAuthContext();
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
        try{
            const res = await fetch(`http://${HOST}:3001/api/user/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (res.ok) {
                console.log(data);
                onLogIn(data);
                navigate('/');
                useAlert('success', 'Welcome to your personal profile!');
            }
            else {
                setLoading(false);
                useAlert('danger', `Something went wrong... Error status: ${res.status}(${data.message})`);
            }
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <main className="main text-center">
			<Container>
				<div className="d-flex flex-wrap align-items-center justify-content-center my-3">
					<h3 className="page-title mx-3 my-0">Create Your Profile</h3>
				</div>
                <div className="d-flex justify-content-center">
                    <Form onSubmit={handleSubmit} className="form-card">
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
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-center text-white my-3">
                    <div className="my-3">
                        <h5>
                            Already have a profile?
                        </h5>
                        <p className="my-3">
                            <NavLink to="/login" className="nav-link px-3 text-uppercase text-white">
                                Log In
                            </NavLink>
                        </p>
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default Registration;