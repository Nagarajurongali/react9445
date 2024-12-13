import React from 'react'
import CompC from './CompC'

function CompB(prop) {
  return (
    <div style={{border:'2px solid',padding:'2%' , margin:'2%'}}>
        CompB
        
        <CompC data ={prop.value} />
    </div>
  )
}

export default CompB