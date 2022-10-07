 //Node server to handle socket.io connections

//  import { Server } from "socket.io";
 
//  const io=new Server(8000)

const io=require('socket.io')(8000)
 const users = {};
 io.on('connection',socket => {
     socket.on('new-user-joined',name =>{
         console.log("new user",name)
         users[socket.id]=name
         socket.broadcast.emit('user-joined',name)
     });

     socket.on('send',message =>{
         socket.broadcast.emit('recieve',{message: message, name:users[socket.id]})
     });

     socket.on("disconnect",message => {
        socket.broadcast.emit('left',users[socket.id]);
        delete users[socket.id];
      });
 })