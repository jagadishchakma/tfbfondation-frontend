import React from 'react';

const View = ({news}) => {
    return (
        <div>
            <div className="d-flex align-items-center flex-column justify-content-center">
                <h6 className='text-center'>{news.views.length}</h6>
                <div className="d-flex align-items-center justify-content-between gap-2 shadow-sm p-2 rounded">
                    <i class="far fa-eye"></i>
                    <span>View</span>
                </div>
            </div>
        </div>
    );
};

export default View;