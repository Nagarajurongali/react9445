import React, { useState } from 'react'

function Usestate() {
    const [count , setCount] = useState(0)
  return (
    <div className='text-center w-100'>
        {count}<br/>
        <button className='btn btn-primary' onClick={()=>{setCount(count+1)}}>+</button>
        <button className='btn btn-primary' onClick={()=>{setCount(count-1)}}>-</button>
        <button className='btn btn-primary' onClick={()=>{setCount(count*0)}}>reset</button>
    </div>
  )
}

export default Usestate