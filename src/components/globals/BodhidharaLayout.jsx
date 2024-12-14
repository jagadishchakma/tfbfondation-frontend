import { Outlet } from 'react-router-dom';
import topNavMenu from '../../data/bodhidara/bodhidhara_link';
import { BodhidharaContextProvider } from '../../contexts/BodhidharaContext';
import BodhidharaTopMenu from '../bodhidhara/BodhidharaTopMenu';


const BodhidharaLayout = () => {

    return (
        <BodhidharaContextProvider>
            <BodhidharaTopMenu navlink={topNavMenu}/>
            <Outlet/>
        </BodhidharaContextProvider>
    );
};

export default BodhidharaLayout;