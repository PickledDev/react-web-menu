import React, {Fragment} from 'react'
import {Container, Col, Row} from 'react-bootstrap'

import WebmenuNavbar from './components/WebmenuNavbar'
import Choices from './components/Choices'
import MenuContent from './components/MenuContent'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Fragment>
      <WebmenuNavbar />
      <Container style={{paddingTop: '20px'}}>
        <Row>
          <Col md='auto'>
            <Choices />
          </Col>
          <Col>
            <MenuContent />
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default App
