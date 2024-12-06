import React, { useEffect, useState } from 'react'


function Fetching() {
    const [data, setData] = useState([])

    useEffect(() => {

        async function getData() {
            const url = await fetch('https://dummyjson.com/products');
            let mydata = await url.json()
            console.log(mydata.products)
            setData(mydata.products)
        } getData()

    })
    return (
        <div className='d-flex justify-content-around flex-wrap'>{
            data.map((e)=>{
                return(
                    <div className='product'style={{border: '2px solid green', height:'400px', width:'250px',padding:'2%',margin:'2%'}} >
                        <p>{e.id}</p>
                        <img src={e.images} alt="" style={{width:"100%"}} />
                        <p>{e.title}</p>
                        <p>{e.rating}</p>
                        <p>{e.price}</p>
                    </div>
                )
            })
        }</div>
    )
}

export default Fetching