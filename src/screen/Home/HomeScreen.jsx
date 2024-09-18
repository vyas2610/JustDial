import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
        <Container>
                <Row>

                    <Col lg={6}>Left</Col>
                    <Col lg={6}>Right</Col>
                </Row>
        </Container>
    </>
    
  )
}

export default HomeScreen