const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express()
const port = 3000



app.get('/', (req, res) => {
    res.send('Wellcome')
  })


// Test command
app.get('/test', (req, res) => {
    res.send("ok")

});
// Time command
app.get('/time', (req, res) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const seconds = currentTime.getSeconds();
  
    res.send("so: " + hours + ":" + seconds )
  });

// hello command
  app.get('/hello/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Hello,${id}`);
  });  
  app.get('/hello', (req, res) => {
    const id = req.params.id;
    res.send(`Hello`);
  });

//   search command
app.get('/search',(req,res) => {
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

    
  
  






app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})