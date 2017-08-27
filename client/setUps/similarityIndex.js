var data = '',
    promises = [],
    userInterests = data[2],
    movieInterests = data[0],
    users = data[3];

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

for (i in userInterests) {
    var movieList = _.flatten([userInterests[i].disliked, userInterests[i].liked]),
        aLiked = userInterests[i].liked,
        aDisliked = userInterests[i].disliked,
        similarity;
    console.log(i);
    var linkedUsers = [];
    for (j in movieList) {
        linkedUsers = _.flatten(movieInterests[movieList[j]].liked, movieInterests[movieList[j]].disliked,linkedUsers);
    }
    console.log("linkedUsers");
    console.log(linkedUsers);
    for (k in linkedUsers) {
        userDetails = userInterests[nthUser(k)];
        if (typeof userDetails != 'undefined' && nthUser(k) != i) {
            console.log(nthUser(k));
            //console.log(userDetails);
            var bLiked = userDetails.liked,
                bDisliked = userDetails.disliked;
            similarity = (_.intersection(aLiked, bLiked).length+_.intersection(aDisliked, bDisliked).length-_.intersection(aLiked, bDisliked).length-_.intersection(aDisliked, bLiked).length) / _.union(aLiked, bLiked, aDisliked, bDisliked).length
            console.log("Similarity : "+similarity);
        }

    }
    // userInterests[nthUser(6)]
    linkedUsers = [], similarity = 0;
}
