import { useState, useContext } from 'react';

const AlertContext = React.createContext();

export const useAlertContext = () => {
    return useContext(AlertContext);
}

const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(false);

    const useAlert = async (variant, message) => { 
        setAlert({ variant: variant, message: message });
    }

    const dismissAlert = () => {
        setAlert(false);
    }

    return(
        <AlertContext.Provider value={{ alert, useAlert, dismissAlert }}>
            { children }
        </AlertContext.Provider>
    );
}

export default AlertProvider;