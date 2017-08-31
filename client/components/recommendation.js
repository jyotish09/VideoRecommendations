var promises = [],
    data = [],
    userInterests ,
    movieInterests ,
    users ,
    similarUsers ,
    movies ;

function nthUser(n) {
    var i = 1;
    for (j in users) {
        if (i == n) {
            return j;
        } else {
            i++;
        }
    }
}
var t1 = firebase.database().ref("/");

promises.push(t1.once('value').then(function(snapshot) {
    // The Promise was "fulfilled" (it succeeded).
    t1 = (snapshot.val());
    for (i in t1) {
        data.push(t1[i]);
    }
    console.log(Promise.resolve("FDB Read Success"));
}, function(error) {
    // The Promise was rejected.
    console.error(error);
}));


function getRecommendation(user) {

}


Promise.all(promises).then(function(){

    movieInterests = data[0] ,
    movies = data[1] ,
    similarUsers = data[2] ,
    userInterests = data[3] ,
    users = data[4] ;

});
