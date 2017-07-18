
// Trying to get the data from MOVIE DB

var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=<<KEY>>&language=en-US&page=';
var finalList = new Array();

var processStatus = function (response) {
    // status "0" to handle local files fetching (e.g. Cordova/Phonegap etc.)
    if (response.status === 200 || response.status === 0) {
        return Promise.resolve(response.json())
    } else {
        return Promise.reject(new Error(response.statusText))
    }
};

for(var i=1;i<=5;i++){

    fetch(url+i)
        .then(processStatus)
        .then(function(data) {
            console.log(data);
            finalList.push(data.page);
        })
        .catch(function(error) {
            console.log(error);
        });

}

Promise.all(finalList).then(function() {
    // returned data is in arguments[0], arguments[1], ... arguments[n]
    // you can process it here
	console.log(finalList);
}, function(err) {
    // error occurred
});
