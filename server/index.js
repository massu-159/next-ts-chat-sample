const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: ["localhost://3000"],
  },
});



const PORT = 5001;

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

// クライアントと通信
io.on("connection", (socket) => {
  console.log("クライアントに接続。");

  socket.on("send_message", (data) => {
    console.log(data);
  })

  socket.on("disconnect", () => {
    console.log("クライアントとの接続を切断。");
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});