import BodhidharaLayout from "../components/globals/BodhidharaLayout";
import Bodhidhara from "../pages/Bodhidhara";

const bodhidhara_routes = [
    {
        path: "/bodhidhara",
        element: <BodhidharaLayout/>,
        children: [
            {
                path: "",
                element: <Bodhidhara/>
            }
        ]
    }
    
]

export default bodhidhara_routes;