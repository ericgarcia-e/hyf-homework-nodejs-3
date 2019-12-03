const express = require('express')
const app = express()
let users = [];
 
app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/users', (req, res) => {
res.json([users]);
})
app.post('/users', (req, res) => {
 users.push({id:0})
  res.json([users]);
  })
app.get('/user/:id ', (req, res) => {

  res.json([{id:0}]);
  })
app.listen(3000, ()=>{
    console.log("listen the port 3000")
});
