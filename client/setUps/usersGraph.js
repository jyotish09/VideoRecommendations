var promises = [],
    data = [],
    userInterests,
    movieInterests,
    users,
    similarUsers,
    movies;

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

Promise.all(promises).then(function() {

    similarUsers = data[2],
    users = data[4];

    console.log("similarUsers");
    console.log(similarUsers);
    console.log("users");
    console.log(users);


});
