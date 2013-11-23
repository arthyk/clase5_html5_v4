var http = require("http");
var fs = require("fs");
var socketio = require("socket.io");
var app = http.createServer(function(request, response) {

	console.log("hola mundo nodejs");
	fs.readFile("cliente.html", function(error, data) {
		
		response.writeHeader(200, {"Content-Type" : "text/html"});
		response.write(data);
		response.end();
	});

});
app.listen(8888);

var io = socketio.listen(app);
io.sockets.on("connection",function(socket){
	
	socket.on("mensaje_al_servidor",function(datos){
		io.sockets.emit("mensaje_al_cliente", datos);
	});
});










