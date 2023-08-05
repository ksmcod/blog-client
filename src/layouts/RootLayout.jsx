import { NavLink, Outlet } from "react-router-dom"
export default function RootLayout() {
  return (
    <main className="p-3 max-w-4xl mx-auto border ">
        <header className="flex justify-between">
            <NavLink to='/' className='text-slate-700 text-2xl font-bold'>Blogg</NavLink>

            <nav className="space-x-4">
                <NavLink to='/login' className='text-slate-700'>Login</NavLink>
                <NavLink to='/register' className='text-slate-700'>Register</NavLink>
            </nav>
        </header>

        
    <Outlet/>
    </main>
  )
}
