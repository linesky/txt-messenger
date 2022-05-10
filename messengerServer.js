var fs = require("fs"); 
var nt = require("net");

var srv=nt.createServer();
srv.on("connection",Connection);

srv.listen(8080,function(){
	console.log("messager server")
});

function Connection(connection){
	var d = Date();
	console.log(d);
connection.on('data',onData);
connection.on('close',onClose);
connection.on('error',onError);
	function onData(data){
		var v="";
		console.log("--------");
		vv=data.toString();
		vv=connection.remoteAddress+" : " + vv;
		console.log(vv);
		connection.end("\n\rok\n\r");		
	}
	function onClose(){
		var d = Date();
		console.log(d);
	}
	function onError(data){
		console.log(data);
	}



}
