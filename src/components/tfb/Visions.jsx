import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

const Visions = () => {
    const {theme} = useContext(GlobalContext);
    return (
        <div className="content-box" style={{backgroundColor: theme.contentBgColor}}>
           <p> TFB Visions, a core initiative of the Trisharan Foundation of Bangladesh (TFB), is dedicated to fostering sustainable development, social justice, and community empowerment. As a non-profit organization, TFB Visions aims to create lasting impact through various programs focused on education, healthcare, and economic empowerment. By collaborating with local communities and stakeholders, the initiative seeks to address critical challenges such as poverty, inequality, and environmental sustainability. Through innovative solutions and grassroots engagement, TFB Visions strives to build a brighter, more inclusive future for all, particularly the underprivileged sectors of society in Bangladesh.</p>
           <p> TFB Visions, a core initiative of the Trisharan Foundation of Bangladesh (TFB), is dedicated to fostering sustainable development, social justice, and community empowerment. As a non-profit organization, TFB Visions aims to create lasting impact through various programs focused on education, healthcare, and economic empowerment. By collaborating with local communities and stakeholders, the initiative seeks to address critical challenges such as poverty, inequality, and environmental sustainability. Through innovative solutions and grassroots engagement, TFB Visions strives to build a brighter, more inclusive future for all, particularly the underprivileged sectors of society in Bangladesh.</p>
           <p> TFB Visions, a core initiative of the Trisharan Foundation of Bangladesh (TFB), is dedicated to fostering sustainable development, social justice, and community empowerment. As a non-profit organization, TFB Visions aims to create lasting impact through various programs focused on education, healthcare, and economic empowerment. By collaborating with local communities and stakeholders, the initiative seeks to address critical challenges such as poverty, inequality, and environmental sustainability. Through innovative solutions and grassroots engagement, TFB Visions strives to build a brighter, more inclusive future for all, particularly the underprivileged sectors of society in Bangladesh.</p>
        </div>
    );
};

export default Visions;