import React from 'react';
import {Button, ProgressBar} from 'react-bootstrap';
import 'bootstrap/less/bootstrap.less';
import fire from './firebaseKeys.js';
export default class App extends React.Component {
    render() {
        console.log(fire);
        return (
            <div className="container" style={{
                textAlign: 'center'
            }}>
                <h1>Hello World</h1>
                <Button bsStyle='success' bsSize='large' style={{
                    marginBottom: '1%'
                }}>Get started today</Button>

                <ProgressBar active bsStyle="success" now={40}/>
                <ProgressBar bsStyle="info" now={20}/>

                <ProgressBar bsStyle="warning" now={60}/>
                <ProgressBar bsStyle="danger" now={80}/>

                <div>
                    <div className="row">
                        <div className="col-xs-3">
                            ONE
                        </div>
                        <div className="col-xs-9">
                            TWO
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
