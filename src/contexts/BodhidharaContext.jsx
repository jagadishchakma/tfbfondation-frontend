import { createContext, useEffect, useState } from "react";

const BodhidharaContext = createContext();

const BodhidharaContextProvider = ({children}) => {
    const [activeTab, setActiveTab] = useState('');
    useEffect(()=>{
        setActiveTab('home')
    },[]);
    return (
        <BodhidharaContext.Provider value={{activeTab,setActiveTab}}>
            {children}
        </BodhidharaContext.Provider>
    )
}

export {BodhidharaContext, BodhidharaContextProvider};