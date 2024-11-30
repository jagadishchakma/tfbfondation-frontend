import BodhidharaNewsDetails from "../components/bodhidhara/BodhidharaNewsDetails";
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
            },
            {
                path: "news/:id",
                element: <BodhidharaNewsDetails/>
            }
        ]
    }
    
]

export default bodhidhara_routes;


//<Bodhidhara/> call function why load into <BodhidharaNewsDetails/> 