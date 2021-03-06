import React from 'react';

import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Glyphicon
} from 'react-bootstrap';
import 'bootstrap/less/bootstrap.less';
import fire from './firebaseKeys.js';
import style from './style.css';
import HomeGraph from './homeGraph.jsx';
import RandomRecommendation from './randomRecommendation.jsx'

class NavBarData extends React.Component {
    render(){
        return (
            <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a >Recommendation Engine</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#"><Glyphicon glyph="user" /></NavItem>
                            <NavItem eventKey={2} href="#"><Glyphicon glyph="info-sign" /></NavItem>
                            <NavItem eventKey={3} href="#"><Glyphicon glyph="eye-open" /></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

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

    // initComp(){

    // }

    render() {
        return (
            <div>
                <NavBarData />
                <div className="container text-center">
                    <div className="row">

                        <div className="col-md-6">
                            <HomeGraph />
                        </div>
                        <div className="col-md-6">
                            Random User's Recommendations

                            <RandomRecommendation />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
