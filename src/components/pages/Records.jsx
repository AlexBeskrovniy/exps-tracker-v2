import { useState, useEffect } from 'react';


const Records = () => {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/api/records')
			.then(res => res.json())
			.then(data => setRecords(data))
			.catch(err => console.error(err));
	}, []);


    return (

	   <main className="main">
			<div className ="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between py-5">
					<h2 className="page-title ms-2 mb-0">All Records</h2>
				</div>
				{ records.length !== 0 ?   (
				<div className="d-flex row justify-content-center">
					
					<div className="card bg-dark border-white">
						<div className="card-footer row d-flex justify-content-between align-items-center text-center">
							<span className="col-4 col-lg-2 fs-3 spent">Date</span>
							<span className="col-4 col-lg-2 fs-3 spent">Category</span>
							<span className="col-4 col-lg-2 fs-3 spent">Spent</span>
							<span className="row col-lg-5 fs-3 spent d-none d-lg-inline-block mx-auto">Description</span>
							<span className="row col-lg-1 fs-3 spent d-none d-lg-inline-block mx-auto"></span>
						</div>
						<div id="recordWrapper">
							
							{records.map((record, index) => (
								<div key={index}>
									<div data-record-div className="card-footer border-white row d-flex justify-content-between align-items-center text-center">
										<span data-record-date className="col-4 col-lg-2 fs-5 text-white mx-auto">
											{record.createdAt}
										</span>
										<span data-record-category className="col-4 col-lg-2 fs-5 text-white mx-auto">
											{record.category.name}
										</span>
										<span data-record-money className="col-4 col-lg-2 fs-3 mx-auto spent">
											{record.money}
										</span>
										<span data-record-description className="row mt-3 col-lg-5 fs-5 text-white mt-lg-0 mx-auto">
											{record.description}
										</span>
										<span className="row mt-3 col-lg-1 fs-5 text-white mt-lg-0 mx-auto">
											<a data-edit-button href="#" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#modalFormEditRecord">
												Edit
											</a>
										</span>
									</div>
								</div>
							))}

						</div>
					</div>
				</div>
				) :<span style={{ color: 'red' }}>Loading...</span> }
			</div>	
		</main>
	   	
    );
}

export default Records;