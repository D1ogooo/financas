import { createContext, useContext } from 'react';
import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider ({ children }) {
 const [data, setData] = useState({});
 
 useEffect(() => {
    const token = localStorage.getItem('@finance:token');
    const user = localStorage.getItem('@finance:user');

    if (token && user) {
      setData({ token, user: JSON.parse(user) });
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
 }, []);

 
 async function login({ email, password }) {
  try {
   const res = await api.post('/auth/signin', { email, password })
   if (res.data) {
     const { token, user } = res.data;
     localStorage.setItem('@finance:token', token);
     localStorage.setItem('@finance:user', JSON.stringify(user));
     api.defaults.headers.authorization = `Bearer ${token}`;
     setData({ token, user });
   }
  } catch (error) {
    return error.response.data;
  }
 }
  

 async function register({ name, email, password }) {
  try {
    await api.post('/auth/signup', { name, email, password })
  } catch (error) {
    return alert(error.response.data)
  }
 }


 return (
  <AuthContext.Provider value={{ user: data.user, login, register }}>
   {children}
  </AuthContext.Provider>
 )
}

function useAuth() {
 const context = useContext(AuthContext);
 return context;
}

export { AuthProvider, useAuth }
