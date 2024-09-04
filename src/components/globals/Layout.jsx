import TopNavbar from './TopNavbar';
import AsideNavbar from './AsideNavbar';
import '../../assets/css/global/global.css';

const Layout = ({ children }) => {
    return (
        <main>
            <TopNavbar />
            <section className="main">
                {children}
            </section>
            <AsideNavbar />
        </main>
    );
};

export default Layout;