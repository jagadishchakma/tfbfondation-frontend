import { Outlet } from 'react-router-dom';
import topNavMenu from '../../data/bodhidara/bodhidhara_link';
import { BodhidharaContextProvider } from '../../contexts/BodhidharaContext';
import BodhidharaToMenu from '../bodhidhara/BodhidharaToMenu';


const BodhidharaLayout = () => {
    return (
        <BodhidharaContextProvider>
            <BodhidharaToMenu navlink={topNavMenu}/>
            <Outlet/>
        </BodhidharaContextProvider>
    );
};

export default BodhidharaLayout;