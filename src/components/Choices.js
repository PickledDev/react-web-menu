import React, {Component, Fragment} from 'react'
import {Card, ListGroup, ListGroupItem, Col, Row} from 'react-bootstrap'

import styles from './Choices.module.css'

const BREAKFAST = {
  eggs: 2,
  bacon: 1,
  'orange juice': 1,
}

const LUNCH = {
  burrito: 1,
  coke: 1,
}

const DINNER = {
  steak: 1,
  'mashed potatoes': 1,
  'grean beans': 1,
  milk: 1,
}

const DESERT = {
  'chocolate cake': 1,
}

export default class Choices extends Component {
  render() {
    const breakfastThing = Object.keys(BREAKFAST).map((item) => {
      return (
        <ListGroup key={item}>
          <ListGroupItem className={styles['list-group-item']}>
            <Row>
              <Col>{item}</Col>
              <Col>({BREAKFAST[item]})</Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      )
    })

    const lunchThing = Object.keys(LUNCH).map((item) => {
      return (
        <ListGroup key={item}>
          <ListGroupItem className={styles['list-group-item']}>
            <Row>
              <Col>{item}</Col>
              <Col>({LUNCH[item]})</Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      )
    })

    const dinnerThing = Object.keys(DINNER).map((item) => {
      return (
        <ListGroup key={item}>
          <ListGroupItem className={styles['list-group-item']}>
            <Row>
              <Col>{item}</Col>
              <Col>({DINNER[item]})</Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      )
    })

    const desertThing = Object.keys(DESERT).map((item) => {
      return (
        <ListGroup key={item}>
          <ListGroupItem className={styles['list-group-item']}>
            <Row>
              <Col>{item}</Col>
              <Col>({DESERT[item]})</Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      )
    })

    return (
      <Fragment>
        <Card className={styles['card-style']}>
          <Card.Header className={styles['card-header']}>Breakfast</Card.Header>
          {breakfastThing}
          <Card.Header className={styles['card-header']}>Lunch</Card.Header>
          {lunchThing}
          <Card.Header className={styles['card-header']}>Dinner</Card.Header>
          {dinnerThing}
          <Card.Header className={styles['card-header']}>Desert</Card.Header>
          {desertThing}
        </Card>
      </Fragment>
    )
  }
}
