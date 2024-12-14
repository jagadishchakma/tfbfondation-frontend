import { useContext, useRef, useState } from "react"
import { Button, CircularProgress } from '@mui/material';
import Image from "../globals/Image";
import { authApi } from "../../utilities/api";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

/* ---------- comment input box ui start ---------- */
const CommentInputBoxUi = ({ length, reply = false, setReply = null, padding = "0px 5px", commentId = false, reply1Id = false, updatter }) => {
    const [comment, setComment] = useState('')
    const [state, setState] = useState({
        loading: false,
        buttonsShow: reply,
    })


    //handle comment
    const textareaRef = useRef(null);
    const {checkUser} = useContext(GlobalContext)

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
                <Button variant='contained' color='info' size='small' disabled={!(/\S/.test(comment))} onClick={()=>checkUser(handleCommentSubmit)}>Submit</Button>
            </>
        )
    }
    /* ---------- BUTTON OFF ON END ---------- */

    return (
        <div className="add-comment mb-2">
            <div className="d-flex gap-2">
                <div className="commenter">
                    <Image src="https://images.prothomalo.com/prothomalo-bangla%2F2024-03%2F3837b135-5996-4665-b731-b00d97d27b14%2F1e47d8a6_6c4f_4166_a839_f0942a4bd1e1.jpg?rect=0%2C0%2C1280%2C853&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.3" alt="user" width={length} height={length} />
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
