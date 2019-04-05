const express = require("express"); 
const fs= require('fs');
const app=require('express')();
const http=require('http').Server(app);
const io=require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app"));

// логируем каждое обращение к серверу 
app.use(function(request, response, next){
     
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
    // console.log(data);
    fs.appendFile("server.log", data + "\n", function(){});
    next();
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });    
});
  




app.listen(port,function(){

    console.log('listenen on *: '+port);
})