//randomRecommendation

import React from 'react';
import {} from 'react-bootstrap';
import _ from 'underscore';
import fire from './firebaseKeys.js';
import style from './style.css';
import getRecommendation from './recommendation.js';

export default class RandomRecommendation extends React.Component {

    constructor(props) {
        super(props);

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

            getRecommendation(movies, movieInterests, users, similarUsers, userInterests)
        }
    }

    render(){
        return(
            <div className="recommendation">
                HI
            </div>
        )
    }
}