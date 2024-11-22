import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Header  from './Header.jsx'
import Section from './Section.jsx'



const router = createBrowserRouter(
  createRoutesFromElements (

    <Route path='/' element={<Layout/>}>
      <Route path=''element={<App/>}/>
      <Route path='/' element={<Header/>}/>
      <Route path='/' element={<Section/>}/>

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
   <RouterProvider router = {router}/>
  </StrictMode>,
)
