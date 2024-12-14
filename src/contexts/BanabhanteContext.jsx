import { createContext, useEffect, useState } from "react";
const BanabhanteContext = createContext();

const BanabhanteContextProvider = ({children}) => {
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
        <BanabhanteContext.Provider value={stateObj}>
            {children}
        </BanabhanteContext.Provider>
    )
}

export {BanabhanteContext, BanabhanteContextProvider};