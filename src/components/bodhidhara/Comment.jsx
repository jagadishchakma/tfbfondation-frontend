import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BodhidharaContext } from '../../contexts/BodhidharaContext';

const Comment = ({ single_news }) => {
    const navigate = useNavigate();
    const { setNews } = useContext(BodhidharaContext);

    const goToHome = () => {
        setNews(single_news);
        navigate(`/bodhidhara/news/${single_news.id}/`);
    };
    return (
        <div>
            <div className="d-flex align-items-center flex-column justify-content-center">
                <h6 className='text-center'>1k</h6>
                <div className="d-flex align-items-center justify-content-between gap-2 shadow-sm p-2 rounded" onClick={goToHome}>
                    <i className="far fa-comment"></i>
                    <span>Comment</span>
                </div>
            </div>
        </div>
    );
};

export default Comment;