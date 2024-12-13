import React, { createContext } from 'react'
import Three from './Three'

 export  const useContext = createContext()
function One() {
    const name = "Suresh"
  return (
    <div>
        
        One

    <useContext.Provider value={name}>
        <Three />
    </useContext.Provider>


    </div>
  )
}

export default One