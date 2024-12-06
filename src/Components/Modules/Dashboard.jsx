import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../Sidenav'

function Dashboard() {
  return (
    <div className='container-fluid'>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
          <h3>This is Dashboard</h3>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard