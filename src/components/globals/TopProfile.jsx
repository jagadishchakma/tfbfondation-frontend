import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import Image from '../globals/Image';
import '../../assets/css/global/TopProfile.css';
import ImageBorder from './ImageBorder';

const TopProfile = () => {
    const [state, setState] = useState({
        menu: false,
        profilePress: 'no-change',
    })
    const { user, logout } = useContext(GlobalContext)

    return (
        <div
            className='top-profile'
            id={state.profilePress}
            onMouseDown={() => setState((prevState) => ({ ...prevState, profilePress: 'change' }))}
            onMouseUp={() => setState((prevState) => ({ ...prevState, profilePress: 'not-change' }))}
            onClick={() => setState((prevState) => ({ ...prevState, menu: !prevState.menu }))}
        >
            <Image src='https://media.licdn.com/dms/image/D5603AQFTu31FGC_8iA/profile-displayphoto-shrink_200_200/0/1694340966577?e=2147483647&v=beta&t=IvxBu2QjYwPjq7G-fNxyOcnkA213AgwTzXVxLtHn8oE' width='30' height='30' alt={user.username} />
            <div className='top-profile-toggler'><i className="fas fa-chevron-down"></i></div>
            <div id={state.menu ? 'show' : 'hide'}>
                <div className="top-profile-menu shadow">
                    <div>
                        <div className="d-flex align-items-center gap-4 shadow-sm p-1">
                            <ImageBorder width={30} height={30}><Image src='https://media.licdn.com/dms/image/D5603AQFTu31FGC_8iA/profile-displayphoto-shrink_200_200/0/1694340966577?e=2147483647&v=beta&t=IvxBu2QjYwPjq7G-fNxyOcnkA213AgwTzXVxLtHn8oE' width='30' height='30' alt={user.username} /></ImageBorder>
                            <h6>{user.first_name} {user.last_name}</h6>
                        </div>
                    </div>
                    <div className="logout" onClick={logout}>
                        <div className='d-flex align-items-center gap-4 p-1'>
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Log Out</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopProfile;