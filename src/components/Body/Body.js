import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Login from '../Login/Login'
import Browse from '../Browse/Browse'
import Error from '../Error';
import { RouterProvider } from 'react-router-dom'
import GPTSearch from '../GPTSearch/GPTSearch';

const Body = () => {
 

  const appRouter = createBrowserRouter([
   {
      path : '/',
      element : <Login/>
   },{
      path : '/browse',
      element : <Browse/>
   },
   {
      path: '/gptSearch',
      element : <GPTSearch/>
   },
   {
      path: '/error',
      element : <Error/>
   }
  ])


  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body