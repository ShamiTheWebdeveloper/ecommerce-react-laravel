import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "./Components/DefaultLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";
import GuestLayout from "./Components/GuestLayout.jsx";
import Login from "./views/Login.jsx";
import Products from "./views/Products.jsx";
import Categories from "./views/Category/Categories.jsx";
import Users from "./views/Admin/Users.jsx";
import ActionUsers from "./views/Admin/ActionUsers.jsx";

import routes from "./Config/route.js";
import commonRoute from "./Config/commonRoute.js";
import routeKeys from "./Config/routeKeys.js";
import ActionCategory from "./views/Category/ActionCategory.jsx";

// Routes
const router=createBrowserRouter([
    {
        path:routes.dashboard,
        element:<DefaultLayout/>,
        children:[
            {
                path:routes.dashboard,
                element:<Dashboard/>
            },
            {
                path:routes.products ,
                element: <Products/>
            },
            {
                path: routes.categories,
                element: <Categories/>
            },
            {
                path: routes.categories+commonRoute.newRecord,
                element: <ActionCategory key={routeKeys.createCategory}/>
            },
            {
                path:routes.categories+commonRoute.recordId,
                element: <ActionUsers key={routeKeys.updateCategory} />
            },
            {
                path: routes.users,
                element: <Users />
            },
            {
                path: routes.users+commonRoute.newRecord,
                element: <ActionUsers key={routeKeys.createUser}/>
            },
            {
                path: routes.users+commonRoute.recordId,
                element: <ActionUsers key={routeKeys.updateUser}/>
            }

        ]
    },
    {
        path:routes.dashboard,
        element:<GuestLayout />,
        children:[
            {
                path: routes.login,
                element: <Login/>
            }
        ]
    }
]);

export default router;


