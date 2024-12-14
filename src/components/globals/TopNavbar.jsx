import tfb_logo from "../../assets/images/tfb_logo.png";
import buddha from "../../assets/images/buddha.png";
import dharma from "../../assets/images/dharma.png";
import sangha from "../../assets/images/sangha.png";
import plus_user from "../../assets/images/plus_user.png";
import menu from "../../assets/images/menu.png";
import "../../assets/css/global/topNavbar.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';
import Image from "./Image";
import SignUpLogin from "../account/SignUpLogin";
import TopProfile from "./TopProfile";
import ImageBorder from "./ImageBorder";

const TopNavbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [data, setData] = useState(null);
    const [length, setLength] = useState(null);

    useEffect(() => {
        if (windowWidth < 400) {
            setData(15);
            setLength(24);
        } else {
            setData(30);
            setLength(30)
        }
    }, [windowWidth]);

    const { theme, setOpen, user, setState } = useContext(GlobalContext);



    /*-----------conditionally ui rendering user status login,profile or signin START------------*/
    const getUserStatus = () => {
        //get notify user is have or not via length
        const userObjLength = Object.entries(user).length
        console.log('user object length: ', userObjLength)
        if (userObjLength > 0) {
            return <TopProfile />
        } else {
            return (
                <div onClick={() => setState((prevState)=>({...prevState, signupModal: true}))}><Image src={plus_user} alt="user" width={length} height={length} /></div>
            )
        }
    }
    /*-----------conditionally ui rendering user status login,profile or signin END------------*/

    return (
        <>
            <div className="top-nav-bar sticky-top shadow-sm" style={{ backgroundColor: theme.topBgColor }}>
                <nav className="nav-container">
                    <div className="container-fluid">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <div className="flex items-center navbar-brand gap-3 sm:ml-1">
                                <div><button onClick={() => setOpen(true)} style={{ border: 'none', backgroundColor: theme.topBgColor }}><Image src={menu} alt="TFB" width={length} height={length} /></button></div>
                                <a href="" className="brand-logo"><Image src={tfb_logo} alt="TFB" width={length} height={length} /></a>
                            </div>
                            <ul className="d-flex flx-row justify-content-between align-items-center trisharan gap-5" id="trisharan">
                                <li><ImageBorder width={data} height={data}><Image src={buddha} alt="TFB" width={data} height={data} /></ImageBorder></li>
                                <li><ImageBorder width={data} height={data}><Image src={dharma} alt="TFB" width={data} height={data} /></ImageBorder></li>
                                <li><ImageBorder width={data} height={data}><Image src={sangha} alt="TFB" width={data} height={data} /></ImageBorder></li>
                            </ul>
                            <div className="d-flex flx-row justify-content-between align-items-center trisharan gap-3 top-right-nav">
                                {getUserStatus()}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <SignUpLogin/>
        </>
    );
};

export default TopNavbar;