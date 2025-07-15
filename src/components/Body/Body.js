import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Login from '../Login/Login'
import Browse from '../Browse/Browse'
import { RouterProvider } from 'react-router-dom'

const Body = () => {
 

  const appRouter = createBrowserRouter([
   {
      path : '/',
      element : <Login/>
   },{
      path : '/browse',
      element : <Browse/>
   },
  ])


  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body