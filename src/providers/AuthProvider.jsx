import { useContext, useState } from 'react';

const AuthContext = React.createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

// const jwt = localStorage.getItem('jwt');

// const checkAuth = async () => {
//     try{
//         const res = await fetch('http://localhost:4001/api/user/authcheck', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${jwt}`,
//                 'Content-Type': 'application/json'
//             }
//         });
//         if (res.ok) {
//             const data = await res.json();
//             return data;
//         };
//         return false;
//     } catch(err) {
//         console.error(err);
//     }
// }

// const userData = jwt ? await checkAuth() : null;

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

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