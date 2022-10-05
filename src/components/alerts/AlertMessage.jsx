import { Alert } from 'react-bootstrap';
import { useAlertContext } from '../../providers/AlertProvider';

const AlertMessage = () => {
    const { alert, dismissAlert } = useAlertContext();
    
    const hideAlert = () => {
        setTimeout(() => { dismissAlert() }, 4000);
    }

    if (alert) {
        hideAlert();
        return (
            <Alert variant={alert.variant} className="position-fixed bottom-0 start-0 w-100 text-center mb-0 py-4" onClose={dismissAlert} dismissible>
                <p className='mb-0'>{alert.message}</p>
            </Alert>
        );
    }
}

export default AlertMessage;