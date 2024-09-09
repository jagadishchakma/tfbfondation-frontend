import TopNavbar from './TopNavbar';
import AsideNavbar from './AsideNavbar';
import '../../assets/css/global/global.css';
import { Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import BottomNavbar from './BottomNavbar';

const Layout = () => {
    const {theme, open, setOpen} = useContext(GlobalContext);
    return (
        <main style={{backgroundColor:theme.bgColor}}>
            <TopNavbar />
            <div className="row main-container">
                <div className="col-2 p-0" id={open?'left-aside-open':'left-aside-close'} onClick={()=>setOpen(false)}>
                    <AsideNavbar />
                </div>
                <div className="col-8 p-0" id="mid-body">
                    <section className="main">
                        <Outlet />
                    </section>
                </div>
                <div className="col-2 p-0" id="right-aside">
                    
                </div>
            </div>
            <BottomNavbar/>
        </main>
    );
};

export default Layout;