import { createBrowserRouter } from "react-router-dom";
import Todo from "../pages/Todo/Todo";
import Home from "../pages/Home/Home";
import Header from "../components/Layout/Header/Header";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
        children: [
            {   
                index: true,
                element: <Home />,
            },
            {
                path: 'Todo',
                element: <Todo />,
            }
        ]
    },
]);


export default router;