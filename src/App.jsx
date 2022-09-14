import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthProvider from './providers/AuthProvider';
import RecordsProvider from './providers/RecordsProvider';
import CategoriesProvider from './providers/CategoriesProvider';
import AlertProvider from './providers/AlertProvider';
import ProtectedRoute from './providers/ProtectedRoute';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/pages/Main';
import Categories from './components/pages/Categories';
import Records from './components/pages/Records';
import PageNotFound from './components/pages/PageNotFound';
import AlertMessage from './components/alerts/AlertMessage';

const App = () => {
    return (
        <AuthProvider>
            <RecordsProvider>
                <CategoriesProvider>
                    <BrowserRouter>
                        <AlertProvider>
                            <AlertMessage />
                            <Header />
                            <Routes>
                                <Route path="/" element={<Main />} />
                                <Route path="/categories" element={
                                    <ProtectedRoute>
                                        <Categories />
                                    </ProtectedRoute>
                                } />
                                <Route path="/records" element={
                                    <ProtectedRoute>
                                        <Records />
                                    </ProtectedRoute>
                                } />
                                <Route path="*" element={<PageNotFound />}/>
                            </Routes>
                            <Footer />
                        </AlertProvider>
                    </BrowserRouter>
                </CategoriesProvider>
            </RecordsProvider>
        </AuthProvider>
    );
}

export default App;