import React from "react"
import PropTypes from "prop-types"
import {
    Col,
    Container,
    Row,
} from 'react-bootstrap'
import { 
  BrowserRouter as  Router, 
  Route, 
  Link 
} from 'react-router-dom'

import Header from './components/Header'

class MainApp extends React.Component {
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
