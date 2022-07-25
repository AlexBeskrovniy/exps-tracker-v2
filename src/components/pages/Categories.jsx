import { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import ModalWrapper from '../modals/ModalWrapper';
import CategoryForm from '../forms/CategoryForm';
import CategoryCard from './CategoryCard';

const Categories = () => {
	const [categories, setCategories] = useState([]);
	const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

	useEffect(() => {
		fetch('http://localhost:3001/api/categories')
			.then(res => res.json())
			.then(data => {
				setCategories(data);
			})
				
			.catch(err => console.error(err));
	}, []);

    return (
        <main className="main text-center">
			<Container>
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-between py-5">
					<h2 className="page-title mx-2 mb-0">List of the Categories</h2>
					<ModalWrapper 
						form={<CategoryForm type="Submit" handleClose={handleClose} />}
						btnTitle="Create Category"
						btnVariant="outline-warning"
						btnSize="lg"
						modalTitle="Create a new Category"
						show={show}
                        handleShow={handleShow}
                        handleClose={handleClose}
					/>
				</div>

				{categories.length ? (

				<Row id="categoryWrapper" className="d-flex justify-content-start">
					{categories.map((category, index) => (
						<Col sm={6} lg={3} key={index} className="my-2 mx-0">
							<CategoryCard 
								categoryName={category.name}
								categoryDescription={category.description}
								categoryId={category._id}
							/>
						</Col>
					))}
				</Row>

				) : (
					<Spinner animation="border" variant="warning" className="position-absolute top-50 left-50" /> 		
				)}
			</Container>	
		</main>
    );
}

export default Categories;