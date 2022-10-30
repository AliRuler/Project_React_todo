import { createBrowserRouter } from "react-router-dom";
import ListTodos from "../pages/ListTodos/ListTodos";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {   
                path: "/AddTodo",
                element: <Home />,
            },
            {
                path: "/Todos",
                element: <ListTodos />,
            },
            {
                path: "/update/:id",
                element: <Home />
            }
        ]
    },
    
]);


export default router;