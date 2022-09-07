import { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';

const AlertConfirm = (props) => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleConfirm = () => {
        setLoading(true);
        props.handleDelete();
    }

    if (show) {
        return (
            <Alert variant={props.variant} className="mt-2" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Are You Sure?</Alert.Heading>
                <hr />
                <div className="text-center">
                    <p>{ props.message }</p>
                </div>
                <div className="d-flex justify-content-around">
                    <Button
                        disabled={loading}
                        onClick={handleConfirm}
                        variant="warning"
                        size="lg"
                    >
                        {loading ? <Spinner as="span" animation="border" variant="dark" size="sm" className='mx-3' /> : 'Confirm'}
                    </Button>
                    <Button
                        onClick={() => setShow(false)}
                        variant="warning"
                        size="lg"
                    >Dismiss
                    </Button>
                </div>
            </Alert>
        );
    }
    return <Button
                onClick={() => setShow(true)}
                variant="outline-warning"
                size="lg"
                className="mt-2"
            >Delete
            </Button>;
}

export default AlertConfirm;