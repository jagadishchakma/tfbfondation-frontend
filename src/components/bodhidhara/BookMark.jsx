import React, { useState } from 'react';
import { authApi } from '../../utilities/api';

const BookMark = ({ news }) => {
    const [state, setState] = useState({
        loading: false,
        saved: false,
    })
    const newsSaved = async () => {
        setState((prevState) => ({ ...prevState, loading: true }))
        const response = await authApi().post('/account/news/saved/', {
            news_id: news.id
        })
        if (response.data.status == 201) {
            setState((prevState) => ({ ...prevState, loading: false, saved: true }))
        }
    }
    return (
        <div>
            <div className="d-flex align-items-center flex-column justify-content-center">
                <h6 className='text-center'>23k</h6>
                <div className="d-flex align-items-center justify-content-between gap-2 shadow-sm p-2 rounded" onClick={newsSaved}>
                    <i className="fa-regular fa-bookmark"></i>
                    <span>Save</span>
                </div>
            </div>
        </div>
    );
};

export default BookMark;