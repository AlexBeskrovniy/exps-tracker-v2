import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/pages/Main';
import Categories from './components/pages/Categories';
import Records from './components/pages/Records';
import ModalFormNewRecord from './components/modals/ModalFormNewRecord';
import ModalFormNewCategory from './components/modals/ModalFormNewCategory';

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/categories" element={<Categories />}/>
                <Route path="/records" element={<Records />} />
            </Routes>
            <ModalFormNewRecord />
            <ModalFormNewCategory />
            <Footer />
        </BrowserRouter>
    );
}

export default App;