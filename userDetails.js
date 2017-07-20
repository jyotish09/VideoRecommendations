
// Trying to get the randomuser data

var url = 'https://randomuser.me/api/?results=100';
var finalData =[], promises=[], users = [];

    promises.push(
        fetch(url)
            .then(response => response.json())
            .then(function(data) {
                finalData.push(data.results);
            })
            .catch(function(error) {
                console.log(error);
            })
        );

// Once all promises are resolved

Promise.all(promises).then(function() {
    var list = finalData[0];
    for(i in list){
        users.push({ "name" : list[i].name.first.toUpperCase()+"_"+list[i].name.last.toLocaleUpperCase() , "ID" : list[i].login.username});
    }
    console.log(users);
}, function(err) {
    console.log(err);
});
