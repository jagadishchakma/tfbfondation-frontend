import Editors from "../../editors/Editors";
import '../../assets/css/bodhidhara/newsWritingBox.css';
import { useContext } from "react";
import { BodhidharaContext } from "../../contexts/BodhidharaContext";

const NewsWritingBox = () => {
    const {setNewsWriting} = useContext(BodhidharaContext);
    return (
        <>
            <div className="newsWritingBox">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="newsEditorBox shadow">
                        <i className="fa-solid fa-xmark closeNewsWritingBox" onClick={()=>setNewsWriting(false)}></i>
                        <Editors />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsWritingBox;