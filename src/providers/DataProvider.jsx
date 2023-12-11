import { useState, useContext } from 'react';
import { useAuthContext } from './AuthProvider';
import { useAlertContext } from './AlertProvider';

import { API_URL } from '../config.js';

const DataContext = React.createContext();

export const useDataContext = () => {
    return useContext(DataContext);
}

const DataProvider = ({ children }) => {
    const { token, user, onLogOut } = useAuthContext();
    const { useAlert } = useAlertContext();

    const [categories, setCategories] = useState(user ? user.categories : []);
    const [records, setRecords] = useState(user ? user.records : []);
    const [total, setTotal] = useState(user ? user.total : 0);

    const useClearData = () => {
        setRecords([]);
        setCategories([]);
    }

    const useFetch = async (url, token, method, body ) => {
        try {
            const res = await fetch(url, {
                method: method,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (res.status === 401) {
                onLogOut();
                useClearData();
                useAlert('danger', `Something went wrong... Error status: ${res.status}(${res.statusText})`);
            }
            if (method) {
                return res;
            }
            const data = await res.json();
            return data;
        } catch (err) {
            console.error(err);
        }
    }

    const useActualCategories = async () => {
        const newData = await useFetch(`${API_URL}/api/categories`, token);
        setCategories(newData);
    }

    const useActualRecords = async () => {
        const newData = await useFetch(`${API_URL}/api/records`, token);
        setRecords(newData.records);
        setTotal(newData.total);
    }

    return(
        <DataContext.Provider value={{ categories, records, total, useActualCategories, useActualRecords, useClearData, useFetch }}>
            { children }
        </DataContext.Provider>
    );
}

export default DataProvider;