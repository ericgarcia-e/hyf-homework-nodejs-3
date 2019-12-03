const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/users', (req, res) => {
res.json([]);
})
app.listen(3000, ()=>{
    console.log("listen the port 3000")
});