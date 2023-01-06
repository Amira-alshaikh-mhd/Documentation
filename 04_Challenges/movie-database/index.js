const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express()
const port = 3000



const movies = [
    {id:1, title: 'Jaws', year: 1975, rating: 8 },
    {id:2, title: 'Avatar', year: 2009, rating: 7.8 },
    {id:3, title: 'Brazil', year: 1985, rating: 8 },
    {id:4, title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]




app.get('/', (req, res) => {
    res.status(200);

    res.send('Wellcome')
})


// Test command
app.get('/test', (req, res) => {
    res.status(200);

    res.send("ok")

});
// Time command
app.get('/time', (req, res) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const seconds = currentTime.getSeconds();
    res.status(200);


    res.send("so: " + hours + ":" + seconds)
});

// hello command
app.get('/hello/:id', (req, res) => {
    const id = req.params.id;
    res.status(200);

    res.send(`Hello,${id}`);
});
app.get('/hello', (req, res) => {
    const id = req.params.id;
    res.status(200);

    res.send(`Hello`);
});

//   search command
app.get('/search', (req, res) => {
    const search = req.query.s;

    if (typeof search != 'undefined') {
        // Search string applied
        res.status(200);
        res.send(`ok, data: ${search}`);
    }
    else {

        res.status(500);
        res.send("you have to provide a search");
    }
});

// create commad
app.get('/movies/create', (req, res) => {
    res.send("create")

});
//  read command
app.get('/movies/read', (req, res) => {
    res.status(200);
    res.send(movies)


});

// ORDERED BY DATE

app.get('/movies/read/by-date', (req, res) => {

    const sortedMovies = movies.sort((a, b) => a.year - b.year);
    res.status(200);
    res.send(sortedMovies);
});


//   ORDERED BY RATING

app.get('/movies/read/by-rating', (req, res) => {

    const sortedMovies = movies.sort((a, b) => b.rating - a.rating);
    res.status(200);
    res.send(sortedMovies);
});

// ORDERED BY TITLE

app.get('/movies/read/by-title', (req, res) => {
    const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title));
    res.status(200);
    res.send( sortedMovies);
  });



//   movie defined by the ID

  app.get('/movies/read/id/:id', (req, res) => {
    
    const id = req.params.id;

    const movie = movies.find(movie => movie.id === Number(id));

    if (movie) {
      res.status(200);
      res.send(movie)
    } else {
      res.status(404);
      res.send(`the movie ${id} does not exist` );
    }
  });




// update command
app.get('/movies/update', (req, res) => {
    res.send("update")

});
// delete command
app.get('/movies/delete', (req, res) => {
    res.send("delete")

});











app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})