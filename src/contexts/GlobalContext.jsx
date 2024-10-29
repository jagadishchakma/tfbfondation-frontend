import { createContext, useState, useEffect } from 'react';
import { themes } from '../utilities/AppTheme';
import { api, authApi } from '../utilities/api';
import getCookie from '../utilities/getCookie';


const GlobalContext = createContext();
let activeTheme = localStorage.getItem('theme');//theme localstorage

const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState(themes[activeTheme] || themes.light); // used for site theme
  const [open,setOpen] = useState(false); //used for aside toggler in mobile
  const [state, setState] = useState({
    login: false,
    logout: false
  })


  /*---------- load initially authenticate users if have start ------------*/
  useEffect(()=>{
    const getUser = async () => {
      const userId = getCookie('userId');
      const token = getCookie('authToken');
      if (userId && token){
        try {
          const response = await authApi.get(`/account/get/${userId}/`)
          setUser(response.data)//if have user data set user data
          console.log(response)
        } catch (error) {
          setUser({}) // if not have user data or getting error set empty user data
          console.log(error)
        }
      }
    }
    getUser()
  },[state.login])
  /*---------- load initially authenticate users if have end ------------*/



  /*---------- theme management side effects start ----------*/
  useEffect(()=>{
   if(theme.themeName !== activeTheme){
      localStorage.setItem('theme', theme.themeName);
   }
   
  },[theme]);
  /*---------- theme management side effects start ----------*/



  /*---------- user login start ----------*/
  const login = async ({username='jagadishchakma', email="jagadishchakma401@gmail.com", password='JaGa(Namita)1'}) => {
    let user_credential = {username, email, password}
    try {
        let response = await api.post('/account/login/', user_credential)
        // Set a cookie named "authToken" with the token value
        let token = response.data.token
        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 1); // Set to 1 year from now
        document.cookie = `authToken=${token}; path=/; expires=${expires.toUTCString()}; secure; samesite=strict`;
        
        // set a cookei name "userId" with the userId value
        let userId = response.data.user_id
        document.cookie = `userId=${userId}; path=/; expires=${expires.toUTCString()}; secure; samesite=strict`;


        // set login status
        if(response.data.token){
          setState((preveState)=>{
            return {...preveState,login:true}
          })
        }
        console.log(response)
    } catch (error) {
        console.log(error)
    }
  }
  /*---------- user login end ----------*/


  
  /*----------- user logout start ----------*/
  const logout = async () => {
    try {
      const reponse = await authApi.post('/account/logout/')
      console.log(reponse)
    } catch (error) {
      console.log(error)
    }
  }
  /*----------- user logout end ----------*/



  //component return function
  return (
    <GlobalContext.Provider value={{theme,setTheme, open, setOpen, login, logout, user}}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
