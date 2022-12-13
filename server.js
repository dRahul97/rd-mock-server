//1. npm init -y
//2. npm i json-server
//3. create server.js
//4. Copy the template of json-server from npm json-server and paste into server.js
//5. node server.js =>  create db.json file
//

const PORT = process.env.PORT || 4000;
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("/api", router);
server.listen(PORT, () =>
  console.log(`JSON Server is running on port ${PORT}`)
);

//1. base url 'http://localhost:3000/'
//2. Endpoint "/api/todo"
//3. Query param
