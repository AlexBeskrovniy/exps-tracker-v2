import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthProvider from './providers/AuthProvider';
import DataProvider from './providers/DataProvider';
import AlertProvider from './providers/AlertProvider';
import ProtectedRoute from './providers/ProtectedRoute';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Registration from './components/pages/Registration';
import Login from './components/pages/Login';
import Main from './components/pages/Main';
import Categories from './components/pages/Categories';
import Records from './components/pages/Records';
import PageNotFound from './components/pages/PageNotFound';
import AlertMessage from './components/alerts/AlertMessage';

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AlertProvider>
                    <DataProvider>
                        <AlertMessage />
                        <Header />
                        <Routes>
                            <Route path="/" element={
                                <ProtectedRoute>
                                    <Main />
                                </ProtectedRoute>
                            } />
                            <Route path="/registration" element={<Registration />} />
                            <Route path="/login" element={<Login />} />
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
                    </DataProvider>
                </AlertProvider>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;