import React from 'react';

const BookMark = () => {
    return (
        <div>
            <div className="d-flex align-items-center flex-column justify-content-center">
                <h6 className='text-center'>23k</h6>
                <div className="d-flex align-items-center justify-content-between gap-2 shadow-sm p-2 rounded">
                    <i className="fa-regular fa-bookmark"></i>
                    <span>Save</span>
                </div>
            </div>
        </div>
    );
};

export default BookMark;