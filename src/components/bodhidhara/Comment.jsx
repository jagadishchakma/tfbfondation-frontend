import React from 'react';

const Comment = () => {
    return (
        <div>
            <div className="d-flex align-items-center flex-column justify-content-center">
                <h6 className='text-center'>1k</h6>
                <div className="d-flex align-items-center justify-content-between gap-2 shadow-sm p-2 rounded">
                    <i class="far fa-comment"></i>
                    <span>Comment</span>
                </div>
            </div>
        </div>
    );
};

export default Comment;