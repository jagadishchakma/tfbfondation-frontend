import tfb_logo from "../../assets/images/tfb_logo2.png";
import home from "../../assets/images/home.png";
import member from "../../assets/images/member.png";
import news from "../../assets/images/news.png";
import aggriculture from "../../assets/images/aggriculture.png";
import culture from "../../assets/images/culture.png";
import banabhante from "../../assets/images/banabhante.png";
import "../../assets/css/global/asideNavbar.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Image from "./Image";

const AsideNavbar = () => {
    const { pathname: fullpath } = useLocation();
    const segments = fullpath.split('/').filter(Boolean);
    const pathname = segments[0] || '/';

    const { theme } = useContext(GlobalContext);

    //handle propgation
    const handleDrawerClick = (event) => {
        if (event.target.closest('a')) {
            return;
        }
        event.stopPropagation();
    };
    return (
        <nav className="aside-bar" style={{ backgroundColor: theme.compoBgColor }} onClick={handleDrawerClick}>
            <div className="sidebar-nav">
                <div className="sidebar-menu">
                    <ul className="sidebar-nav-menu">
                        <li>
                            <Link
                                to="/"
                                className={pathname === '/' ? 'active' : ''}
                                style={{ color: theme.txtColor }}
                            >
                                <Image src={home} alt="TFB" width={30} height={30} />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/tfb"
                                className={pathname == 'tfb' ? 'active' : ''} style={{ color: theme.txtColor }}>
                                <Image src={tfb_logo} alt="TFB" width={30} height={30} />
                                <span>TFB Foundation</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/bodhidhara"
                                className={pathname == 'bodhidhara' ? 'active' : ''} style={{ color: theme.txtColor }}>
                                <Image src={news} alt="TFB" width={30} height={30} />
                                <span>Bodhidhara</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/" style={{ color: theme.txtColor }}>
                                <Image src={member} alt="TFB" width={30} height={30} />
                                <span>Member</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/" style={{ color: theme.txtColor }}>
                                <Image src={aggriculture} alt="TFB" width={30} height={30} />
                                <span>Agriculture</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/" style={{ color: theme.txtColor }}>
                                <Image src={culture} alt="TFB" width={30} height={30} />
                                <span>Buddhist Culture</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/banabhante" style={{ color: theme.txtColor }}>
                                <Image src={banabhante} alt="TFB" width={30} height={30} />
                                <span>Banabhante</span>
                            </Link>
                        </li>
                    </ul>
                    <hr />
                    <ul className="tfb-link">
                        <li><Link to="/" style={{ color: theme.txtColor }}>About</Link></li>
                        <li><Link to="/" style={{ color: theme.txtColor }}>Privacy</Link></li>
                        <li><Link to="/" style={{ color: theme.txtColor }}>Policy</Link></li>
                        <li><Link to="/" style={{ color: theme.txtColor }}>Contact</Link></li>
                    </ul>
                    <p className="tfb-copyright">TFB &copy; 2024</p>
                </div>
            </div>
        </nav>
    );
};

export default AsideNavbar;