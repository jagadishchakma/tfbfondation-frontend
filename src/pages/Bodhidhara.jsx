import Image from "../components/tfb/Image.jsx";
import TopMenu from "../components/globals/TopMenu";
import bodhidhara_menu from '../data/bodhidara/bodhidhara_link.js';

const Bodhidhara = () => {
   
    return (
        <>
            <TopMenu navlink={bodhidhara_menu}/>
            <Image/>
        </>
    );
};

export default Bodhidhara;