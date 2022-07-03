import React from 'react';

const Total = () => {
    return (
        <div className="d-flex align-items-center justify-content-center mx-3">
            <h3 className="text-white text-uppercase px-2 py-3 my-0">Total:</h3>
            <span id="totalOutput" className="spent fs-1 px-2">0</span>
        </div>
    );
}

export default Total;