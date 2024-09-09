import tfb_logo from "../../assets/images/tfb_logo.png";
import buddha from "../../assets/images/buddha.png";
import dharma from "../../assets/images/dharma.png";
import sangha from "../../assets/images/sangha.png";
import notification from "../../assets/images/notification.png";
import plus_user from "../../assets/images/plus_user.png";
import menu from "../../assets/images/menu.png";
import "../../assets/css/global/topNavbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from '../../contexts/GlobalContext';

const TopNavbar = () => {
    const {theme, setOpen} = useContext(GlobalContext)
    return (
        <div className="top-nav-bar sticky-top shadow-sm" style={{backgroundColor: theme.topBgColor}}>
            <nav className="nav-container">
                <div className="container-fluid">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <a href="" className="brand-logo"><img src={tfb_logo} alt="TFB" width={60} height={60} /></a>
                        <ul className="d-flex flx-row justify-content-between align-items-center trisharan gap-5" id="trisharan">
                            <li><img src={buddha} alt="TFB" width={30} height={30} /></li>
                            <li><img src={dharma} alt="TFB" width={30} height={30} /></li>
                            <li><img src={sangha} alt="TFB" width={30} height={30} /></li>
                        </ul>
                        <ul className="d-flex flx-row justify-content-between align-items-center trisharan gap-3">
                            <li><Link href="/"><img src={plus_user} alt="TFB" width={30} height={30} /></Link></li>
                            <li><Link href="/"><img src={notification} alt="TFB" width={30} height={30} /></Link></li>
                            <li><Link href="/" onClick={()=> setOpen(true)}><img src={menu} alt="TFB" width={30} height={30} /></Link></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default TopNavbar;