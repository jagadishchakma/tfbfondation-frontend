import tfb_logo from "../../assets/images/tfb_logo.png";
import buddha from "../../assets/images/buddha.png";
import dharma from "../../assets/images/dharma.png";
import sangha from "../../assets/images/sangha.png";
import notification from "../../assets/images/notification.png";
import plus_user from "../../assets/images/plus_user.png";
import menu from "../../assets/images/menu.png";
import "../../assets/css/global/topNavbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';
import Image from "./Image";
import SignUpLogin from "../account/SignUpLogin";

const TopNavbar = () => {
    const [modelOpen, setModelOpen] = useState(false);
    const { theme, setOpen } = useContext(GlobalContext);
    return (
        <>
            <div className="top-nav-bar sticky-top shadow-sm" style={{ backgroundColor: theme.topBgColor }}>
                <nav className="nav-container">
                    <div className="container-fluid">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <a href="" className="brand-logo"><Image src={tfb_logo} alt="TFB" width={50} height={50} /></a>
                            <ul className="d-flex flx-row justify-content-between align-items-center trisharan gap-5" id="trisharan">
                                <li><Image src={buddha} alt="TFB" width={30} height={30} /></li>
                                <li><Image src={dharma} alt="TFB" width={30} height={30} /></li>
                                <li><Image src={sangha} alt="TFB" width={30} height={30} /></li>
                            </ul>
                            <ul className="d-flex flx-row justify-content-between align-items-center trisharan gap-3 top-right-nav">
                                <li onClick={()=>setModelOpen(true)}><Image src={plus_user} alt="TFB" width={30} height={30} /></li>
                                <li><Link href="/"><Image src={notification} alt="TFB" width={30} height={30} /></Link></li>
                                <li><button onClick={() => setOpen(true)} style={{ border: 'none', backgroundColor: theme.topBgColor }}><Image src={menu} alt="TFB" width={30} height={30} /></button></li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
            <SignUpLogin open={modelOpen} close={setModelOpen}/>
        </>
    );
};

export default TopNavbar;