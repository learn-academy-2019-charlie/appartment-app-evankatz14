import React, { Component } from 'react'
import {
    Col,
    Container,
    Row,
    Form,
    Button
} from 'react-bootstrap'

export default class NewApartment extends Component {
    constructor(props){
        super(props)
        this.state = {
            apartment: {
                streetNumber: 0,
                streetName: '',
                city: '',
                zipCode: 0,
                state: '',
                country: '',
                userId: 1
            }
        }
    }
    
    handleChange = (e) => {
        const { apartment } = this.state
        apartment[e.target.name] = e.target.value
        this.setState({apartment})
    }
    
    handleClick = () => {
        this.props.handleNewApartment(this.state.apartment)
    }
    
    render(){
        return(
                <Container>
                <Row>
                    <Col>
                        <Form.Group controlId="streetNumber">
                            <Form.Label>Street Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="streetNumber"
                                placeholder = "ie: 123"
                                onChange={this.handleChange}
                                value={this.state.apartment.streetNumber}
                            />
                        </Form.Group>
                        <Form.Group controlId="streetName">
                            <Form.Label>Street Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="streetName"
                                placeholder = "ie: First Street"
                                onChange={this.handleChange}
                                value={this.state.apartment.streetName}
                            />
                        </Form.Group>
                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                placeholder = "ie: Chicago"
                                onChange={this.handleChange}
                                value={this.state.apartment.city}
                            />
                        </Form.Group>
                        <Form.Group controlId="zipCode">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control
                                type="text"
                                name="zipCode"
                                placeholder = "ie: 90210"
                                onChange={this.handleChange}
                                value={this.state.apartment.zipCode}
                            />
                        </Form.Group>
                        <Form.Group controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                name="state"
                                placeholder = "ie: New York"
                                onChange={this.handleChange}
                                value={this.state.apartment.state}
                            />
                        </Form.Group>
                        <Form.Group controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type="text"
                                name="country"
                                placeholder = "ie: United States"
                                onChange={this.handleChange}
                                value={this.state.apartment.country}
                            />
                        </Form.Group>
                        <Button
                            variant='primary'
                            type="submit"
                            onClick={this.handleClick}>
                            Create New Apartment
                        </Button>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}