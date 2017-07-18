
// Trying to get the data from MOVIE DB

var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=<API_KEY>&language=en-US&page=';
var finalList =[], promises=[];

for(var i=1;i<=5;i++){
    promises.push(
        fetch(url+i)
            .then(response => response.json())
            .then(function(data) {
                finalList.push(data);
            })
            .catch(function(error) {
                console.log(error);
            })
        );
}

Promise.all(promises).then(function() {
	console.log(finalList);
}, function(err) {
    console.log(err);
});
