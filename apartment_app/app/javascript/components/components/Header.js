import React, { Component } from 'react'
import {
    Col,
    Container,
    Row,
} from 'react-bootstrap'

export default class Header extends Component {
    render(){
        const{ 
      logged_in, 
      sign_out_route, 
      sign_in_route 
    } = this.props
    console.log(this.props)
        return(
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                  <a class="navbar-brand" href="#">Navbar</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                
                  <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">New Apartment</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">My Apartments</a>
                      </li>
                      </ul>
                      <div className="Nav-log">
                        {logged_in &&
                            <div>
                              <button type="button" class="btn btn-outline-secondary">
                                <a className="nav-link" href={sign_out_route}>Log Out</a>
                              </button>
                            </div>
                        }
                        {!logged_in &&
                            <div>
                              <button type="button" class="btn btn-outline-secondary">
                                <a className="nav-link" href={sign_in_route}>Log In</a>
                              </button>
                            </div>
                        }
                      </div>
                    
                    <form class="form-inline my-2 my-lg-0">
                      <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
                      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                  </div>
                </nav>
            </React.Fragment>
        )
    }
    
}