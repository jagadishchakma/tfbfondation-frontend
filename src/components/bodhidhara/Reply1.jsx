import React, { useEffect, useState } from 'react';
import Image from '../globals/Image';
import { api } from '../../utilities/api';
import ReplyInputBoxUi from './ReplyInputBoxUi';
import Reply2 from './Reply2';
import timeAgo from '../../utilities/time';

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

    const reply1UI = (reply1) => (
        <div className="news-comments comment-2" key={reply1.id}>
            <div className="news-comment">
                <div className="d-flex gap-2">
                    <div className="commenter-img">
                        <Image src="https://media.licdn.com/dms/image/D5603AQFTu31FGC_8iA/profile-displayphoto-shrink_200_200/0/1694340966577?e=2147483647&v=beta&t=IvxBu2QjYwPjq7G-fNxyOcnkA213AgwTzXVxLtHn8oE" alt="user" width="40" height="40" />
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
        <ReplyInputBoxUi commentId={commentId} updatter={setUpdatter}/>
        {replies1.map((reply1)=> reply1UI(reply1))}
        </>
    )

};

export default Reply1;