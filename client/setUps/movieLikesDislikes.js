var t1 = firebase.database().ref("movies/");
var promises =[], movies = [] , users = [];

function randNumGen(){
    var arr = []
    while(arr.length < 600){
        var randomnumber = Math.ceil(Math.random()*1000)
        if(arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }
    return arr;
}

promises.push(t1.once('value').then(function(snapshot) {
  // The Promise was "fulfilled" (it succeeded).
  t1 = (snapshot.val());
  for(i in t1){movies.push(t1[i]);}
  console.log(Promise.resolve("Movie FDB Success"));
}, function(error) {
  // The Promise was rejected.
  console.error(error);
}));

var t2 = firebase.database().ref("users/");

promises.push(t2.once('value').then(function(snapshot) {
  // The Promise was "fulfilled" (it succeeded).
  t2 = (snapshot.val());
  for(i in t2){users.push(t2[i]);}
  console.log(Promise.resolve("User FDB Success"));
}, function(error) {
  // The Promise was rejected.
  console.error(error);
}));

Promise.all(promises).then(function(){
  for(i=0;i<movies.length;i++){
      var randUsers = randNumGen();

      //DB for liked & disliked movies with movie ID
      console.log(movies[i].title);
      console.log("liked");
      console.log(randUsers.slice(0,300));
      console.log("disliked");
      console.log(randUsers.slice(300,600));
      firebase.database().ref('interests/' + movies[i].id).set({
            liked : randUsers.slice(0,300),
            disliked : randUsers.slice(300,600)
       });
  }


});
