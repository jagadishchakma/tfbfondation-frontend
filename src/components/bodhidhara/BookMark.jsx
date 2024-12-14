import React, { useContext, useEffect, useRef, useState } from 'react';
import { authApi } from '../../utilities/api';
import { GlobalContext } from '../../contexts/GlobalContext';

const BookMark = ({ news }) => {
    const [state, setState] = useState({
        loading: false,
        saved: false,
        width: '',
        height: '',
    })
    const {user, checkUser} = useContext(GlobalContext);
    const divRef = useRef(null);
    useEffect(()=>{
        const { offsetWidth, offsetHeight} = divRef.current;
        setState(prevState => ({...prevState, width: offsetWidth, height: offsetHeight}))
    },[])
    useEffect(()=>{
        if(Object.keys(user).length > 0 && user.profile.favourites.includes(news.id)){
            setState((prevState)=>({...prevState, saved: true}))
        }else{
            setState((prevState)=>({...prevState, saved: false}))
        }
    },[user])

    
    const newsSaved = async () => {
        setState((prevState) => ({ ...prevState, loading: true }))
        const response = await authApi().put('/account/news_saved/', {
            news_id: news.id
        })
        if (response.status == 200) {
            setState((prevState) => ({ ...prevState, loading: false, saved: !prevState.saved }))
        }
    }
    return (
        <div>
            <div className="d-flex align-items-center flex-column justify-content-center">
                <h6 className='text-center'>23k</h6>
                <div className="flex cursor-pointer items-center gap-2 shadow-sm p-2 rounded" style={state.loading ? ({width: state.width, height:state.height, justifyContent:'center'}): ({justifyContent:'space-between'})} onClick={()=>checkUser(newsSaved)} ref={divRef}>
                    {
                        state.saved ? (
                            <>
                                <i className="fas fa-check-circle"></i>
                                <span>Saved</span>
                            </>
                        ) : state.loading ? (
                            <div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                            <>
                                <i className="fa-regular fa-bookmark"></i>
                                <span>Save</span>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default BookMark;