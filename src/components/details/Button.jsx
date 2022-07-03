import React from 'react';

const Button = (props) => {
    return (
        <button className={props.classes} data-bs-toggle={props.toggle} data-bs-target={props.modalId}>
            {props.title}
        </button>
    );
}

export default Button;