import http from "http";

const server = http.createServer(function(req, res) {
    console.log(`user visited ${req.url}`);
    res.end("hello!");
});

console.log("listending on http://localhost:3000");
server.listen(3000);