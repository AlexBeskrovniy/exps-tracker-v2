import { useState, useEffect } from 'react';
import { MainChart } from '../charts/MainChart';

const Main = () => {

	const [monthSpents, setMonthSpents] = useState(0);

	const countSpents = (arr) => {
		let total = 0;
		arr.forEach(function(money) {
			total += money.money;
		});
		return total;
	}

	useEffect(() => {
		fetch('http://localhost:3001/api/infochart')
			.then(res => res.json())
			.then(data => {
				setMonthSpents(countSpents(data));
			})
			.catch(err => console.error(err));
	}, []);

    return (
        <main className="main">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center my-3">
					<h3 className="text-white text-uppercase mx-3 my-0">In this month:</h3>
					<span data-spent className="spent fs-1">{monthSpents}</span>
				</div>
			</div>
			<div className="d-flex justify-content-center mx-auto" style={{maxWidth: '800px'}}>
				<MainChart />
			</div>
		</main>
    );
}

export default Main;