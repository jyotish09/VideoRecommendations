import React from 'react';
import {Button, ButtonToolbar, ProgressBar} from 'react-bootstrap';
import 'bootstrap/less/bootstrap.less';
import fire from './firebaseKeys.js';
import style from './style.css';
import Main from './Main.jsx';
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
            // movieBox: {
            //     border: '1px solid rgb(44, 69, 202)',
            //     paddingBottom: '1%',
            //     borderRadius: '10px',
            //     textAlign: 'left'
            // }
        };
    }

    render() {
        return (
            <Main />
        );
    }
}
