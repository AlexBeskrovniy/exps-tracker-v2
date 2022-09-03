import { useState } from 'react';
import { Alert } from 'react-bootstrap';

const AlertCard = (props) => {
    const[show, setShow] = useState(true);
    if (show) {
        return (
            <Alert variant={props.variant} className="text-center" onClose={() => setShow(false)} dismissible>
                {props.message}
            </Alert>
        );
    }
}

export default AlertCard;