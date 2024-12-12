import React, { useState } from 'react'
import { EarbudsData } from '../../Data/EarbudsData'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../../Sidenav'
import Topbar from '../../Topbar'
function Budsdetails() {
    const [cart , setCart] = useState(0)
    let { id } = useParams()
    let productDet = EarbudsData.find((item) => item.id == id)
    return (
        <div>

            <Row>
                <Col sm={2}>
                    <Sidenav />
                </Col>
                <Col sm={10}>
                    <Topbar />
                    <div className='container d-flex justify-content-around border bg-dark text-light rounded align-items-center py-4'>
                        <div className='data'>
                            <p>{cart}</p>
                            <p>{productDet.id}</p>
                            <p>{productDet.Color}</p>
                            <p>{productDet.Connectivity}</p>
                            <p>{productDet.Price}</p>
                            <button className='btn btn-outline-primary' onClick={()=>setCart(cart+1)}>add to cart</button>
                        </div>
                        <div className='product'>
                            <img src={productDet.Image} style={{ width: "300px" }} alt="" />
                        </div>

                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default Budsdetails