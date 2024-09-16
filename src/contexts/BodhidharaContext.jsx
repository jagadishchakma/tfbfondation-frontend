import { createContext, useEffect, useState } from "react";

const BodhidharaContext = createContext();

const BodhidharaContextProvider = ({children}) => {
    const [activeTab, setActiveTab] = useState('');
    const [newsWriting, setNewsWriting] = useState(false);
    useEffect(()=>{
        setActiveTab('home')
    },[]);

    let stateObj = {
        activeTab,
        setActiveTab,
        newsWriting,
        setNewsWriting
    }
    return (
        <BodhidharaContext.Provider value={stateObj}>
            {children}
        </BodhidharaContext.Provider>
    )
}

export {BodhidharaContext, BodhidharaContextProvider};