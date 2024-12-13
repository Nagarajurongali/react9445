import React, { useState } from 'react'
import CompB from './CompB'

function CompA() {
    const [cart , setCart] = useState(0)
  return (
    <div style={{border:'2px solid',padding:'2%' , margin:'2%'}}>
        CompA
        <button onClick={()=>setCart(cart+1)}>add cart</button>
        <CompB value = {cart}/>
    </div>
  )
}

export default CompA