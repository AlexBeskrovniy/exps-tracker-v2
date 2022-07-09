import React, { useState, useEffect } from 'react';

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/api/categories')
			.then(res => res.json())
			.then(data => setCategories(data))
			.catch(err => console.error(err));
	}, []);

    return (
        <main className="main">
			<div className ="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-between py-5">
					<h2 className="page-title mx-2 mb-0">List of the Categories</h2>
					<a href="/form-create-category" className="btn btn-outline-warning btn-lg mt-3 mt-sm-0 ms-2" data-bs-toggle="modal" data-bs-target="#modalFormNewCategory">Create Category</a>
				</div>

				{categories.length ? (

				<div id="categoryWrapper" className="d-flex row justify-content-start">
					{categories.map((category, index) => (
						<div key={index} className="col-sm-6 col-lg-3 my-2 mx-0">
							<div data-category-div className="card bg-dark">
								<div className="card-header text-white">
									<h3 data-category-name className="card-title text-white">
										{category.name}
									</h3>
								</div>
								<div className="card-body">
									<h5 className="card-title text-white">Description</h5>
									<p data-category-description className="card-text text-white">
										{category.description}
									</p>
								</div>
								<div className="card-footer row py-3">
									<a data-edit-button href="#" className="btn btn-outline-warning me-2" data-bs-toggle="modal" data-bs-target="#modalFormEditCategory">Edit</a>
								</div>
							</div>
						</div>
					))}
				</div>

				) : (
					<span style={{ color: 'red' }}>Loading...</span> 		
				)}
			</div>	
		</main>
    );
}

export default Categories;