import React from 'react';

import {} from 'react-bootstrap';

import _ from 'underscore';

import 'bootstrap/less/bootstrap.less';
import fire from './firebaseKeys.js';
import style from './style.css';
import * as d3Force from "d3-force";

class Node extends React.Component {
  render() {
      color = this.props.color;
      color = color[this.props.group].color;
    return (
        <circle
          r={5}
          cx={this.props.x}
          cy={this.props.y}
          style={{
            "fill": color,
            "stroke":"#ffffff",
            "strokeWidth":"1.5px"
          }}/>
    )
  }
}

class Link extends React.Component {
  render() {
    return (
      <line
        x1={this.props.datum.source.x}
        y1={this.props.datum.source.y}
        x2={this.props.datum.target.x}
        y2={this.props.datum.target.y}
        style={{
          "stroke":"#8fb9d6",
          "strokeOpacity":".5",
          "strokeWidth": Math.sqrt(this.props.datum.value)
        }}/>
    );
  }
}

class Graph extends React.Component{

    constructor(props) {
        super(props);
        var svgWidth = 800;
        var svgHeight = 800;
        var force = d3.layout.force()
          .charge(-180)
          .linkDistance(80)
          .size([svgWidth, svgHeight]);
        this.state = {
          svgWidth: svgWidth,
          svgHeight: svgHeight,
          force: force,
          nodes: null,
          links: null
        };
    }

    componentDidMount() {
      var self = this;
      // refactor entire graph into sub component - force layout shouldn't be
      // manipulating props, though this works
      this.state.force
                .nodes(this.props.nodes)
                .links(this.props.links)
                .start()
      this.state.force.on("tick", function (tick, b, c) {
        self.forceUpdate()
      })
    }

    drawLinks() {
      var links = this.props.links.map(function (link, index) {
        return (<Link datum={link} key={index} />)
      })
      return (<g>
        {links}
      </g>)
    }

    drawNodes() {
      var nodes = this.props.nodes.map(function (node, index) {
        return (<Node
          key={index}
          x={node.x}
          y={node.y}
          group={node.group}/>
        ) })
      return nodes;
    }

    render() {
        return (
          <div>
            <div style={{"marginLeft": "5px", "fontFamily": "Helvetica"}}>

            </div>
            <svg
              style={{"margin": "20px","backgroundColor":"#222222"}}
              width={this.state.svgWidth}
              height={this.state.svgHeight}>
              {this.drawLinks()}
              {this.drawNodes()}
            </svg>
          </div>
        )
    }
}

export default class HomeGraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            links: [],
            color: [],
            positions: []
        };
    }

    nodePos(nodes,pos){
        var i=0;
        for(i in pos){
            nodes[i]['x']=pos[i].x;
            nodes[i]['y']=pos[i].y;
        }
        return nodes;
    }

    linkPoint(links,nodes){
        var i;
        for(i in links){
            links[i]['Sx'] = nodes[links[i].src-1].x;
            links[i]['Sy'] = nodes[links[i].src-1].y;
            links[i]['Dx'] = nodes[links[i].dest-1].x;
            links[i]['Dy'] = nodes[links[i].dest-1].y;
        }

        return links;
    }

    componentDidMount() {
        var t1 = fire.database().ref("/"),
            promises = [],
            data = [],
            i,X,Y,pos=[];
        var self = this;

        //Node's Random Positions
        for(i = 0 ; i < 100 ; i++){
                X =(600 / 3 + _.random(-150, 150));
                Y =(600 / 3 + _.random(-25, 25));
                pos.push({x:X,y:Y});
            }
        //Getting the Cached Value
        var readCache = localStorage.getItem('nodes') &&
                                localStorage.getItem('links') &&
                                localStorage.getItem('color') ;
        if (readCache) {
            console.log("From localStorage");
            var nodes = this.nodePos(JSON.parse(localStorage.getItem('nodes')),pos);
            console.log("New Node Data");
            console.log(nodes);
            var links = JSON.parse(localStorage.getItem('links'));
            console.log("New Links");
            links = this.linkPoint(links,nodes);
            console.log(links);
            var color = JSON.parse(localStorage.getItem('color'));
            console.log("color");
            console.log(color);
            this.setState({
                nodes: nodes,
                links: links,
                color: color
            });
        } else {
            //Else set it from the FDB for the first time
            console.log("Calling FDB");
            var self=this;
            promises.push(t1.once('value').then(function(snapshot) {
                // The Promise was "fulfilled" (it succeeded).
                t1 = (snapshot.val());
                for (i in t1) {
                    data.push(t1[i]);
                }
                console.log(Promise.resolve("FDB Success"));
                //console.log(data);
                localStorage.setItem('nodes', JSON.stringify(data[4]));
                localStorage.setItem('links', JSON.stringify(data[1]));
                localStorage.setItem('color', JSON.stringify(data[0]));
                var nodes = self.nodePos(data[4],pos);
                var links = data[1], color = data[0];
                console.log("New Node Data");
                console.log(nodes);
                console.log("New Links");
                links = self.linkPoint(links,nodes);
                console.log(links);
                self.setState({nodes: nodes, links: links, color: color});
            }, function(error) {
                // The Promise was rejected.
                console.error(error);
            }));
        }

    }

    render() {
        var linksLength = this.state.links.length;
        var nodesLength = this.state.nodes.length;
        var pos = this.state.positions.length;
        return (
            <div>
                <p>
                    homeGraph
                </p>
                <p>
                    Links : {linksLength}
                </p>
                <p>
                    Nodes : {nodesLength}
                </p>

            </div>
        );
    }

}
