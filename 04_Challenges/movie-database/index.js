const express = require('express')
const app = express()
const port = 3000






app.get('/test', (req, res) => {
    res.send("ok")

});

app.get('/time', (req, res) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const seconds = currentTime.getSeconds();
  
    res.send(hours + ":" + seconds )
  });
  



app.get('/', (req, res) => {
  res.send('okkkkkk')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})