import moment from 'moment';
import { useState } from 'react';
import { useRecordsContext } from '../../providers/RecordsProvider';
import { Container } from 'react-bootstrap';
import { MainChart } from '../charts/MainChart';
import { YearMainChart } from '../charts/YearMainChart';
import { CategoriesChart } from '../charts/CategoriesChart';
import { YearCategoriesChart } from '../charts/YearCategoriesChart';

const countSpents = (arr) => {
	let total = 0;
	arr.forEach(money => total += money.money );
	return total;
}

const Main = () => {
	const { records } = useRecordsContext();

	const [chart, setChart] = useState(<MainChart />);
	const [active, setActive] = useState({ activeItem: 'item0' });

	const useActive = (element, id) => {
		setChart(element)
		setActive({ activeItem: id });
	};

	const getClassName = (id) => {
		if (id === active.activeItem) {
			return 'nav-link text-white active';
		}

		return 'nav-link text-white';
	};

	const thisMonthRecords = records.filter(record => record.createdAt > moment().startOf('month').toISOString());
	const thisMonthSpents = countSpents(thisMonthRecords);

    return (
        <main className="main text-center">
			<Container>
				<div className="d-flex flex-wrap align-items-center justify-content-center my-3">
					<h3 className="text-white text-uppercase mx-3 my-0">In this month:</h3>
					<span className="spent fs-1">{thisMonthSpents}</span>
				</div>
				<div>
					<ul className="nav d-flex flex-wrap align-items-center justify-content-evenly my-3">
						<li>
							<a className={getClassName('item0')} id="item0" onClick={() => {useActive(<MainChart />, 'item0')}}>
								This Month By Days
							</a>
						</li>
						<li>
							<a className={getClassName('item1')} id="item1" onClick={() => {useActive(<YearMainChart />, 'item1')}}>
								This Year By Months
							</a>
						</li>
						<li>
							<a className={getClassName('item2')} id="item2" onClick={() => {useActive(<CategoriesChart />, 'item2')}}>
								This Month By Categories	
							</a>
						</li>
						<li>
							<a className={getClassName('item3')} id="item3" onClick={() => {useActive(<YearCategoriesChart />, 'item3')}}>
								This Year By Categories	
							</a>
						</li>
					</ul>
				</div>
			</Container>
			{ chart }
		</main>
    );
}

export default Main;