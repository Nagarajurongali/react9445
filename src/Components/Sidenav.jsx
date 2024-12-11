import React from 'react'
import { Link } from 'react-router-dom'
function Sidenav() {
  return (
    <div className='mynav bg-dark text-light'>
        <ul>
            <Link to='/dashboard' ><li>Dashboard</li></Link>
            <Link to='/earbuds' ><li>Earbuds</li></Link>
            <Link to='/orders' ><li>Orders</li></Link>
            <Link to='/providers' ><li>Providers</li></Link>
            <Link to='/locations' ><li>Locations</li></Link>
        </ul>
        <Link to='/'><p>Logout</p></Link>
    </div>
  )
}

export default Sidenav