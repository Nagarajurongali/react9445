import React from 'react'
import { EarbudsData } from '../Data/EarbudsData'
import { Row, Col } from 'react-bootstrap'
import Sidenav from '../Sidenav'
import { Link } from 'react-router-dom'

function Earbuds() {
    return (
        <div className='container-fluid'>
            <Row>
                <Col sm={2}>
                    <Sidenav />
                </Col>
                <Col sm={10} >
                    <Link to='/dashboard'><p>back</p></Link>
                    <div className='d-flex flex-wrap justify-content-between'>

                        {
                            EarbudsData.map((e) => {
                                return (
                                    <Link to={`/earbuds/${e.id}`}>
                                    <div className='border p-2 m-2 bg-warning '>
                                        <p>{e.Color}</p>
                                        <p>{e.Connectivity}</p>
                                        <img src={e.Image} alt="" style={{ width: '200px' }} />

                                    </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default Earbuds