import React, { useEffect, useState } from 'react';
import Image from '../globals/Image';
import { api } from '../../utilities/api';
import ReplyInputBoxUi from './ReplyInputBoxUi';
import timeAgo from '../../utilities/time';

const Reply2 = ({reply1Id}) => {
    const [replies2, setReplies2] = useState([]);
    const [updatter, setUpdatter] = useState(0);

    useEffect(()=>{
        const loadReplies1 = async() => {
            const response = await api.get(`/bodhidhara/news/comment/replies2/${reply1Id}/`)
            if(response.data.length > 0){
                setReplies2(response.data);
            }
        }
        loadReplies1()
    }, [updatter])

    const reply2UI = (reply2) => (
        <div className="news-comments comment-2" key={reply2.id}>
            <div className="news-comment">
                <div className="d-flex gap-2">
                    <div className="commenter-img">
                        <Image src="https://media.licdn.com/dms/image/D5603AQFTu31FGC_8iA/profile-displayphoto-shrink_200_200/0/1694340966577?e=2147483647&v=beta&t=IvxBu2QjYwPjq7G-fNxyOcnkA213AgwTzXVxLtHn8oE" alt="user" width="40" height="40" />
                    </div>
                    <div className="commenter-info w-100">
                        <h3 className="commenter-name">Jagadish Chakma</h3>
                        <span className="comment-time">{timeAgo(reply2.created_at)}</span>
                        <p className="comment-text">{reply2.reply2}</p>
                        <ReplyInputBoxUi replyId={reply2.id} updatter={setUpdatter}/>
                    </div>
                </div>
            </div>
        </div>
    );

    return(
        <>
        <ReplyInputBoxUi reply1Id={reply1Id} updatter={setUpdatter}/>
        {
            replies2.map((reply2)=> reply2UI(reply2))
        }
        </>
    )

};

export default Reply2;