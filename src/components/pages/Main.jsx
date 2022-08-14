import moment from 'moment';
import { useState, useEffect } from 'react';
import { useRecordsContext } from '../../providers/RecordsProvider';
import { Container } from 'react-bootstrap';
import { MainChart } from '../charts/MainChart';

const countSpents = (arr) => {
	let total = 0;
	arr.forEach(money => total += money.money );
	return total;
}

const Main = () => {
	const { records } = useRecordsContext();

	const thisMonthRecords = records.filter(record => record.createdAt > moment().startOf('month').toISOString());
	const thisMonthSpents = countSpents(thisMonthRecords);

    return (
        <main className="main text-center">
			<Container>
				<div className="d-flex flex-wrap align-items-center justify-content-center my-3">
					<h3 className="text-white text-uppercase mx-3 my-0">In this month:</h3>
					<span className="spent fs-1">{thisMonthSpents}</span>
				</div>
			</Container>
			<div className="d-flex justify-content-center mx-auto" style={{maxWidth: '800px'}}>
				<MainChart />
			</div>
		</main>
    );
}

export default Main;