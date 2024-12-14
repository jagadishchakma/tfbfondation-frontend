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
                        <Image src="https://images.prothomalo.com/prothomalo-bangla%2F2024-03%2F3837b135-5996-4665-b731-b00d97d27b14%2F1e47d8a6_6c4f_4166_a839_f0942a4bd1e1.jpg?rect=0%2C0%2C1280%2C853&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.3" alt="user" width="50" height="50" />
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