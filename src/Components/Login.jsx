import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='container'>
        <h3>Login</h3>

        <form action="">
            <input type="text" placeholder='Enter Username' className='form-control my-2'/>
            <input type="password" placeholder='Enter Your Password ' className='form-control my-2'/>
        </form>
        <p>Dont You have an Account? <Link to='/signup'>Signup</Link></p>
        <Link to='/dashboard'><button className='btn btn-outline-primary w-100 my-3'>Login</button></Link>
    </div>
  )
}

export default Login