import React from 'react';
import TopMenu from './TopMenu';
import { Outlet } from 'react-router-dom';
import topNavMenu from '../../data/tfb/tfb_link';

const TFBLayout = () => {
    return (
        <div>
            <TopMenu navlink={topNavMenu}/>
            <Outlet/>
        </div>
    );
};

export default TFBLayout;