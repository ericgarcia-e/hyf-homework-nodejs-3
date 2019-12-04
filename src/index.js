const express = require('express')
const aplication = express()
let users = [];

 
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
  
  //users.find(user => user.id == req.params.id);
  if(user.length>0){
    users=[];
res.status(202).json(users);
    
  }else {
    users=[];
    res.status(204).json(users);
  }
 
});

aplication.listen(3000, ()=>{
    console.log("listen the port 3000")
});
