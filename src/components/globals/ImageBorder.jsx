import React from 'react';
import '../../assets/css/global/imageBorder.css';

const ImageBorder = ({ children, width, height }) => {
    //level1
    let level1Width = width+3;
    let level1Height = height+3;
    //level2 
    let level2Width = level1Width + 3;
    let level2Height = level1Height + 3;
    //level3
    let level3Width = level2Width + 3;
    let level3Height = level2Height + 3;
    //level4
    let level4Width = level3Width + 3;
    let level4Height = level3Height + 3;
    //level5
    let level5Width = level4Width + 3;
    let level5Height = level4Height + 3;
    return (
        <div className='image-border' style={{ width: level5Width, height: level5Height, zIndex: '10', backgroundColor: '#f79400', borderRadius: '50%', position:'relative' }}>
            <div style={{ width: level4Width, height: level4Height, zIndex: '20', backgroundColor: '#f7f7f7', borderRadius: '50%', position:'absolute', top:'50%', left: '50%', transform:'translate(-50%,-50%)' }}>
                <div style={{ width: level3Width, height: level3Height, zIndex: '30', backgroundColor: '#e61923', borderRadius: '50%', position:'absolute', top:'50%', left: '50%', transform:'translate(-50%,-50%)' }}>
                    <div style={{ width: level2Width, height: level2Height, zIndex: '40', backgroundColor: '#f5d800', borderRadius: '50%', position:'absolute', top:'50%', left: '50%', transform:'translate(-50%,-50%)' }}>
                        <div style={{ width: level1Width, height: level1Height, zIndex: '50', backgroundColor: '#0016a3', borderRadius: '50%', position:'absolute', top:'50%', left: '50%', transform:'translate(-50%,-50%)' }}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageBorder;