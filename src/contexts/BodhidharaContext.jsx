import { createContext, useEffect, useState } from "react";

const BodhidharaContext = createContext();

const BodhidharaContextProvider = ({children}) => {
    const [news, setNews] = useState({});
    const [activeTab, setActiveTab] = useState('');
    const [newsWriting, setNewsWriting] = useState(false);
    useEffect(()=>{
        setActiveTab('home')
    },[]);

    let stateObj = {
        activeTab,
        setActiveTab,
        newsWriting,
        setNewsWriting,
        news,
        setNews
    }
    return (
        <BodhidharaContext.Provider value={stateObj}>
            {children}
        </BodhidharaContext.Provider>
    )
}

export {BodhidharaContext, BodhidharaContextProvider};