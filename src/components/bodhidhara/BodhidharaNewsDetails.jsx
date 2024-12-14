import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NewsBox from './NewsBox';
import { BodhidharaContext } from '../../contexts/BodhidharaContext';
import { Button } from '@mui/material';
import Image from '../globals/Image';
import '../../assets/css/bodhidhara/comment.css';
import CommentInputBoxUi from './CommentInputBoxUi';
import { api } from '../../utilities/api';
import Reply1 from './Reply1';
import timeAgo from '../../utilities/time';
import { GlobalContext } from '../../contexts/GlobalContext';

const BodhidharaNewsDetails = () => {
  const [singleNews, setSignleNews] = useState({});
  const [comments, setComments] = useState([]);
  const [updatter, setUpdatter] = useState(0);


  /* ---------- BODHIDHARA NEWS COMMENT LOAD START ---------- */
  const { id } = useParams()
  useEffect(() => {
    const loadComments = async () => {
      const comments = await api.get(`/bodhidhara/news/comments/${id}/`)
      if (comments.data.length > 0) {
        setComments(comments.data)
      }
    }
    loadComments()
  }, [updatter])
  /* ---------- BODHIDHARA NEWS COMMENT LOAD END ---------- */

  /* ---------- BODHIDHARA SIGNLE NEWS LOAD IF NOT HAVE START ---------- */
  const { news } = useContext(BodhidharaContext);
  const { user, checkUser } = useContext(GlobalContext)
  useEffect(() => {
    if (Object.keys(news).length < 1) {
      const loadSingleNews = async () => {
        const response = await api.get(`/bodhidhara/news/${id}/`)
        if (response.status == 200) {
          setSignleNews(response.data)
        }
      }
      loadSingleNews()
    } {
      setSignleNews(news)
    }
  }, [])
  /* ---------- BODHIDHARA SIGNLE NEWS LOAD IF NOT HAVE END ---------- */




  //scrollbar
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  //back button
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/bodhidhara'); // Goes back to the previous page in history
  };



  /* ---------- ALL COMMENTS LOAD HERE START ---------- */
  const commentDetails = () => {
    return (
      <>
        <hr />
        {
          (Object.keys(user).length > 0) ? (
            <>
              <CommentInputBoxUi length={50} padding="10px" updatter={setUpdatter} />
            </>
          ) : (
            <>
              <p className='text-center login-warn'>Please <span className='pointer' onClick={()=>checkUser(()=>{})}>login</span> for add comments</p>
            </>
          )
        }


        {
          comments.map((comment) => (
            <div className="news-comments comment-1" key={comment.id}>
              <div className="news-comment">
                <div className="d-flex gap-2">
                  <div className="commenter-img">
                    <Image src="https://images.prothomalo.com/prothomalo-bangla%2F2024-03%2F3837b135-5996-4665-b731-b00d97d27b14%2F1e47d8a6_6c4f_4166_a839_f0942a4bd1e1.jpg?rect=0%2C0%2C1280%2C853&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.3" alt="user" width="40" height="40" />
                  </div>
                  <div className="commenter-info w-100">
                    <h3 className="commenter-name">Jagadish Chakma</h3>
                    <span className="comment-time">{timeAgo(comment.created_at)}</span>
                    <p className="comment-text">{comment.comment}</p>
                    <Reply1 commentId={comment.id} />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </>
    )
  }
  /* ---------- ALL COMMENTS LOAD HERE END ---------- */


  return (
    <>
      <Button className="m-2" variant="contained" onClick={goBack}>Go Back</Button>
      {(Object.keys(singleNews).length > 0) && <NewsBox news={singleNews} commentDetails={commentDetails} />}
    </>
  );
};

export default BodhidharaNewsDetails;