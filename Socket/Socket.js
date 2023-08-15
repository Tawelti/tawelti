// const express= require("express")
// const app =express()
// const http =require('http')
// const cors=require("cors")
// const {Server}=require("socket.io")
// app.use(cors())
// const server=http.createServer(app)

// const io = new Server(server)
// io.on("connection",(socket)=>{
//     console.log(`user connected:${socket.id}`)
    
//     socket.on("disconnect",()=>{
//         console.log(`user disconnect:${socket.id}`)
//     })
// })


// server.listen(3001,()=>{console.log('server listening on port 3001')})


const express= require("express")
const app =express()
const http =require('http')
const cors=require("cors")
const {Server}=require("socket.io")
app.use(cors())
const server=http.createServer(app)
const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000"
      },
})

const userSocketMap = new Map();

io.on('connection', socket => {
  console.log('A user connected');

  socket.on('setUserId', userId => {
    userSocketMap.set(userId, socket.id);
  });

  socket.on('notification', ({ userId, message }) => {
    const userSocketId = userSocketMap.get(userId);
    console.log(userSocketId)
    const userSocket = io.sockets.connected[userSocketId];

    if (userSocket) {
      userSocket.emit('notification', { message });
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    userSocketMap.forEach((value, key) => {
      if (value === socket.id) {
        userSocketMap.delete(key);
      }
    });
  });
});



server.listen(3001,()=>{console.log('server listening on port 3001')})