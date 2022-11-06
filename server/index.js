const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: ["localhost://3000"],
    credentials: true,
  },
});

const PORT = 5001;

// クライアントと通信
io.on("connection", (socket) => {
  console.log("クライアントに接続。");

  socket.on("send_message", (data) => {
    console.log(data);

    // クライアントへ送信
    io.emit("received_message", data);
  });

  socket.on("disconnect", () => {
    console.log("クライアントとの接続を切断。");
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});