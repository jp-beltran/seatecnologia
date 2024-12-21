import { createBrowserRouter } from "react-router-dom";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import Page5 from "../pages/Page5";
import Page6 from "../pages/Page6";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Page1/>
    },
    {
        path: "/page2",
        element: <Page2/>
    },
    {
        path: "/page3",
        element: <Page3/>
    },
    {
        path: "/page4",
        element: <Page4/>
    },
    {
        path: "/page5",
        element: <Page5/>
    },
    {
        path: "/page6",
        element: <Page6/>
    }
]);

export default router;