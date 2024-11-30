import React, { useState } from 'react';
import CommentInputBoxUi from './CommentInputBoxUi';

const ReplyInputBoxUi = ({commentId=false, reply1Id=false, updatter}) => {
    const [state, setState] = useState({
        reply: false,
    })
    return (
        <>
            <div className="comment-reply" onClick={() => setState((prevState) => ({ ...prevState, reply: true }))}>
                <span><i className="fas fa-reply"></i> Reply</span>
            </div>
            {state.reply && <CommentInputBoxUi length={30} reply={true} setReply={setState} commentId={commentId} reply1Id={reply1Id} updatter={updatter}/>}
        </>
    );
};

export default ReplyInputBoxUi;