import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Create from "./Create"
import Data from "./Data"
import View from "./View"
import Update from "./Update"

let r = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        children : [
            {
                index : true,
                element : <Create/>
            },
            {
                path : "/data",
                element : <Data/>
            },
            {
                path : "/view",
                element : <View/>
            },
            {
                path : "/view/:id",
                element : <View/>
            },
            {
                path : "/update",
                element : <Update/>
            },
            {
                path : "/update/:id",
                element : <Update/>
            }
        ]
    }
])
const Routing = () => {
  return (
    <RouterProvider router={r}></RouterProvider>
  )
}

export default Routing