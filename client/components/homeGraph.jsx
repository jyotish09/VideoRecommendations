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
            nodes:[],
            links:[]
        };
    }

    componentDidMount() {
        console.log(fire);
        var t1 = fire.database().ref("/"),promises=[],data=[],i;
        var self = this;
        //Getting the Cached Value
        if(localStorage.getItem('nodes') && localStorage.getItem('links')){
            console.log("From localStorage");
            this.setState({
                nodes:JSON.parse(localStorage.getItem('nodes')),
                links:JSON.parse(localStorage.getItem('links'))
            });
            console.log(JSON.parse(localStorage.getItem('nodes')));
            console.log(JSON.parse(localStorage.getItem('links')));
        }
        else{
            //Else set it from the FDB for the first time
            console.log("Calling FDB");
            promises.push(t1.once('value').then(function(snapshot) {
              // The Promise was "fulfilled" (it succeeded).
              t1 = (snapshot.val());
              for(i in t1){data.push(t1[i]);}
              console.log(Promise.resolve("FDB Success"));
              //console.log(data);
              localStorage.setItem('nodes', JSON.stringify(data[4]));
              localStorage.setItem('links', JSON.stringify(data[1]));
              self.setState({
                  nodes:data[4],
                  links:data[1]
              });
            }, function(error) {
              // The Promise was rejected.
              console.error(error);
            }));
        }


    }

    render(){
        var linksLength = this.state.links.length;
        var nodesLength = this.state.nodes.length;
        return(
            <div>
                <p> homeGraph </p>
                <p> Links : {linksLength} </p>
                <p> Nodes : {nodesLength} </p>
            </div>
        );
    }

}
