import React, { useContext, useEffect, useState } from 'react';
import Image from '../globals/Image';
import { api } from '../../utilities/api';
import ReplyInputBoxUi from './ReplyInputBoxUi';
import Reply2 from './Reply2';
import timeAgo from '../../utilities/time';
import { GlobalContext } from '../../contexts/GlobalContext';

const Reply1 = ({commentId}) => {
    const [replies1, setReplies1] = useState([]);
    const [updatter, setUpdatter] = useState(0);

    useEffect(()=>{
        const loadReplies1 = async() => {
            const response = await api.get(`/bodhidhara/news/comment/replies1/${commentId}/`)
            if(response.data.length > 0){
                setReplies1(response.data);
            }
        }
        loadReplies1()
    }, [updatter])

    const {user} = useContext(GlobalContext)
    const reply1UI = (reply1) => (
        <div className="news-comments comment-2" key={reply1.id}>
            <div className="news-comment">
                <div className="d-flex gap-2">
                    <div className="commenter-img">
                        <Image src="https://images.prothomalo.com/prothomalo-bangla%2F2024-03%2F3837b135-5996-4665-b731-b00d97d27b14%2F1e47d8a6_6c4f_4166_a839_f0942a4bd1e1.jpg?rect=0%2C0%2C1280%2C853&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.3" alt="user" width="40" height="40" />
                    </div>
                    <div className="commenter-info w-100">
                        <h3 className="commenter-name">Jagadish Chakma</h3>
                        <span className="comment-time">{timeAgo(reply1.created_at)}</span>
                        <p className="comment-text">{reply1.reply1}</p>
                        <Reply2 reply1Id={reply1.id}/>
                    </div>
                </div>
            </div>
        </div>
    );

    return(
        <>
        {(Object.keys(user).length > 0) && <ReplyInputBoxUi commentId={commentId} updatter={setUpdatter}/>}
        {replies1.map((reply1)=> reply1UI(reply1))}
        </>
    )

};

export default Reply1;