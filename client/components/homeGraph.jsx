import React from 'react';

import {

} from 'react-bootstrap';

import 'bootstrap/less/bootstrap.less';
import fire from './firebaseKeys.js';
import style from './style.css';
import * as d3Force from "d3-force";

export default class HomeGraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        console.log(fire);
        var t1 = fire.database().ref("/"),promises=[],data=[],i;

        promises.push(t1.once('value').then(function(snapshot) {
          // The Promise was "fulfilled" (it succeeded).
          t1 = (snapshot.val());
          for(i in t1){data.push(t1[i]);}
          console.log(Promise.resolve("FDB Success"));
          console.log(data);
        }, function(error) {
          // The Promise was rejected.
          console.error(error);
        }));

    }

    render(){
        return(
            <div>
                
            </div>
        );
    }

}
