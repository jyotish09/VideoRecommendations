
// Trying to get the data from MOVIE DB

var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=<API_KEY>&language=en-US&page=';
var finalData =[], promises=[], movieList =[];

for(var i=1;i<=25;i++){
    //To get all the states of promises.
    promises.push(
        fetch(url+i)
            .then(response => response.json())
            .then(function(data) {
                finalData.push(data);
            })
            .catch(function(error) {
                console.log(error);
            })
        );
}
// Once the promises are all full filled only then run this.
Promise.all(promises).then(function() {
	for(i in finalData){
        res = finalData[i].results;
        for(j in res){
            console.log("title :"+res[j].title);
            console.log("id :"+res[j].id);
            console.log("original_title :"+res[j].original_title);
            movieList.push({"title":res[j].title,"id":res[j].id,"original_title":res[j].original_title});
        }
    }
    console.log(movieList.length);
}, function(err) {
    console.log(err);
});
