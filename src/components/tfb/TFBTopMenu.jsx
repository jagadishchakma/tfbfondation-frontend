import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/global/topMenu.css';
import { useState, useRef, useEffect, useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { BodhidharaContext } from '../../contexts/BodhidharaContext';

const TFBTopMenu = ({ navlink }) => {
    const [activeTab, setActiveTab] = useState('');
    const tabListRef = useRef(null);
    const leftArrowRef = useRef(null);
    const rightArrowRef = useRef(null);

    const handleTabClick = (path) => {
        setActiveTab(path);
    };

    const handleScroll = () => {
        const tabList = tabListRef.current;
        const tabListWidth = tabList.offsetWidth;
        const tabListScrollWidth = tabList.scrollWidth;
        const scrollLeft = tabList.scrollLeft;

        if (tabListWidth >= tabListScrollWidth) {
            leftArrowRef.current.classList.remove('active');
            rightArrowRef.current.classList.remove('active');
        } else {
            if (scrollLeft <= 0) {
                leftArrowRef.current.classList.remove('active');
                rightArrowRef.current.classList.add('active');
            } else if (scrollLeft + tabListWidth >= tabListScrollWidth - 1) {
                leftArrowRef.current.classList.add('active');
                rightArrowRef.current.classList.remove('active');
            } else {
                leftArrowRef.current.classList.add('active');
                rightArrowRef.current.classList.add('active');
            }
        }
    };

    const scrollRight = () => {
        tabListRef.current.scrollLeft += 300;
        handleScroll();
    };

    const scrollLeft = () => {
        tabListRef.current.scrollLeft -= 300;
        handleScroll();
    };

    const handleMouseDown = (e) => {
        tabListRef.current.classList.add('dragging');
        const onMouseMove = (e) => {
            tabListRef.current.scrollLeft -= e.movementX;
            handleScroll();
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', () => {
            tabListRef.current.classList.remove('dragging');
            document.removeEventListener('mousemove', onMouseMove);
        });
    };

    //side effect
    const {pathname} = useLocation();
    useEffect(() => {
        const tabList = tabListRef.current;
        if (!tabList) return;
        setActiveTab(pathname)
        handleScroll();
        tabList.addEventListener('scroll', handleScroll);
    
        return () => {
          tabList.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const {theme} = useContext(GlobalContext);
    return (
        <nav style={{backgroundColor: theme.compoBgColor}}>
            <div className="tab-container sticky-top">
                <div className="stack-tab-container">
                    <div className="tab-bar">
                        <div
                            className="left-arrow"
                            ref={leftArrowRef}
                            onClick={scrollLeft}
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                        <ul className="tabs" ref={tabListRef} onMouseDown={handleMouseDown}>

                            {navlink.map((data) => (
                                <li key={data.id}>
                                    <Link
                                        className={`tab ${activeTab === data.path ? 'active' : ''}`}
                                        to={data.path}
                                        onClick={() => handleTabClick(data.path)}
                                        style={{color: theme.txtColor}}
                                    >
                                        {data.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div
                            className="right-arrow"
                            ref={rightArrowRef}
                            onClick={scrollRight}
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TFBTopMenu;
