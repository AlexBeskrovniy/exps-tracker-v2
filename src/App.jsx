import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/pages/Main';
import Categories from './components/pages/Categories';
import Records from './components/pages/Records';

const App = () => {

    const [records, setRecords] = useState([]);

    const fetchRecords = async () => {
		try {
			const res = await fetch('http://localhost:3001/api/records');
			const data = await res.json();
			setRecords(data);
            console.log(data);
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => { fetchRecords(); }, []);

    return (
        <BrowserRouter>
            <Header fetchRecords={fetchRecords} records={records} />
            <Routes>
                <Route path="/" element={<Main records={records} />} />
                <Route path="/categories" element={<Categories />}/>
                <Route path="/records" element={<Records fetchRecords={fetchRecords} records={records} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;