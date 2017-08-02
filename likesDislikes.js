var movies = firebase.database().ref("movies/");
var promises =[], movies , users;

promises.push(movies.once('value').then(function(snapshot) {
  // The Promise was "fulfilled" (it succeeded).
  movies = (snapshot.val());
  console.log(Promise.resolve("Movie FDB Success"));
}, function(error) {
  // The Promise was rejected.
  console.error(error);
}));

var users = firebase.database().ref("users/");

promises.push(users.once('value').then(function(snapshot) {
  // The Promise was "fulfilled" (it succeeded).
  users = (snapshot.val());
  console.log(Promise.resolve("User FDB Success"));
}, function(error) {
  // The Promise was rejected.
  console.error(error);
}));

Promise.all(promises).then(function() {
  console.log(movies)
  console.log(users)
  console.log(true);
});
