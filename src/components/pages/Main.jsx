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
	
	const thisMonthRecords = records.filter(record => record.createdAt > moment().startOf('month').toISOString());
	const thisYearRecords = records.filter(record => record.createdAt > moment().startOf('year').toISOString());
	const thisMonthSpents = countSpents(thisMonthRecords);
	const thisYearSpents = countSpents(thisYearRecords);

	const [chart, setChart] = useState(<MainChart />);
	const [active, setActive] = useState({ activeItem: 'item0' });
	const [title, setTitle] = useState('In This Mounth');
	const [chartTotal, setChartTotal] = useState(thisMonthSpents);

	const useActive = (element, id) => {
		setChart(element)
		setActive({ activeItem: id });
		id === 'item1' || id === 'item3' ?
		(
			setTitle('In This Year'),
			setChartTotal(thisYearSpents)
		) : (
			setTitle('In This Month'),
			setChartTotal(thisMonthSpents)
		)
	};

	const getClassName = (id) => {
		if (id === active.activeItem) {
			return 'nav-link text-white active';
		}

		return 'nav-link text-white';
	};

    return (
        <main className="main text-center">
			{records.length !== 0 ? (
				<>
					<Container>
						<div className="d-flex flex-wrap align-items-center justify-content-center my-3">
							<h3 className="text-white text-uppercase mx-3 my-0">{ title }</h3>
							<span className="spent fs-1">{ chartTotal }</span>
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
				</>
			) : (
				<Container className="d-flex align-items-center justify-content-center">
					<div className="d-flex align-items-center justify-content-center position-absolute top-50 left-50">
						<h2 className="page-title ms-2 mb-0">
							Have not any information for charts. Create your first record and category.
						</h2>
					</div>
				</Container>
			)}
			
		</main>
    );
}

export default Main;