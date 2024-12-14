import BanabhanteLayout from "../components/globals/BanabhanteLayout";
import Banabhante from "../pages/Banabhante";


const banabhante_routes = [
    {
        path: "/banabhante",
        element: <BanabhanteLayout/>,
        children: [
            {
                path: "",
                element: <Banabhante/>
            },
        ]
    }
    
]

export default banabhante_routes;


//<Bodhidhara/> call function why load into <BodhidharaNewsDetails/> 