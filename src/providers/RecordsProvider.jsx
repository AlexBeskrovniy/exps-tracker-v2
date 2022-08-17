import { useState, useContext } from 'react';
import { useFetch } from '../Utils';

const RecordsContext = React.createContext();

export const useRecordsContext = () => {
    return useContext(RecordsContext);
}

const data = await useFetch('http://localhost:3001/api/records');

const RecordsProvider = ({ children }) => {
    const [records, setRecords] = useState(data);

    const useActualData = async () => {
        const newData = await useFetch('http://localhost:3001/api/records');
        setRecords(newData);
    }

    return(
        <RecordsContext.Provider value={{ records, useActualData }}>
            { children }
        </RecordsContext.Provider>
    );
}

export default RecordsProvider;