import { useContext } from "react";
import TopMenu from "../components/globals/TopMenu";
import bodhidhara_menu from '../data/bodhidara/bodhidhara_link.js';
import { BodhidharaContext } from "../contexts/BodhidharaContext.jsx";

const Bodhidhara = () => {
   const {uname} = useContext(BodhidharaContext);
    return (
        <>
           <h1>{uname}</h1>
        </>
    );
};

export default Bodhidhara;