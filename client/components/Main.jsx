import React from 'react';

import {
    Button,
    ButtonToolbar,
    ProgressBar,
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';

import 'bootstrap/less/bootstrap.less';
import fire from './firebaseKeys.js';
import style from './style.css';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            movieBox: {
                border: '1px solid rgb(44, 69, 202)',
                paddingBottom: '1%',
                borderRadius: '10px',
                textAlign: 'left'
            }
        };
    }

    render() {
        console.log(fire);
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Recommendation Engine</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Link</NavItem>
                            <NavItem eventKey={2} href="#">Link</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container text-center">
                    <div className="row">

                        <div className="col-xs-3" style={this.state.movieBox}>
                            <h3>Good Will Hunting</h3>
                            <div className="row text-center">
                                <div className="col-sm-6">
                                    <ButtonToolbar>
                                        <Button bsStyle="primary" bsSize="large">
                                            <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
                                        </Button>
                                    </ButtonToolbar>
                                </div>
                                <div className="col-sm-6">
                                    <ButtonToolbar>
                                        <Button bsStyle="danger" bsSize="large">
                                            <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
                                        </Button>
                                    </ButtonToolbar>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-9">
                            <div className="row">
                                <div className="col-sm-11">
                                    <ProgressBar active bsStyle="success" now={80}/>
                                </div>
                                <div className="col-sm-1">80%</div>
                            </div>
                            <ProgressBar active bsStyle="info" now={60}/>
                            <ProgressBar active bsStyle="warning" now={40}/>
                            <ProgressBar active bsStyle="danger" now={20}/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
