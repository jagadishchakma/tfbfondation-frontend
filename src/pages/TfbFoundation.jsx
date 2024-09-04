import React from 'react';
import TopMenu from '../components/globals/TopMenu';
import tfb_menu from '../utilities/tfb_link.js';

const TfbFoundation = () => {
    return (
        <>
            <TopMenu navlink={tfb_menu}/>
            <h1>TFB Foundation</h1>
        </>
    );
};

export default TfbFoundation;