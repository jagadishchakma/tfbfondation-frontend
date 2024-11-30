import { useRef, useState } from "react"
import { Button, CircularProgress } from '@mui/material';
import Image from "../globals/Image";
import { authApi } from "../../utilities/api";
import { useParams } from "react-router-dom";

/* ---------- comment input box ui start ---------- */
const CommentInputBoxUi = ({ length, reply = false, setReply = null, padding = "0px 5px", commentId = false, reply1Id = false, updatter }) => {
    const [comment, setComment] = useState('')
    const [state, setState] = useState({
        loading: false,
        buttonsShow: reply,
    })


    //handle comment
    const textareaRef = useRef(null);

    // Function to adjust the height of the textarea
    const handleCommentChange = (event) => {
        setComment(event.target.value);

        // Reset height to recalculate properly
        textareaRef.current.style.height = `${length}px`;
        // Adjust height based on the scroll height
        textareaRef.current.style.height = `${Math.max(textareaRef.current.scrollHeight, length)}px`;
    };


    /* ---------- COMMENT SUBMITING START ---------- */
    const { id } = useParams()
    const handleCommentSubmit = async () => {
        setState({ ...state, loading: true });
        if (commentId) {
            const response = await authApi().post(`/bodhidhara/news/comment/reply1/${commentId}/`, {
                reply1: comment
            })
            if (response.status == 201) {
                updatter((prevUpdate) => prevUpdate + 1)
                setState((prevState) => ({ ...prevState, loading: false, buttonsShow: false }))
                setComment('')
                setReply(false)
            }
        } else if (reply1Id) {
            const response = await authApi().post(`/bodhidhara/news/comment/reply2/${reply1Id}/`, {
                reply2: comment
            })
            if (response.status == 201) {
                updatter((prevUpdate) => prevUpdate + 1)
                setState((prevState) => ({ ...prevState, loading: false, buttonsShow: false }))
                setComment('')
                setReply(false)
            }
        } else {
            const response = await authApi().post(`/bodhidhara/news/comment/${id}/`, {
                comment: comment
            })
            if (response.status == 201) {
                updatter((prevUpdate) => prevUpdate + 1)
                setState((prevState) => ({ ...prevState, loading: false, buttonsShow: false }))
                setComment('')
            }
        }
    }
    /* ---------- COMMENT SUBMITING END ---------- */


    /* ---------- BUTTON OF ON START ---------- */
    const hideShowCommentInput = () => {
        if (reply) {
            setReply(false)
        } else {
            textareaRef.current.style.height = `${length}px`;
            setComment('')
            setState((prevState) => ({ ...prevState, buttonsShow: false }))
        }
    }
    const buttons = () => {
        return (
            <>
                <Button variant="contained" color='danger' size='small' onClick={hideShowCommentInput}>Cancel</Button>
                <Button variant='contained' color='info' size='small' disabled={!(/\S/.test(comment))} onClick={handleCommentSubmit}>Submit</Button>
            </>
        )
    }
    /* ---------- BUTTON OFF ON END ---------- */

    return (
        <div className="add-comment mb-2">
            <div className="d-flex gap-2">
                <div className="commenter">
                    <Image src="https://media.licdn.com/dms/image/D5603AQFTu31FGC_8iA/profile-displayphoto-shrink_200_200/0/1694340966577?e=2147483647&v=beta&t=IvxBu2QjYwPjq7G-fNxyOcnkA213AgwTzXVxLtHn8oE" alt="user" width={length} height={length} />
                </div>
                <div className="w-100 comment-box">
                    <div>
                        <textarea
                            ref={textareaRef}
                            value={comment}
                            onChange={handleCommentChange}
                            rows={1} // Set the initial number of rows
                            style={{
                                width: '100%',
                                height: `${length}px`,
                                resize: 'none', // Disable manual resizing
                                overflow: 'hidden', // Hide scrollbars
                                boxSizing: 'border-box', // Include padding and border in the height calculation
                                lineHeight: '1.5', // Consistent line height
                                padding: padding // Consistent padding
                            }}
                            placeholder="Add a comment..."
                            onFocus={() => setState((prevState) => ({ ...prevState, buttonsShow: true }))}
                            disabled={state.loading}
                        />
                    </div>
                    <div className="d-flex justify-content-end gap-2">
                        {
                            state.loading ? <CircularProgress size="30px" /> : state.buttonsShow && buttons()

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentInputBoxUi
/* ---------- comment input box ui end ---------- */
