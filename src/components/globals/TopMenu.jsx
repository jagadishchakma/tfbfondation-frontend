import '../../assets/css/global/topMenu.css';
import navigationSlider from '../../utilities/topMenu.js';
import { useEffect } from 'react';

const TopMenu = ({ navlink }) => {
    useEffect(() => {
        navigationSlider();
    }, []);

    const getTopNavMenu = () => {
        const item = navlink.map((data) => {
            return <li key={data.id}><a className="tab" href={data.path}>{data.name}</a></li>
        })
        return item;
    }
    return (
        <div className="tab-container sticky-top">
            <div className="stack-tab-container">
                <div className="tab-bar">
                    <div className="left-arrow">
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <ul className="tabs">
                        <li><a className="tab active" href="#">Home</a></li>
                        {getTopNavMenu()}
                    </ul>
                    <div className="right-arrow active">
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;