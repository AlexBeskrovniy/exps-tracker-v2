import { useState, useContext } from 'react';
import { useFetch } from '../Utils';
import { useAuthContext } from './AuthProvider';

const RecordsContext = React.createContext();

export const useRecordsContext = () => {
    return useContext(RecordsContext);
}

const RecordsProvider = ({ children }) => {
    const { token, user } = useAuthContext();
    const data = user ? user.records : [];
    const totalSpent = user ? user.total : 0;

    const [records, setRecords] = useState(data);
    const [total, setTotal] = useState(totalSpent);

    const useActualData = async () => {
        const newData = await useFetch('http://localhost:3001/api/records', token);
        setRecords(newData.records);
        setTotal(newData.total);
    }

    return(
        <RecordsContext.Provider value={{ records, total, useActualData }}>
            { children }
        </RecordsContext.Provider>
    );
}

export default RecordsProvider;