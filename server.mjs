import http from "node:http";

const port = Number(process.env.PORT || 3000);

http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8"
  });
  res.end(JSON.stringify({ status: "ok", app: "practice" }));
}).listen(port, "0.0.0.0");