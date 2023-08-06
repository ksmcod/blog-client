import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className="max-w-3xl mx-auto">
        <div className="space-y-3">
            <h2 className="text-center text-secondary">Login to your account</h2>
            <p className="font-bold text-center">
                Don't have an account ? <span className="text-secondary"><Link to='/register'>sign up</Link></span>
            </p>
        </div>

        <form className="pt-5 px-8 sm:px-32 max-w-3xl mx-auto flex flex-col gap-2">
            <input className="py-1 px-2 rounded-lg focus:outline-secondary focus:border-secondary  border border-gray-400" type="email"name="email" placeholder="Enter your e-mail" />

            <input className="py-1 px-2 rounded-lg focus:outline-secondary focus:border-secondary  border border-gray-400" type="password" name="password" placeholder="Enter your password" />

            <button className="bg-primary py-2 text-white font-bold rounded">Login</button>
        </form>
    </div>
  )
}
