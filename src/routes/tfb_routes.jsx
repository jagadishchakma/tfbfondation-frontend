import TFBLayout from "../components/globals/TFBLayout";
import TfbFoundation from "../pages/TfbFoundation";

const tfb_routes = [
    {
        path: "/tfb",
        element: <TFBLayout />,
        children: [
            {
                path: "",
                element: <TfbFoundation />,
            },
            {
                path: "visions/",
                element: <TfbFoundation />
            }
        ]
    }
];

export default tfb_routes;