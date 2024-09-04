import tfb_logo from "../../assets/images/tfb_logo2.png";
import home from "../../assets/images/home.png";
import member from "../../assets/images/member.png";
import news from "../../assets/images/news.png";
import aggriculture from "../../assets/images/aggriculture.png";
import culture from "../../assets/images/culture.png";
import "../../assets/css/global/asideNavbar.css";
import { Link, useLocation } from "react-router-dom";

const AsideNavbar = () => {
    const {pathname} = useLocation();
    console.log(pathname);
    return (
        <nav className="fixed-left">
            <ul className="sidebar-nav">
                <li>
                    <Link 
                    to="/" 
                    className={pathname === '/'?'active':''}>
                        <img src={home} alt="TFB" width={30} height={30} />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link 
                    to="/tfb" 
                    className={pathname == '/tfb'?'active':''}>
                        <img src={tfb_logo} alt="TFB" width={30} height={30} />
                        <span>TFB Foundation</span>
                        </Link>
                    </li>
                <li>
                    <Link 
                    to="/bodhidhara" 
                    className={pathname == '/bodhidhara'?'active':''}>
                        <img src={news} alt="TFB" width={30} height={30} />
                        <span>Bodhidhara</span>
                    </Link>
                </li>
                <li>
                    <Link 
                    to="/">
                        <img src={member} alt="TFB" width={30} height={30} />
                        <span>Member</span>
                    </Link>
                </li>
                <li>
                    <Link 
                    to="/">
                        <img src={aggriculture} alt="TFB" width={30} height={30} />
                        <span>Agriculture</span>
                    </Link>
                </li>
                <li>
                    <Link 
                    to="/">
                        <img src={culture} alt="TFB" width={30} height={30} />
                        <span>Buddhist Culture</span>
                    </Link>
                </li>
            </ul>
            <hr />
            <ul className="tfb-link">
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Privacy</Link></li>
                <li><Link to="/">Policy</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
            <p className="text-center">TFB &copy; 2024</p>
        </nav>
    );
};

export default AsideNavbar;