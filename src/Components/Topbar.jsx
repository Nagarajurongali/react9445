import React from 'react'
import {useContext} from './Modules/Details/Budsdetails'
function Topbar() {
  return (
    <div className='border p-2 d-flex justify-content-between'>
        <p>Top Bar</p>
        <p>cart</p>
      <useContext.Consumer>
        {value=><div>{value}</div>}
      </useContext.Consumer>
    </div>
  )
}

export default Topbar