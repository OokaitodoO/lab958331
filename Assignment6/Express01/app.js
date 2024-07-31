const express = require('express')
const app = express()

app.get('/hello', function(req, res){
    res.send("Hello World <br/>Bye World...")
})

app.listen(9999, function(){
    console.log("Sever is running on port 9999")
})