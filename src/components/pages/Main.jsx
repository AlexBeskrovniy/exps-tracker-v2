import moment from 'moment';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { MainChart } from '../charts/MainChart';

const Main = (props) => {

	const [monthSpents, setMonthSpents] = useState(0);
	const [chart, setChart] = useState([]);

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
				setChart(data);
				console.log("Chart request");
			})
			.catch(err => console.error(err));
	}, [props.records]);
	
	const chartInfoHandler = (data) => {
	   const result = data.reduce((accum, curent) => {
		   const date = moment(curent.createdAt).format('MMM Do YY');
		   if(!accum[date]) {
			 accum[date] = curent.money;
		   } else {
			 accum[date] += curent.money;
		   }
		   return accum;
		 }, {});
	   
		 const labels = [];
		 const spents = [];
		 Object.entries(result).map(([ date, money ]) => {
		   labels.unshift(date);
		   spents.unshift(money);
		 });
	
		 return { labels: labels, spents: spents };
	}
	
	const finalInfo = chartInfoHandler(chart);
	  
	const options = {
		plugins: {
			title: {
			display: true,
			text: 'Spents',
			},
			legend: false
		},
		responsive: true,
		interaction: {
			intersect: false
		}
	  };
	  
	const data = {
		labels: finalInfo.labels,
		datasets: [
			{
			label: 'This month',
			data: finalInfo.spents,
			backgroundColor: 'rgb(234, 162, 26)',
			borderColor: 'rgb(234, 162, 26)'
			}
		]
	  };

    return (
        <main className="main text-center">
			<Container>
				<div className="d-flex flex-wrap align-items-center justify-content-center my-3">
					<h3 className="text-white text-uppercase mx-3 my-0">In this month:</h3>
					<span data-spent className="spent fs-1">{monthSpents}</span>
				</div>
			</Container>
			<div className="d-flex justify-content-center mx-auto" style={{maxWidth: '800px'}}>
				<MainChart options={options} data={data} />
			</div>
		</main>
    );
}

export default Main;