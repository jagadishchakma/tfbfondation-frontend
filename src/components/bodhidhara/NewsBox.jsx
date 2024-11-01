import '../../assets/css/bodhidhara/newsBox.css';
import Image from '../globals/Image';
import NewsPhoto from './NewsPhoto.jsx';
import NewsVideo from "./NewsVideo.jsx";
import time from "../../utilities/time.js"
import { useEffect, useState } from 'react';
import VideoFrame from './VideoFrame.jsx';
const NewsBox = ({ news }) => {
    const [activeMedia, setActiveMedia] = useState(null)
    useEffect(() => {
        if (news.fb_video_ids.length > 0) {
            setActiveMedia({ type: 'video', id: news.fb_video_ids[0] })
        } else if (news.fb_photo_ids.length > 0) {
            setActiveMedia({ type: 'photo', id: news.fb_photo_ids[0] })
        } else {
            setActiveMedia(null)
        }
    }, []);
    console.log(activeMedia)
    return (
        <>
            <div className="newsBox">
                <div className="newsBoxheader">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                            <div className="newsAuthProfile">
                                <Image src="https://media.licdn.com/dms/image/D5603AQFTu31FGC_8iA/profile-displayphoto-shrink_200_200/0/1694340966577?e=2147483647&v=beta&t=IvxBu2QjYwPjq7G-fNxyOcnkA213AgwTzXVxLtHn8oE" alt="user" width="50" height="50" />
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
                        <h1>জাদর এম্বা দুঃসময় চলের, রাজপথ চেলেহ ফাঁকা.</h1>
                        <h6><i className="fa-solid fa-table-columns"></i> Sammobaadi</h6>
                        <h6><i className="fa-regular fa-clock"></i> {time(news.created_at)} </h6>
                    </div>
                    <div className="newsAuthPara">
                        <p>সোশাল মিডিয়ায় আমরা উস্কানিমূলক বক্তব্য পরিহার করি। সংশোধন হই, সহনশীল হই।ব্যক্তিকে আক্রমণ নয় সমস্যাকে আক্রমণ করি। সমাধানের পথ খুঁজি , সংঘাত বন্ধ করি। পৃথিবীতে আমরা কেউ চিরস্থায়ী নয়। নিজে ভালো থাকি, অন্যকেও ভালো রাখি।কারন দিন শেষে আমরা সবাই মানুষ, একই দেশের নাগরিক।।
                        </p>
                    </div>
                    <div className="newsMediaDisplay" style={{ height: activeMedia && activeMedia.type == 'video' ? '300px' : '400px' }}>
                        {
                            activeMedia && activeMedia.type == "video" && <NewsVideo videoId={activeMedia.id} height={300} width="100%" />
                        }
                        {
                            activeMedia && activeMedia.type == "photo" && <NewsPhoto imageId={activeMedia.id} height={400} width="100%" />
                        }
                    </div>
                    <div className="newsMediaList mt-2">
                        <div className="d-flex justify-content-start gap-2">

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

                <div className="newsBoxFooter mt-5">
                    <hr />
                    <div className="d-flex justify-content-start gap-4 align-items-center">
                        <div className="bookmark">
                            <i class="fa-regular fa-bookmark"></i>
                        </div>
                        <div className="react">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div className="comment">
                            <i class="fa-regular fa-comment"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsBox;