import { useState, useContext } from 'react';

const CategoriesContext = React.createContext();

export const useCategoriesContext = () => {
    return useContext(CategoriesContext);
}

const fetchCategories = async () => {
    try {
        const res = await fetch('http://localhost:3001/api/categories');
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}

const data = await fetchCategories();

const CategoriesProvider = ({ children }) => {

    const [categories, setCategories] = useState(data);

    const useActualData = async () => {
        const newData = await fetchCategories();
        setCategories(newData);
    }

    return(
        <CategoriesContext.Provider value={{ categories, useActualData }}>
            { children }
        </CategoriesContext.Provider>
    );
}

export default CategoriesProvider;