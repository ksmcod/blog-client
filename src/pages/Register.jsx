import React from 'react'

export default function Register() {
  return (
    <form action="">
        <div className="">
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' required />
        </div>
        <div className="">
            <label htmlFor="username">Username: </label>
            <input type="text" name='username' required />
        </div>
        <div className="">
            <label htmlFor="name">Email: </label>
            <input type="email" name='email' required />
        </div>
        <div className="">
            <label htmlFor="name">Password: </label>
            <input type="password" name='password' required />
        </div>
    </form>
  )
}
