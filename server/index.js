const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server); 
const PORT = 5001;

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

io.on("connection", (socket) => {
  console.log("クライアントに接続。");
  socket.on("disconnect", () => {
    console.log("クライアントとの接続を切断。");
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});