import React from 'react'

import { useContext } from './One'
function Three() {
    return (
        <div>
            Three
        <useContext.Consumer>
            {value=><div>{value}</div>}
        </useContext.Consumer>
        </div>
    )
}

export default Three