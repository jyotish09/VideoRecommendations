var t1 = firebase.database().ref("movieInterests/");
var promises =[], movieInterests = {} , users = [];

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

Promise.all(promises).then(function(){
   //console.log(movieInterests);
  for(i in movieInterests){
    // console.log(movieInterests[i].disliked);
    // console.log(movieInterests[i].liked);
    if(_.contains(movieInterests[i].disliked,540))
       console.log(i+" disliked");
    if(_.contains(movieInterests[i].liked,540))
       console.log(i+" liked");
  }

});
