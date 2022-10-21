import { createBrowserRouter } from "react-router-dom";
import Todo from "../pages/Todo/Todo";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {   
                index: true,
                element: <Home />,
            },
            {
                path: "/Todos",
                element: <Todo />,
            },
            {
                path: "/update/:id",
                element: <Home />
            }
        ]
    },
    
]);


export default router;