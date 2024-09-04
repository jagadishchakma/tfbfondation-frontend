import Image from "../components/bodhidhara/Image.jsx";
import TopMenu from "../components/globals/TopMenu";
import bodhidhara_menu from '../utilities/bodhidhara_link.js';

const Bodhidhara = () => {
   
    return (
        <>
            <TopMenu navlink={bodhidhara_menu}/>
            <Image/>
        </>
    );
};

export default Bodhidhara;