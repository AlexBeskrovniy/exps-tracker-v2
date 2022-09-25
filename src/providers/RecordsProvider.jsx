import { useState, useContext } from 'react';
import { useFetch } from '../Utils';
import { useAuthContext } from './AuthProvider';

const RecordsContext = React.createContext();

export const useRecordsContext = () => {
    return useContext(RecordsContext);
}

// const data = await useFetch('http://localhost:3001/api/records');

const RecordsProvider = ({ children }) => {
    const { token, user } = useAuthContext();
    const data = user ? user.records : [];
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