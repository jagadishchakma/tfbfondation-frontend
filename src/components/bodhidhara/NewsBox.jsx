import '../../assets/css/bodhidhara/newsBox.css';
import Image from '../globals/Image';
import NewsVideo from "./NewsVideo.jsx";
const NewsBox = () => {
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
                        <h6><i className="fa-regular fa-clock"></i> 2 days ago</h6>
                    </div>
                    <div className="newsAuthPara">
                        <p>সোশাল মিডিয়ায় আমরা উস্কানিমূলক বক্তব্য পরিহার করি। সংশোধন হই, সহনশীল হই।ব্যক্তিকে আক্রমণ নয় সমস্যাকে আক্রমণ করি। সমাধানের পথ খুঁজি , সংঘাত বন্ধ করি। পৃথিবীতে আমরা কেউ চিরস্থায়ী নয়। নিজে ভালো থাকি, অন্যকেও ভালো রাখি।কারন দিন শেষে আমরা সবাই মানুষ, একই দেশের নাগরিক।।
                        </p>
                        <NewsVideo/>
                    </div>
                </div>
                <div className="newsBoxFooter">

                </div>
            </div>
        </>
    );
};

export default NewsBox;