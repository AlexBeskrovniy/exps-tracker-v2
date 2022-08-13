import { useState, useContext } from 'react';

const RecordsContext = React.createContext();

export const useRecordsContext = () => {
    return useContext(RecordsContext);
}

const fetchRecords = async () => {
    try {
        const res = await fetch('http://localhost:3001/api/records');
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}

const data = await fetchRecords();

const RecordsProvider = ({ children }) => {

    const [records, setRecords] = useState(data);

    const useActualData = async () => {
        const newData = await fetchRecords();
        setRecords(newData);
    }

    return(
        <RecordsContext.Provider value={{ records, useActualData }}>
            { children }
        </RecordsContext.Provider>
    );
}

export default RecordsProvider;