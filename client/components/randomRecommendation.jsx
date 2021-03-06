//randomRecommendation

import React from 'react';
import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';
import _ from 'underscore';
import fire from './firebaseKeys.js';
import style from './style.css';
import getRecommendation from './recommendation.js';

export default class RandomRecommendation extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            list:[],
            userDetail : JSON.parse(localStorage.getItem('randomUser')),
            userColorIcon : ''
        };

    }

    componentDidMount() {
        var localStorageData =  localStorage.getItem('nodes') &&
                                localStorage.getItem('links') &&
                                localStorage.getItem('color') &&
                                localStorage.getItem('movieInterests') &&
                                localStorage.getItem('movies') &&
                                localStorage.getItem('similarUsers') &&
                                localStorage.getItem('userInterests') &&
                                localStorage.getItem('users');

        //FDB Call
        if(!localStorageData){
            console.log("Calling FDB");
            var t1 = fire.database().ref("/"),
                promises = [],
                data = [],i;
            var self=this;

            promises.push(t1.once('value').then(function(snapshot) {

                t1 = (snapshot.val());
                for (i in t1) {
                    data.push(t1[i]);
                }

                console.log(data);


                localStorage.setItem('color', JSON.stringify(data[0]));
                localStorage.setItem('links', JSON.stringify(data[1]));
                localStorage.setItem('movieInterests', JSON.stringify(data[2]));
                localStorage.setItem('movies', JSON.stringify(data[3]));
                localStorage.setItem('nodes', JSON.stringify(data[4]));
                localStorage.setItem('similarUsers', JSON.stringify(data[5]));
                localStorage.setItem('userInterests', JSON.stringify(data[6]));
                localStorage.setItem('users', JSON.stringify(data[7]));





            }, function(error) {
                // The Promise was rejected.
                console.error(error);
            }));
        }
        //Recommendations from localStorage
        else{
            console.log("Building recommendations from cache");

            var movies = JSON.parse(localStorage.getItem('movies'));
            var movieInterests = JSON.parse(localStorage.getItem('movieInterests'));
            var users = JSON.parse(localStorage.getItem('users'));
            var similarUsers = JSON.parse(localStorage.getItem('similarUsers'));
            var userInterests = JSON.parse(localStorage.getItem('userInterests'));

            var userColor = this.state.userDetail.group;
            var colors = JSON.parse(localStorage.getItem('color'));
            userColor = colors[userColor].color;
            console.log("userColor");
            console.log(userColor);

            var res = getRecommendation(movies, movieInterests, users, similarUsers, userInterests);
            this.setState({
                list:res,
                userColorIcon:userColor
            });

            // console.log(res.length+" Suggestions from top 3 similar users : ");
            // for(i in res){
            //     console.log(movies[res[i]].title);
            // }
        }
    }

    render(){
        var suggestions = this.state.list;
        var movies = JSON.parse(localStorage.getItem('movies'));
        var message = suggestions.length+" Suggestions from 3 closest similar users : ";
        var usrClr = {
                        color:this.state.userColorIcon,
                        backgroundColor: "black",
                        borderRadius: "10px",
                        maxWidth: "330px",
                        marginLeft: "21%"
                    }
        var lists = <ListGroup>
        				{suggestions.map((item, i) => {
        					return <ListGroupItem key={i}>{movies[suggestions[i]].title}</ListGroupItem>;
        				})}
    			   </ListGroup>;

        return(
            <div className="recommendation">

                <div style={usrClr} >{message}</div>
                {lists}
            </div>
        )
    }
}
