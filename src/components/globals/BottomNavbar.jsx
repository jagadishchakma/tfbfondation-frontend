import { Link } from 'react-router-dom';
import '../../assets/css/global/bottomNavbar.css';
import HomeIcon from '@mui/icons-material/Home';
import Image from './Image';
import Logo from '../../assets/images/tfb_logo.png';
import News from '../../assets/images/news.png';
import Banabhante from '../../assets/images/banabhante.png';


const BottomNavbar = () => {
    return (
        <nav className="bottom-navbar">
            <div className="d-flex justify-content-around align-items-center h-100">
                <Link to="/" className="btm-nav-home">
                    <HomeIcon />
                </Link>
                <Link to="/tfb" className="btm-nav-tfb btm-nav">
                    <Image src={Logo} width={40} height={40} alt="TFB"/>
                    <h6>TFB</h6>
                </Link>
                <Link to="/tfb" className="btm-nav-tfb btm-nav">
                    <Image src={News} width={40} height={40} alt="TFB"/>
                    <h6>Bodhidhara</h6>
                </Link>
              
                <Link to="/tfb" className="btm-nav-tfb btm-nav">
                    
                </Link>
                <Link to="/tfb" className="btm-nav-tfb btm-nav">
                    <Image src={Logo} width={40} height={40} alt="TFB"/>
                    <h6>TFB</h6>
                </Link>
                <Link to="/tfb" className="btm-nav-tfb btm-nav">
                    <Image src={Banabhante} width={40} height={40} alt="Vante"/>
                    <h6>Banabhante</h6>
                </Link>
            </div>
        </nav>
    );
};

export default BottomNavbar;