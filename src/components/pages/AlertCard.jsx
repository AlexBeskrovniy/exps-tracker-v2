import { useState } from 'react';
import { Alert, Button, Row } from 'react-bootstrap';

const AlertCard = (props) => {
    const[show, setShow] = useState(false);
    if (show) {
        return (
            <Alert variant={props.variant} className="text-center mt-2" onClose={() => setShow(false)} dismissible>
                <p>{props.message}</p>
                <Button
                    onClick={props.handleDelete}
                    variant="outline-danger"
                    size="lg"
                    className="mt-1 mx-auto"
                >Delete
                </Button>
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

export default AlertCard;