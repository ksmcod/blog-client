import { NavLink, Outlet } from "react-router-dom"
export default function RootLayout() {
  return (
    <main className="border space-y-10">
        <div className="w-screen shadow-md">
            <header className="max-w-4xl mx-auto flex justify-between items-center p-4 border-b sm:border-none">
                <NavLink to='/' className='text-slate-700 text-2xl font-bold'>Blogg</NavLink>

                <nav className="space-x-4">
                    <NavLink to='/login' className='text-slate-700'>Login</NavLink>
                    <NavLink to='/register' className='text-slate-700'>Register</NavLink>
                </nav>
            </header>

        </div>


    <Outlet/>
    </main>
  )
}
