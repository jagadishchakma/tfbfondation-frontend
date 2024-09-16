import React, { useContext } from 'react';
import Image from '../globals/Image';
import '../../assets/css/bodhidhara/newsInputBox.css';
import flag from '../../assets/images/flag.png';
import {BodhidharaContext} from '../../contexts/BodhidharaContext';
import NewsWritingBox from './NewsWritingBox';

const NewsInputBox = () => {
   const {newsWriting,setNewsWriting} = useContext(BodhidharaContext);
    return (
        <>
            <div className="newsInputBox">
                <div className="d-flex justify-content-between align-items-center gap-3">
                    <div className="newsInputAuthProfile">
                        <Image src="https://media.licdn.com/dms/image/D5603AQFTu31FGC_8iA/profile-displayphoto-shrink_200_200/0/1694340966577?e=2147483647&v=beta&t=IvxBu2QjYwPjq7G-fNxyOcnkA213AgwTzXVxLtHn8oE" alt="user" width="50" height="50" />
                    </div>
                    <div className="newsInputAuthBox d-flex align-items-center" onClick={()=>setNewsWriting(true)}>
                        <div className="d-flex align-items-center gap-3 ps-3">
                            <Image src={flag} alt="flag" width="30" height="30"/>
                            <p>Write a article, post, news</p>
                        </div>
                    </div>
                </div>
            </div>
            {newsWriting && <NewsWritingBox/>}
        </>
    );
};

export default NewsInputBox;