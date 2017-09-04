var promises = [],
    data = [],
    users,
    similarUsers,
    node = [],
    link = [];

function userNvalue(x) {
    var i = 0;
    for (j in users) {
        if (j == x) {
            return i;
        } else {
            i++;
        }
    }
}

function randomColorGenerator() {
    var hexLetter = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += hexLetter[Math.floor(Math.random() * 16)];
    }
    return color;
}

var t1 = firebase.database().ref("/");

promises.push(t1.once('value').then(function(snapshot) {
    // The Promise was "fulfilled" (it succeeded).
    t1 = (snapshot.val());
    for (i in t1) {
        data.push(t1[i]);
    }
    console.log(Promise.resolve("FDB Read Success"));
}, function(error) {
    // The Promise was rejected.
    console.error(error);
}));

Promise.all(promises).then(function() {

    similarUsers = data[2],
        users = data[4],
        k = 0;

    console.log("similarUsers");
    console.log(similarUsers);
    console.log("users");
    console.log(users);

    //Nodes in the Graph
    for (i in users) {
        firebase.database().ref('nodes/' + k).set({
            name: i,
            group: k++
        });
    }
    //for(i in node){console.log(node[i].group);}

    //Color Groups for node
    for (var i = 0; i < 100; i++) {
        var x = randomColorGenerator();
        console.log('%c WHOA! ' + x, 'background :' + x);
        firebase.database().ref('color/' + i).set({
            color: x
        });
    }
    //for(i in color){ console.log('%c TEST '+color[i].color, 'background :'+ color[i].color); }


    //Links Based on Similarity Values
    var k = 0;
    for (i in similarUsers) {
        console.groupCollapsed("Linked with " + userNvalue(i) + " " + i +" includes "+linked.length+" nodes");

        var linked = similarUsers[i]["similarityIndexes"];
        for (j in linked) {
            var value = (linked[j].value);
            console.log(userNvalue(linked[j].id)+" : "+value);
            console.log(k++);
        }

        console.groupEnd();
    }


});
