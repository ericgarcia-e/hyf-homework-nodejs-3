const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/users', (req, res) => {
res.json([{id:0}]);
})
app.post('/users', (req, res) => {
  res.json([{id:0}]);
  })
app.get('/user/:id ', (req, res) => {

  res.json([{id:0}]);
  })
app.listen(3000, ()=>{
    console.log("listen the port 3000")
});
