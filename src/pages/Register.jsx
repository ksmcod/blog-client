import React from 'react'

export default function Register() {
  return (
    <div className="">
        <h2 className="text-center text-secondary m-0">Join the community</h2>

        <form className="pt-10 px-8 sm:px-32 max-w-3xl mx-auto flex flex-col gap-2">
            <input className="py-1 px-2 rounded-lg focus:outline-secondary focus:border-secondary  border border-gray-400" type="text"name="username" placeholder="Enter a username" />

            <input className="py-1 px-2 rounded-lg focus:outline-secondary focus:border-secodary  border border-gray-400" type="email"name="email" placeholder="Enter your e-mail" />

            <input className="py-1 px-2 rounded-lg focus:outline-secondary focus:border-secondary  border border-gray-400" type="password" name="password" placeholder="Enter a password" />

            <button className="bg-primary py-2 text-white font-bold rounded">Register</button>
        </form>
    </div>
  )
}
