import { useState, useContext } from 'react';
import { useFetch } from '../Utils';
import { useAuthContext } from './AuthProvider';

const CategoriesContext = React.createContext();

export const useCategoriesContext = () => {
    return useContext(CategoriesContext);
}

const CategoriesProvider = ({ children }) => {
    const { token, user } = useAuthContext();
    const data = user ? user.categories : [];

    const [categories, setCategories] = useState(data);

    const useActualData = async () => {
        const newData = await useFetch('http://localhost:3001/api/categories', token);
        setCategories(newData);
    }

    return(
        <CategoriesContext.Provider value={{ categories, useActualData }}>
            { children }
        </CategoriesContext.Provider>
    );
}

export default CategoriesProvider;