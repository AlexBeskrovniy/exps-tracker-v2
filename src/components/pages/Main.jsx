import React, { useState, useEffect } from 'react';

const Main = () => {

	const [chart, setChart] = useState("No Data...");

	useEffect(() => {
		fetch('http://localhost:3001/api/infochart')
			.then(res => res.json())
			.then(data => setChart(data))
			.catch(err => console.error(err));
	}, []);

    return (
        <main className="main">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center my-3">
					<h3 className="text-white text-uppercase mx-3 my-0">In this month:</h3>
					<span data-spent className="spent fs-1">0</span>
				</div>
			</div>
			<div className="d-flex justify-content-center mx-auto" style={{maxWidth: '800px'}}>
				<canvas id="myChart"></canvas>
			</div>
		</main>
    );
}

export default Main;