const express = require('express')
const aplication = express()
let users = [];
 
aplication.get('/', function (req, res) {
  res.send('Hello World!')
})
aplication.get('/users', (req, res) => {
res.json([{id : 0}]);
})
aplication.post('/user', (req, res) => {
 users.push( { id: 0 })
  res.json(users);
  })
  aplication.get('/users', (req, res) => {
    users.push( { id: 0 })
     res.json(users);
     })
  aplication.get('/user/:id', (req, res) => {
    const user = users.find(user => user.id == req.params.id);
    res.json(user);
});
aplication.listen(3000, ()=>{
    console.log("listen the port 3000")
});
