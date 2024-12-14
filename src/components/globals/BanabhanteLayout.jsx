import { Outlet } from 'react-router-dom';
import topNavMenu from '../../data/banabhante/banabhante_link';
import { BanabhanteContextProvider } from '../../contexts/BanabhanteContext';
import BanabhanteTopMenu from '../banabhante/BanabhanteTopMenu';


const BanabhanteLayout = () => {
    return (
        <BanabhanteContextProvider>
            <BanabhanteTopMenu navlink={topNavMenu}/>
            <Outlet/>
        </BanabhanteContextProvider>
    );
};
export default BanabhanteLayout;