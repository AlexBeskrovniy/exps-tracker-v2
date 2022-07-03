import React from 'react';

const Records = () => {
    return (
        <main className="main">
			<div className ="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between py-5">
					<h2 className="page-title ms-2 mb-0">All Records</h2>
				</div>

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
							{/* <x-record-card 
								id="<%=record._id%>"
								date="<%=new Date(record.createdAt).toDateString();%>"
								category-id = "<%=record.category._id%>"
								category="<%=record.category.name%>"
								money="<%=record.money%>"
								description="<%=record.description%>">
							</x-record-card> */}
						</div>
					</div>
				</div>

			</div>	
		</main>
    );
}

export default Records;