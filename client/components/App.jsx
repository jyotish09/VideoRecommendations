import React from 'react';
import {Button,ProgressBar} from 'react-bootstrap';
import 'bootstrap/less/bootstrap.less';

export default class App extends React.Component {
    render() {
        return (
            <div style={{
                textAlign: 'center'
            }}>
                <h1>Hello World</h1>
                <Button bsStyle='success' bsSize='large'>Get started today</Button>

                <ProgressBar bsStyle="success" now={40}/>
                <ProgressBar bsStyle="info" now={20}/>
                
                <ProgressBar bsStyle="warning" now={60}/>
                <ProgressBar bsStyle="danger" now={80}/>
            </div>
        );
    }
}
