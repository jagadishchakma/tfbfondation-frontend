import TopNavbar from './TopNavbar';
import AsideNavbar from './AsideNavbar';
import '../../assets/css/global/global.css';
import { Outlet, useRouteError } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import BottomNavbar from './BottomNavbar';
import NotFound from '../../pages/NotFound';

const Layout = () => {
    const {theme, open, setOpen} = useContext(GlobalContext);
    const errorHandler = useRouteError();
    return (
        <main style={{backgroundColor:theme.bgColor}}>
            <TopNavbar />
            <div className="row main-container">
                <div className="col-3 p-0" id={open?'left-aside-open':'left-aside-close'} onClick={()=>setOpen(false)}>
                    <AsideNavbar />
                </div>
                <div className="col-6 p-0" id="mid-body">
                    <section className="main">
                    {errorHandler && errorHandler.error ? <NotFound /> : <Outlet />}
                    </section>
                </div>
                <div className="col-3 p-0" id="right-aside">
                    
                </div>
            </div>
            <BottomNavbar/>
        </main>
    );
};

export default Layout;