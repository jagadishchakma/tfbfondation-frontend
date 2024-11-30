import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';
import { themes } from '../../utilities/AppTheme';


const Home = () => {
    const {theme, setTheme} = useContext(GlobalContext);
    const changeTheme = () => {
        if(theme.themeName == 'light'){
            setTheme(themes.dark);
        }else{
            setTheme(themes.light);
        }
    }
    return (
        <div>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <h1>TFB Foundaiton Home</h1>
            <Link to="/tfb/visions">Visit</Link>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    );
};

export default Home;