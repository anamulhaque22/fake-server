const data = require("./db.js");
const { videos, transactions } = data
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(videos, transactions);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

server.use(middlewares);
server.use(router);

server.listen(port);