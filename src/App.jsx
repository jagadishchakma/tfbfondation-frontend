import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/globals/Layout"
import Home from "./pages/Home";
import tfb_routes from "./routes/tfb_routes.jsx";
import bodhidhara_routes from "./routes/bodhidhara_routes";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: (
      <Layout>
        <NotFound/>
      </Layout>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      ...bodhidhara_routes,
      ...tfb_routes
    ]
  }
]);
export default router;