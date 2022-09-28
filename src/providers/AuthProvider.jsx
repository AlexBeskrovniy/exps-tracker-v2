import { useContext, useState } from 'react';

const AuthContext = React.createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

const jwt = localStorage.getItem('jwt');
console.log(jwt);
const checkAuth = async () => {
    try{
        const res = jwt && await fetch('http://localhost:3001/api/user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json'
            }
        });
        if (res?.ok) {
            const data = await res.json();
            return data;
        };
        return false;
    } catch(err) {
        console.error(err);
    }
}


const userData = await checkAuth();
console.log(userData);
const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(jwt);
    const [user, setUser] = useState(userData);

    const onLogIn = (data) => {
        localStorage.setItem('jwt', data.token);
        setToken(data.token);
        setUser(data.user);
    }  

    const onLogOut = () => {
        localStorage.removeItem('jwt');
        setToken(null);
        setUser(null);
        console.log("you're logged out");
    }

    return (
        <AuthContext.Provider value={{ token, user, onLogOut, onLogIn }}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;