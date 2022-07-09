import React, { useState, useEffect } from 'react';

const Total = () => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
		fetch('http://localhost:3001/api/total')
			.then(res => res.json())
			.then(data => setTotal(data))
			.catch(err => console.error(err));
	}, []);

    return (
        <div className="d-flex align-items-center justify-content-center mx-3">
            <h3 className="text-white text-uppercase px-2 py-3 my-0">Total:</h3>
            <span id="totalOutput" className="spent fs-1 px-2">{total}</span>
        </div>
    );
}

export default Total;