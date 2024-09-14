import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import '../assets/css/global/routeNotFound.css';
import RouteNotFound from '../assets/images/notFound.jpeg';
import LoadingImage from '../components/globals/LoadingImage';

const NotFound = () => {
    const { theme } = useContext(GlobalContext);
    return (
        <div className="route-not-found">
            <div className="content-box" style={{ backgroundColor: theme.contentBgColor }}>
                <LoadingImage src={RouteNotFound} width={300} height={300} alt="NotFound"/>
                <h1 className="text-center">Oops!</h1>
                <p className="text-center text-warning">Error 404 - Page Not Found</p>
                <p className="text-center">The page you requested could not be be found.</p>
                <p className="text-center">We're working on it :)</p>
            </div>
        </div>
    );
};

export default NotFound;