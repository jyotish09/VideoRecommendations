var data = '',
    promises = [],
    userInterests = data[2],
    movieInterests = data[0],
    users = data [3];

function nthUser(n){
    var i = 1 ;
    for(j in users){
        if(i == n){
            return j;
        }else{i++;}
    }
}

for (i in userInterests) {
    var movieList = _.flatten([userInterests[i].disliked, userInterests[i].liked]), similarity;
    console.log(i);
    var linkedUsers = [];
    for (j in movieList) {
        linkedUsers = _.flatten(movieInterests[movieList[j]].liked,movieInterests[movieList[j]].disliked);
    }
    console.log("linkedUsers");
    console.log(linkedUsers);
    // userInterests[nthUser(6)]
    linkedUsers = [];
}
