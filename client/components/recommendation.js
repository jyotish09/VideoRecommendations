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


function getRecommendation(userInfo, movies, movieInterests, randomUserSimilars, users) {
    /* Taking Top 3 similar users to a particular user and giving recommendations from them */
    console.log(userInfo);
    var top3Union = (_.union(
        userInterests[randomUserSimilars.similarityIndexes[0].id].liked,
        userInterests[randomUserSimilars.similarityIndexes[1].id].liked,
        userInterests[randomUserSimilars.similarityIndexes[2].id].liked)
    );


    console.log("Current Usere's Interests");
    console.log(userInterests[userInfo.id].liked);

    var suggestions = _.difference(
            top3Union , userInterests[userInfo.id].liked
        );
    console.log(suggestions.length+" Suggestions from top 3 similar users : ");
    console.log(suggestions);

    for(i in suggestions){
        console.log(movies[suggestions[i]].title);
    }

}


Promise.all(promises).then(function() {

    movieInterests = data[2],
        movies = data[3],
        similarUsers = data[5],
        userInterests = data[6],
        users = data[7];

    var randomUser = users[nthUser((Math.floor(Math.random() * 100) + 1))];
    var randomUserSimilars = similarUsers[randomUser.id];

    var recommendations = getRecommendation(randomUser, movies, movieInterests, randomUserSimilars, users);


});
