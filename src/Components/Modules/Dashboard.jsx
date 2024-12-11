import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../Sidenav'
import { EarbudsData } from '../Data/EarbudsData'
import { Link } from 'react-router-dom'

function Dashboard() {
  const display = EarbudsData.slice(0,4)
  return (
    <div className='container-fluid'>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10} >
        <div className='d-flex flex-wrap justify-content-between'>
        
          {
            display.map((e)=>{
              return(
                <div className='border p-2 m-2 bg-warning '>
                  <p>{e.id}</p>
                        <p>{e.Color}</p>
                        <p>{e.Connectivity}</p>
                        <img src={e.Image} alt="" style={{width:'200px'}} />
                        <p>{e.Price}</p>
                </div>
              )
            })
          }
          </div>
          <Link to= '/earbuds'><p>View All</p></Link> 
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard