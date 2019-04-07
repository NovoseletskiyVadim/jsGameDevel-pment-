var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

const fs= require('fs');

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

app.use(express.static(__dirname + "/app"));


io.on('connection', function(socket){
  console.log('add user');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });   
   
});



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






http.listen(port, function(){
  console.log('listening on *:' + port);
});
