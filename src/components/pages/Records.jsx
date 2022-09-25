import { useRecordsContext } from '../../providers/RecordsProvider';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import RecordCard from './RecordCard';


const Records = () => {
	const { records } = useRecordsContext();

    return (

	   <main className="main text-center">
			<Container>
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between py-5">
					<h2 className="page-title ms-2 mb-0">All Records</h2>
				</div>

				{ records.length !== 0 ?   (
				<Row className="d-flex justify-content-center">
					
					<Card bg="dark" border="light" className="px-0">
						<Card.Header>
							<Row className="d-flex justify-content-between align-items-center text-center">
								<Col xs={4} lg={2} className="fs-3 spent">Date</Col>
								<Col xs={4} lg={2} className="fs-3 spent">Category</Col>
								<Col xs={4} lg={2} className="fs-3 spent">Spent</Col>
								<Col lg={5} className="fs-3 spent d-none d-lg-inline-block mx-auto">Description</Col>
								<Col lg={1} className="fs-3 spent d-none d-lg-inline-block mx-auto"></Col>
							</Row>
						</Card.Header>
						<div id="recordWrapper">
							{records.map((record, index) => (
								<RecordCard
									key={index}
									createdAt={record.createdAt}
									categoryName={record.categoryName ? record.categoryName : "No category"}
									money={record.money}
									description={record.description}
									id={record._id}
								/>
							))}
						</div>
					</Card>
				</Row>
				) :<Spinner animation="border" variant="warning" className="position-absolute top-50 left-50" /> }
			</Container>	
		</main>
	   	
    );
}

export default Records;