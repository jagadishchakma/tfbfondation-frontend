import { Link } from 'react-router-dom';
import '../../assets/css/global/bottomNavbar.css';
import HomeIcon from '@mui/icons-material/Home';
import Image from './Image';
import Logo from '../../assets/images/tfb_logo.png';
import News from '../../assets/images/news.png';
import Banabhante from '../../assets/images/banabhante.png';
import member from "../../assets/images/member.png";


const BottomNavbar = () => {
    return (
        <nav className="bottom-navbar shadow-xl border-t-[1px] border-gray-200">
            <div className="d-flex justify-content-around align-items-center h-100">
                <Link to="/tfb" className="btm-nav-tfb btm-nav">
                    <Image src={Logo} width={24} height={24} alt="TFB"/>
                    <h6 className='text-gray-500 text-sm'>TFB</h6>
                </Link>
                <Link to="/tfb" className="btm-nav-tfb btm-nav">
                    <Image src={News} width={24} height={24} alt="TFB"/>
                    <h6 className='text-gray-500 text-sm'>Bodhidhara</h6>
                </Link>
              
                <Link to="/" className="btm-nav-tfb btm-nav text-white relative top-[-23px] !bg-[#0866ff] p-1 !rounded-full">
                    <HomeIcon />
                </Link>
                <Link to="/tfb" className="btm-nav-tfb btm-nav">
                    <Image src={member} width={24} height={24} alt="TFB"/>
                    <h6 className='text-gray-500 text-sm'>Member</h6>
                </Link>
                <Link to="/tfb" className="btm-nav-tfb btm-nav">
                    <Image src={Banabhante} width={24} height={24} alt="Vante"/>
                    <h6 className='text-gray-500 text-sm'>Banabhante</h6>
                </Link>
            </div>
        </nav>
    );
};

export default BottomNavbar;