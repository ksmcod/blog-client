import { NavLink } from "react-router-dom"
import logo from '../assets/b.png'

export default function Navbar() {
  return (
    <div className="w-screen shadow-md">
        <header className="max-w-4xl mx-auto flex justify-between items-center p-4 border-b sm:border-none">
            <NavLink to='/' className='text-slate-700 text-2xl font-bold'>
              <img src={logo} className="w-8" alt="" />
            </NavLink>

            <nav className="space-x-4">
                <NavLink to='/login' className='text-primary'>Login</NavLink>
                <NavLink to='/register' className='text-primary'>Register</NavLink>
            </nav>
        </header>
    </div>
  )
}
