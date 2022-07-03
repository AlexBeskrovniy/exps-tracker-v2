import React from 'react';

const Categories = () => {
    return (
        <main className="main">
			<div className ="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-between py-5">
					<h2 className="page-title mx-2 mb-0">List of the Categories</h2>
					<a href="/form-create-category" className="btn btn-outline-warning btn-lg mt-3 mt-sm-0 ms-2" data-bs-toggle="modal" data-bs-target="#modalFormNewCategory">Create Category</a>
				</div>
				<div id="categoryWrapper" className="d-flex row justify-content-start">
							{/* <x-category-card id="<%=category._id%>" name="<%=category.name%>" description="<%=category.description%>">
							</x-category-card> */}
				</div>
			</div>	
		</main>
    );
}

export default Categories;