import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RecordsProvider from './providers/RecordsProvider';
import CategoriesProvider from './providers/CategoriesProvider';
import AlertProvider from './providers/AlertProvider';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/pages/Main';
import Categories from './components/pages/Categories';
import Records from './components/pages/Records';
import AlertMessage from './components/alerts/AlertMessage';

const App = () => {

    return (
        <RecordsProvider>
            <CategoriesProvider>
                <BrowserRouter>
                    <AlertProvider>
                        <AlertMessage />
                        <Header />
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/categories" element={<Categories />}/>
                            <Route path="/records" element={<Records />} />
                        </Routes>
                        <Footer />
                    </AlertProvider>
                </BrowserRouter>
            </CategoriesProvider>
        </RecordsProvider>
    );
}

export default App;