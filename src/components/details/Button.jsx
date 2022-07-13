import { Button } from 'react-bootstrap';

const CreateButton = (props) => {
    return (
        <Button
            variant={props.variant}
            size={props.size}
            className={props.classes}
            data-bs-toggle={props.toggle}
            data-bs-target={props.modalId}
        >
            {props.title}
        </Button>
    );
}

export default CreateButton;