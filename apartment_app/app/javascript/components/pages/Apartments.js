import React, { Component } from 'react'
import {
    Col,
    Container,
    Row,
    ListGroup
} from 'react-bootstrap'
import { 
  BrowserRouter as  Router, 
  Route, 
  Link ,
  Switch
} from 'react-router-dom'

export default class MyApartments extends Component {
    
    render(){
        return(
            <React.Fragment>
                <h1>Apartments App</h1>
                <Container>
                <Row>
                    <Col xs={12}>
                        <ListGroup>
                        {this.props.apartments.map((apartment, index) => {
                            return(
                                <ListGroup.Item key={index}>
                                    <div className="card text-white bg-primary mb-3" style={{maxWidth: 500}}>
                                      <div className="card-header">Your dream home awaits...</div>
                                      <div className="card-body">
                                        <h4 className="card-title">Home Address:</h4>
                                        <p className="card-text">{apartment.street_number} {apartment.street_name} {apartment.city}, {apartment.state}, {apartment.zip_code}, {apartment.country}</p>
                                      </div>
                                    </div>
                                </ListGroup.Item>
                            )
                        })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        )
    }
}