import { createContext, useState, useEffect } from 'react';
import { themes } from '../utilities/AppTheme';
import { api, authApi } from '../utilities/api';
import Cookies from 'js-cookie';


const GlobalContext = createContext();
let activeTheme = localStorage.getItem('theme');//theme localstorage

const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState(themes[activeTheme] || themes.light); // used for site theme
  const [open, setOpen] = useState(false); //used for aside toggler in mobile
  const [state, setState] = useState({
    reload: 0,
    signupModal: false
  })


  /*---------- load initially authenticate users if have start ------------*/
  useEffect(() => {
    const getUser = async () => {
      const userId = Cookies.get('userId');
      const token = Cookies.get('authToken');
      if (userId && token) {
        try {
          const response = await authApi().get(`/account/get/${userId}/`)
          setUser(response.data)//if have user data set user data
          setState((prevState)=>({...prevState, signupModal: false}))// close modal
          console.log('User load: ', response)
        } catch (error) {
          setUser({}) // if not have user data or getting error set empty user data
          console.log(userId,token)
          console.log("User not load: ",error)
        }
      }else{
        setUser({})
      }
    }
    getUser()
  }, [state.reload])
  /*---------- load initially authenticate users if have end ------------*/



  /*---------- theme management side effects start ----------*/
  useEffect(() => {
    if (theme.themeName !== activeTheme) {
      localStorage.setItem('theme', theme.themeName);
    }

  }, [theme]);
  /*---------- theme management side effects start ----------*/



  /*---------- user login start ----------*/
  const login = async ({ username = 'jagadishchakma',  password = 'JaGa(Namita)1' }) => {
    let user_credential = { user_email: username, password }
    try {
      let response = await api.post('/account/login/', user_credential)

      // set login status
      if (response.data.token) {
        // Set a cookie named "authToken" with the token value
        let token = response.data.token
        Cookies.set('authToken', token, { expires: 365, secure: true, sameSite: 'Strict', path: '/' });

        // set a cookei name "userId" with the userId value
        let userId = response.data.user_id
        Cookies.set('userId', userId, { expires: 365, secure: true, sameSite: 'Strict', path: '/' });

        //update user state
        setState((preveState) => {
          return { ...preveState, reload: preveState.reload+1 }
        })
      }
      console.log("login success: ", response)
    } catch (error) {
      console.log("login failed: ", error)
    }
  }
  /*---------- user login end ----------*/



  /*----------- user logout start ----------*/
  const logout = async () => {
    try {
      const response = await authApi().post('/account/logout/')
      if (response.data.success) {
        Cookies.remove('authToken', { path: '/' });
        Cookies.remove('userId', { path: '/' });
        //update user state
        setState((preveState) => {
          return { ...preveState, reload: preveState.reload+1 }
        })
      }
      console.log("logout success: ", response)
    } catch (error) {
      console.log("logout error: ", error)
    }
  }
  /*----------- user logout end ----------*/



  //component return function
  return (
    <GlobalContext.Provider value={{ theme, setTheme, open, setOpen, login, logout, user, state, setState}}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
