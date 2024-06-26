import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/root/Root";
import Home from "../../pages/home/Home";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root></Root>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                }
            ]
        }
    ]
)

export default router;