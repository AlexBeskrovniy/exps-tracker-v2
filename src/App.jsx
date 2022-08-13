import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RecordsProvider from './providers/RecordsProvider';
import CategoriesProvider from './providers/CategoriesProvider';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/pages/Main';
import Categories from './components/pages/Categories';
import Records from './components/pages/Records';

const App = () => {

    return (
        <RecordsProvider>
            <CategoriesProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/categories" element={<Categories />}/>
                        <Route path="/records" element={<Records />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CategoriesProvider>
        </RecordsProvider>
    );
}

export default App;