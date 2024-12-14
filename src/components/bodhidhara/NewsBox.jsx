import '../../assets/css/bodhidhara/newsBox.css';
import Image from '../globals/Image';
import NewsPhoto from './NewsPhoto.jsx';
import NewsVideo from "./NewsVideo.jsx";
import time from "../../utilities/time.js";
import { useEffect, useState } from 'react';
import VideoFrame from './VideoFrame.jsx';
import Reaction from './Reaction.jsx';
import Comment from './Comment.jsx';
import BookMark from './BookMark.jsx';
import View from './View.jsx';
import Cookies from 'js-cookie';
import { authApi, api } from '../../utilities/api.js';

const NewsBox = ({ news,commentDetails=null}) => {
    const [activeMedia, setActiveMedia] = useState(null)
    const [state, setState] = useState({})

    useEffect(() => {
        if (news.fb_video_ids.length > 0) {
            setActiveMedia({ type: 'video', id: news.fb_video_ids[0] })
        } else if (news.fb_photo_ids.length > 0) {
            setActiveMedia({ type: 'photo', id: news.fb_photo_ids[0] })
        } else {
            setActiveMedia(null)
        }
    }, []);
    
    /* ---------- NEWS VIEW COUNT START ---------- */
    const handleNewsViewCount = async (id) => {
        let token = Cookies.get('authToken')
        let userId = Cookies.get('userId')
        let newsViewCount = `newsViewCount${id}` // this is dynamic news views identity name

        let response = null // view response comming form the server
        let req_credential = {news_id: id}

        if (token && userId && !state[`newsViewCount${id}`]) { //if user authenticate and not have like this property on the state, then goes to count.
            response = await authApi().put('/bodhidhara/news/views/count/', req_credential)
            setState((prevState) => ({ ...prevState, [newsViewCount]: 1 }))
        } else if (!state[`newsViewCount${id}`]) { //if user not authenticate and not have like this property on the state, then goes to count.
            response = await api.put('/bodhidhara/news/views/count/', req_credential)
            setState((prevState) => ({ ...prevState, [newsViewCount]: 1 }))
        } else { // if like this property already have then not goes to count.
            setState((prevState) => ({ ...prevState, [newsViewCount]: 1 }))
        }
    }
    /* ---------- NEWS VIEW COUNT END ---------- */

    return (
        <>
            <div className="newsBox">
                <div className="newsBoxheader">
                    <div className="d-flex justify-content-between">
                        <div className="flex items-center gap-2">
                            <div className="newsAuthProfile">
                                <Image src="https://images.prothomalo.com/prothomalo-bangla%2F2024-03%2F3837b135-5996-4665-b731-b00d97d27b14%2F1e47d8a6_6c4f_4166_a839_f0942a4bd1e1.jpg?rect=0%2C0%2C1280%2C853&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.3" alt="user" width="50" height="50" />
                            </div>
                            <div>
                                <h5>Jagadish Chakma</h5>
                            </div>
                        </div>
                        <div>
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                </div>
                <div className="newsBoxBody">
                    <div className="newsAuthInfo">
                        <h1>বৌদ্ধদের ধর্মীয় পতাকা ছয়টি রং কেন ? এই ছয় রং কিসের প্রতীক ?</h1>
                        <h6><i className="fa-solid fa-table-columns"></i> Sammobaadi</h6>
                        <h6><i className="fa-regular fa-clock"></i> {time(news.created_at)} </h6>
                    </div>
                    <div className="newsAuthPara">
                        <p>সোশাল মিডিয়ায় আমরা উস্কানিমূলক বক্তব্য পরিহার করি। সংশোধন হই, সহনশীল হই।ব্যক্তিকে আক্রমণ নয় সমস্যাকে আক্রমণ করি। সমাধানের পথ খুঁজি , সংঘাত বন্ধ করি। পৃথিবীতে আমরা কেউ চিরস্থায়ী নয়। নিজে ভালো থাকি, অন্যকেও ভালো রাখি।কারন দিন শেষে আমরা সবাই মানুষ, একই দেশের নাগরিক।।
                        </p>
                    </div>
                    <div className="newsMediaDisplay" style={{ minHeight: activeMedia && activeMedia.type == 'video' ? '300px' : '400px' }} onClick={() => handleNewsViewCount(news.id)}>
                        {
                            activeMedia && activeMedia.type == "video" && <NewsVideo videoId={activeMedia.id} height={300} width="100%" />
                        }
                        {
                            activeMedia && activeMedia.type == "photo" && <NewsPhoto imageId={activeMedia.id} height={400} width="100%" />
                        }
                    </div>
                    <div className="newsMediaList mt-2" onClick={() => handleNewsViewCount(news.id)}>
                        <div className="flex justify-start gap-2">

                            {
                                news.fb_video_ids.map((item, index) => (
                                    <div className={`newsMediaOptions ${activeMedia && activeMedia.id == item ? 'mediaActive' : ''}`} key={index} onClick={() => setActiveMedia({ type: 'video', id: item })}>
                                        <i className="fa-solid fa-video"></i>
                                        <VideoFrame videoId={item} height="50px" width="50px" />
                                    </div>
                                ))
                            }
                            {
                                news.fb_photo_ids.map((item, index) => (
                                    <div className={`newsMediaOptions ${activeMedia && activeMedia.id == item ? 'mediaActive' : ''}`} key={index} onClick={() => setActiveMedia({ type: 'photo', id: item })}>
                                        <i className="fa-solid fa-camera"></i>
                                        <NewsPhoto imageId={item} height="50px" width="50px" />
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                </div>
                <hr className='my-4'/>
                <div className="newsBoxFooter">
                    <div className="d-flex justify-content-between align-items-center">
                        <Reaction news={news}/>
                        <Comment single_news={news}/>
                        <BookMark news={news}/>
                        <View news={news}/>
                    </div>
                    {commentDetails && commentDetails()}
                </div>
            </div>
        </>
    );
};

export default NewsBox;