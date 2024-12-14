import { useContext, useEffect, useState } from 'react';
import '../../assets/css/bodhidhara/reaction.css';
import { authApi } from '../../utilities/api';
import { GlobalContext } from '../../contexts/GlobalContext';

const Reaction = ({news}) => {
    const [state, setState] = useState({
        reaction: false,
    })
    const {user, checkUser} = useContext(GlobalContext)
    
    useEffect(()=>{
        if(Object.keys(user).length > 0 && news.reacts.includes(user.id)){
            setState((prevState)=>({...prevState, reaction: true}))
        }else{
            setState((prevState)=>({...prevState, reaction: false}))
        }
    },[user])

    const handelReact = async () => {
        await authApi().put('/bodhidhara/news/love/react/', {
            news_id: news.id
        })
        setState((prevState)=>({...prevState, reaction: !prevState.reaction}))
    }
    return (
        <div>
            <div className="d-flex align-items-center flex-column justify-content-center">
                <h6 className='text-center'>23k</h6>
                <div className={`d-flex ${state.reaction?'text-red-500':''} cursor-pointer align-items-center justify-content-between gap-2 shadow-sm p-2 rounded`} onClick={()=>checkUser(handelReact)}>
                    <span><i className="fas fa-heart"></i></span>
                    <span>Love</span>
                </div>
            </div>
        </div>
    );
};

export default Reaction;