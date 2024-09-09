import React from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../components/tfb/Home';
import Visions from '../components/tfb/Visions';

const TfbFoundation = () => {
    const { pathname } = useLocation();
    switch (pathname) {
        case '/tfb':
            return <Home />
        case '/tfb/visions':
            return <Visions />
        default:
            return <div>404</div>;
    }
};

export default TfbFoundation;