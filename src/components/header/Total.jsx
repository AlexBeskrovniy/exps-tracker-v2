import { useState, useEffect } from 'react';

const Total = (props) => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
		fetch('http://localhost:3001/api/total')
			.then(res => res.json())
			.then(data => {
                setTotal(data);
                console.log(data);
            })
			.catch(err => console.error(err));
	}, [props.records]);

    return (
        <div className="d-flex align-items-center justify-content-center mx-3">
            <h3 className="text-white text-uppercase px-2 py-3 my-0">Total:</h3>
            <span className="spent fs-1 px-2">{total}</span>
        </div>
    );
}

export default Total;