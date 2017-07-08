# Video / Movie Recommendations

###### A simple recommendation engine , how it works and to build one.

A recommendation engine is a feature of a product that can filter the data to a few good ,which the user may have missed, suggestions which the user may *"like"* based on their previous like and dislikes .It checks for other similar users and their preferences , it uses the similarity index between the users and finds the required data.

 [More on Recommendation Engines](https://www.analyticsvidhya.com/blog/2015/10/recommendation-engines/)

Before we start the idea is to make simple one enough to grasp the concept and the code behind it.Also there's a couple of to-do items to do before we start writing the code. I'll update as I proceed

    [X] The Math behind the Similarity Index
    [X] Tech Stacks Required to build the project
    [ ] The real code

#### The Math

The Jaccard index, also known as Intersection over Union and the Jaccard similarity coefficient (originally coined coefficient de communauté by Paul Jaccard), is a statistic used for comparing the similarity and diversity of sample sets. The Jaccard coefficient measures similarity between finite sample sets, and is defined as the size of the intersection divided by the size of the union of the sample sets :

> ![The Equation](https://wikimedia.org/api/rest_v1/media/math/render/svg/eaef5aa86949f49e7dc6b9c8c3dd8b233332c9e7)

(|A| means the number of elements in that set)


This gives a ratio whose range will be
> ![RANGE](https://wikimedia.org/api/rest_v1/media/math/render/svg/896adf7fa55a30dfc437230e64c34524e278dc5c)

0 means no common interest and 1 means identical interest. In short this can be used to find how much a user will the video/movie based on the other users interests (hive mind sum).

Now let's talk about 2 users (U1 & U2) , who like a set of movies L1 & L2 respectively. Their similarity ratio can be found by modifying the J(A,B) eq like this :

> ![Eq](https://uploads.toptal.io/blog/image/833/toptal-blog-image-1423054895195.png)

If we account the fact that those two users have *dis*liked some movies then the eq will modify into

> ![Eq1](https://uploads.toptal.io/blog/image/835/toptal-blog-image-1423054912191.png)

That's for two users , now we need to sample that user's likes & dislikes set to all the users to find a generic similarity value.

> ![MAIN EQ](https://uploads.toptal.io/blog/image/836/toptal-blog-image-1423054919409.png)

        P(U,M)- The possibility of a user U liking the movie M.
        ZL & ZD - Sum of the similarity indices of user U with all the users who have liked or disliked the movie M, respectively.
        |ML|+|MD| - The total number of users who have liked or disliked the movie M.

    PS : P(U,M) will be between -1.0 and 1.0.


#### Tech Stacks Required

* [ReactJS](https://facebook.github.io/react/) - Interactive UI boilerplate
* [Firebase](https://firebase.google.com/) - Database (npm install -g firebase-cli then firebase init)
* [React-Bootstrap](https://react-bootstrap.github.io/) - UI boilerplate
* [yarn](https://yarnpkg.com/lang/en/) - Evented I/O for the backend
* [TMDB](https://www.themoviedb.org) - The Movie Database to get a bunch of movie lists and details , only one time use
