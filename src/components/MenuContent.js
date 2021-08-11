import React, {Fragment} from 'react'
import {Col, Card, Row, ListGroup, ButtonToolbar, Button} from 'react-bootstrap'

import placeholder from '../Images/generic-image-placeholder.png'

const MenuContent = () => {
  return (
    <Fragment>
      <Row xs={1} md={3} lg={4} className='g-4'>
        {Array.from({length: 8}).map((_, idx) => (
          <Col>
            <Card style={{maxWidth: '250px'}}>
              <Card.Img variant='top' src={placeholder} rounded />
              <Card.Body>
                <Card.Title>Food Item Name</Card.Title>
              </Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  <ButtonToolbar style={{justifyContent: 'space-between'}}>
                    <Button variant='success'>Add</Button>
                    <Button variant='danger'>Remove</Button>
                  </ButtonToolbar>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup>
                <ListGroup.Item>
                  <ButtonToolbar style={{justifyContent: 'space-between'}}>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                  </ButtonToolbar>
                </ListGroup.Item>
              </ListGroup>
              <Card.Footer className='text-muted' style={{textAlign: 'center'}}>
                Qty: 1
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  )
}

export default MenuContent
