var t1 = firebase.database().ref("movieInterests/");
var promises =[], movieInterests = {} , users = [], userInterests = {};

promises.push(t1.once('value').then(function(snapshot) {
  // The Promise was "fulfilled" (it succeeded).
  t1 = (snapshot.val());
  for(i in t1){
      movieInterests[i]=t1[i];
  }
  console.log(Promise.resolve("movieInterests FDB Success"));
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
  for(i in movieInterests){
    if(_.contains(movieInterests[i].disliked,540))
       console.log(i+" disliked");
    if(_.contains(movieInterests[i].liked,540))
       console.log(i+" liked");
  }

});
