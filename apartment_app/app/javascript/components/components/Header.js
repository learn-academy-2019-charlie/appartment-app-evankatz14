import React, { Component } from 'react'
// import {
//     Col,
//     Container,
//     Row,
// } from 'react-bootstrap'

export default class Header extends Component {
    render(){
        const{ 
      logged_in, 
      sign_out_route, 
      sign_in_route 
    } = this.props
    
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="#">Navbar</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                
                  <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="https://eae079e3dbdc43aa90a871d50c7e60ce.vfs.cloud9.us-west-2.amazonaws.com/">Home <span className="sr-only">(current)</span></a>
                      </li>
                      {logged_in && 
                        <div className="collapse navbar-collapse" id="navbarColor03">
                          <li className="nav-item">
                            <a className="nav-link" href="newapartment">New Apartment</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="myapartments">My Apartments</a>
                          </li>
                        </div>
                      }
                      {!logged_in &&
                        <div className="collapse navbar-collapse" id="navbarColor03">
                          <li className="nav-item">
                            <a className="nav-link" href="users/sign_in">New Apartment</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="users/sign_in">My Apartments</a>
                          </li>
                        </div>
                      }
                    </ul>
                    <div className="Nav-log">
                        {logged_in &&
                            <div>
                                <a className="nav-link" href={sign_out_route}>Log Out</a>
                            </div>
                        }
                        {!logged_in &&
                            <div>
                                <a className="nav-link" href={sign_in_route}>Log In</a>
                            </div>
                        }
                      </div>
                    <form className="form-inline my-2 my-lg-0">
                      <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                  </div>
                </nav>
            </React.Fragment>
        )
    }
    
}