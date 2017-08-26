var t1 = firebase.database().ref("movieInterests/");
var promises =[], movieInterests = {} , users = [], userInterests = {}, tempLike = [],tempDislike = [];

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
       for(i=0;i<100;i++){
           //console.log("users[0].id wil have 0 , will work on it later");
           for(j in movieInterests){
               if(_.contains(movieInterests[j].disliked,i)){
                   tempDislike.push(j);
                }
               if(_.contains(movieInterests[j].liked,i)){
                   tempLike.push(j);
                }
           }
           userInterests[users[i].id]={"liked":tempLike,"disliked":tempDislike};
           firebase.database().ref('userInterests/' + users[i].id).set({
                 liked: tempLike,
                 disliked: tempDislike
               });
           tempLike =[],tempDislike=[];
       }


  console.log(userInterests);

});
