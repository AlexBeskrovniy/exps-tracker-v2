import { useState, useContext } from 'react';
import { useFetch } from '../Utils';

const CategoriesContext = React.createContext();

export const useCategoriesContext = () => {
    return useContext(CategoriesContext);
}

const data = await useFetch('http://localhost:3001/api/categories');

const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState(data);

    const useActualData = async () => {
        const newData = await useFetch('http://localhost:3001/api/categories');
        setCategories(newData);
    }

    return(
        <CategoriesContext.Provider value={{ categories, useActualData }}>
            { children }
        </CategoriesContext.Provider>
    );
}

export default CategoriesProvider;