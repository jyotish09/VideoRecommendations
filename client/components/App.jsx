import React from 'react';
import {Button, ButtonToolbar, ProgressBar} from 'react-bootstrap';
import 'bootstrap/less/bootstrap.less';
import fire from './firebaseKeys.js';
import style from './style.css';
export default class App extends React.Component {
    render() {
        console.log(fire);
        return (
            <div className="container text-center">
                <h2>Movie Recommendation</h2>
                <div>
                    <div className="row">

                        <div className="col-xs-3">
                            <h3>Good Will Hunting</h3>
                            <div className="row">
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
                                <div className="col-sm-10">
                                    <ProgressBar active bsStyle="success" now={80}/>
                                </div>
                                <div className="col-sm-2">80%</div>
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
