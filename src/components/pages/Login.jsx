import { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../providers/AuthProvider';
import { useAlertContext } from "../../providers/AlertProvider";
import { Container, Row, Form, Button, FloatingLabel, Spinner } from 'react-bootstrap';

const Login = () => {
    const navigate = useNavigate();
    const { onLogIn } = useAuthContext();

    const { useAlert } = useAlertContext();

    const [loading, setLoading] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = 
        {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        console.log(formData);
        try{
            const res = await fetch('http://localhost:3001/api/user/login', {
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
                setLoading(false);
                navigate('/');
                useAlert('success', `${data.user.name}, Welcome to your personal profile!`);
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
					<h3 className="page-title mx-3 my-0">Login to Your Profile</h3>
				</div>
                <div className="d-flex justify-content-center">
                    <Form onSubmit={handleSubmit} className="form-card">
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

                        <Row className="px-2">
                            <Button
                                disabled={loading}
                                variant="outline-warning"
                                size="lg"
                                type="submit"
                            >
                                {loading ? <Spinner as="span" animation="border" variant="warning" size="sm" /> : "Log In"}
                            </Button>
                        </Row>
                    </Form> 
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-center text-white my-3">
                    <div className="my-3">
                        <h5>
                            Don't have a profile yet?
                        </h5>
                        <p className="my-3">
                            <NavLink to="/registration" className="nav-link px-3 text-uppercase text-white">
                                Sign Up
                            </NavLink>
                        </p>
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default Login;