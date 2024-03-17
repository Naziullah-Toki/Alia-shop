

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Homepage from '../pages/homepage/Homepage';

const MainRoutes = createBrowserRouter([

    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/homepage",
                element:<Homepage/>
            }
        ]

    }
])

export default MainRoutes;