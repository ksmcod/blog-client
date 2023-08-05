import { NavLink, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import RootLayout from './layouts/RootLayout'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />


        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}
