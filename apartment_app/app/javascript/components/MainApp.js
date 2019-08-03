import React from "react"
import PropTypes from "prop-types"

import { 
  BrowserRouter as  Router, 
  Route, 
  Link ,
  Switch
} from 'react-router-dom'

import Header from './components/Header'
import Apartments from './pages/Apartments'
import NewApartment from './pages/NewApartment'
import MyApartments from './pages/MyApartments'

import { createApt } from './api'

class MainApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
             apartments: []
        }
  }
    
  componentDidMount = () => {
        fetch("/apartments")
        .then(resp => {
            return resp.json()
        })
        .then(apartmentsJson => {
            this.setState({apartments: apartmentsJson})
        })
    }
    
    handleNewApartment = (apartment) => {
        createApt(apartment)
        .then(successApt => {
            console.log("Success! New Apartment: ", successApt);
        })
    }  
    
  render () {
    const{
      logged_in,
      sign_out_route,
      sign_in_route
    } = this.props
    
    return (
      <React.Fragment>
        <Header 
          logged_in = {logged_in}
          sign_out_route = { sign_out_route }
          sign_in_route = { sign_in_route }
        />
        
        <Router>
          <Switch>
            <Route exact path="/" exact render={(props) => <Apartments apartments = {this.state.apartments}/> } />
            <Route exact path="/myapartments" render={(props) => <MyApartments apartments = {this.state.apartments}/> } />
            <Route exact path="/newapartment" component={(props) => <NewApartment 
                handleNewApartment={this.handleNewApartment}
            /> } />  
          </Switch>
        </Router>
        
        <div className="TopNav">
          {logged_in &&
            <div>
              <a href={sign_out_route}>Log Out</a>
            </div>
          }
          {!logged_in &&
            <div>
              <a href={sign_in_route}>Log In</a>
            </div>
          }
        </div>
        
      </React.Fragment>
    );
  }
}

export default MainApp
