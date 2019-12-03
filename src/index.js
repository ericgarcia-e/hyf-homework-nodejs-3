const express = require('express')
const aplication = express()
let users = [];
let user=[];
 
aplication.get('/', function (req, res) {
  res.send('Hello World!')
})
aplication.get('/users', (req, res) => {
res.json(users);
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
aplication.delete('/user/:id', (req, res) => {
  //const user = [];
  //users.find(user => user.id == req.params.id);
  if(user==true){
    user=[];
res.status(200).json(user);
    
  }else {
    user=[];
    res.status(204).json(user);
  }
 
});

aplication.listen(3000, ()=>{
    console.log("listen the port 3000")
});
