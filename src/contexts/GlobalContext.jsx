import { createContext, useState, useEffect } from 'react';
import { themes } from '../utilities/AppTheme';


const GlobalContext = createContext();
let activeTheme = localStorage.getItem('theme');//theme localstorage

const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes[activeTheme] || themes.light); // used for site theme
  const [open,setOpen] = useState(false); //used for aside toggler in mobile

  //theme management side effects
  useEffect(()=>{
   if(theme.themeName !== activeTheme){
      localStorage.setItem('theme', theme.themeName);
   }
   
  },[theme]);

  //component return function
  return (
    <GlobalContext.Provider value={{theme,setTheme, open, setOpen}}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
