
// Trying to get the randomuser data

var url = 'https://randomuser.me/api/?results=100';
var finalData =[], promises=[];

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
        firebase.database().ref('users/' + list[i].login.username).set({
                name: list[i].name.first.toUpperCase()+"_"+list[i].name.last.toLocaleUpperCase(),
                id: list[i].login.username
              });
    }
}, function(err) {
    console.log(err);
});
