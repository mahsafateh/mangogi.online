const http = require('http');

http.createServer(function(req, res){
  res.write("Mangogi will be going to start soon");
  res.end();
}).listen(3000);

console.log("Server Started on PORT : 3000");
