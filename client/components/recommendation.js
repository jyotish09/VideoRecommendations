import _ from 'underscore';

function nthUser(n,users) {
    var i = 1,j;
    for (j in users) {
        if (i == n) {
            return j;
        } else {
            i++;
        }
    }
}


function getRecommendation(movies, movieInterests, users, similarUsers, userInterests) {
    /* Taking Top 3 similar users to a particular user and giving recommendations from them */
    //var userInfo = users[nthUser((Math.floor(Math.random() * 100) + 1),users)],i;
    //console.log("userInfo");
    //console.log(userInfo);
    var randomUser = JSON.parse(localStorage.getItem('randomUser'));
    var randomUserSimilars = similarUsers[randomUser.name];
    console.log(randomUserSimilars);

    var top3Union = (_.union(
        userInterests[randomUserSimilars.similarityIndexes[0].id].liked,
        userInterests[randomUserSimilars.similarityIndexes[1].id].liked,
        userInterests[randomUserSimilars.similarityIndexes[2].id].liked)
    );


    // console.log("Current User's Interests");
    // console.log(userInterests[userInfo.id].liked);

    var suggestions = _.difference(
            top3Union , userInterests[randomUser.name].liked
        );

    return suggestions;

}

export default getRecommendation;
