import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Main from './components/pages/Main.jsx';
import Categories from './components/pages/Categories.jsx';
import Records from './components/pages/Records.jsx';
import ModalFormNewRecord from './components/modals/ModalFormNewRecord.jsx';
import ModalFormNewCategory from './components/modals/ModalFormNewCategory.jsx';

const App = () => {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/categories" element={<Categories />}/>
                <Route path="/records" element={<Records />} />
            </Routes>
            <ModalFormNewRecord />
            <ModalFormNewCategory />
            <Footer />
        </HashRouter>
    );
}

export default App;