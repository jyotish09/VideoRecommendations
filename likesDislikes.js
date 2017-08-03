var t1 = firebase.database().ref("movies/");
var promises =[], movies = [] , users = [];

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

Promise.all(promises).then(function() {
  console.log(movies);
  //for(i in movies){console.log(movies[i]);}
  //console.log(users)
  //console.log(true);
  var arr = []
  while(arr.length < 200){
      var randomnumber = Math.ceil(Math.random()*1000)
      if(arr.indexOf(randomnumber) > -1) continue;
      arr[arr.length] = randomnumber;
  }

});
