import { Outlet } from 'react-router-dom';
import topNavMenu from '../../data/tfb/tfb_link';
import TFBTopMenu from '../tfb/TFBTopMenu';

const TFBLayout = () => {
    return (
        <div>
            <TFBTopMenu navlink={topNavMenu}/>
            <Outlet/>
        </div>
    );
};

export default TFBLayout;