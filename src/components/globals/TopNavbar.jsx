import tfb_logo from "../../assets/images/tfb_logo.png";
import buddha from "../../assets/images/buddha.png";
import dharma from "../../assets/images/dharma.png";
import sangha from "../../assets/images/sangha.png";
import notification from "../../assets/images/notification.png";
import plus_user from "../../assets/images/plus_user.png";
import menu from "../../assets/images/menu.png";
import "../../assets/css/global/topNavbar.css";
import { Link } from "react-router-dom";

const TopNavbar = () => {
    return (
        <nav className="sticky-top top-nav-bar shadow-sm">
            <div className="container-fluid">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <a href=""><img src={tfb_logo} alt="TFB" width={60} height={60} /></a>
                    <ul className="d-flex flx-row justify-content-between align-items-center trisharan gap-5">
                        <li><img src={buddha} alt="TFB" width={30} height={30} /></li>
                        <li><img src={dharma} alt="TFB" width={30} height={30} /></li>
                        <li><img src={sangha} alt="TFB" width={30} height={30} /></li>
                    </ul>
                    <ul className="d-flex flx-row justify-content-between align-items-center trisharan gap-3">
                        <li><Link href="/"><img src={plus_user} alt="TFB" width={30} height={30} /></Link></li>
                        <li><Link href="/"><img src={notification} alt="TFB" width={30} height={30} /></Link></li>
                        <li><Link href="/"><img src={menu} alt="TFB" width={30} height={30} /></Link></li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
};

export default TopNavbar;