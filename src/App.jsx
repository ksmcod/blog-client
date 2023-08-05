import { NavLink, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import RootLayout from './layouts/RootLayout'

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>} />
        

        <Route path='*' element={<Error/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}
