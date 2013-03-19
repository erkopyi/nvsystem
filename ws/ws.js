var static = require('node-static'),	
    http = require('http'),
    url = require('url'),
    request = require('request');
var port = 5678;
var dir = './../_site';

var file = new(static.Server)(dir, { cache: 600, headers: {'Powered-By':'NV System'} });


http.createServer(function(request, response) {
   if(url.parse(request.url).pathname == '/server.js'){
	}else{	
		file.serve(request, response, function (err, res) {
			if (err) { // An error as occured
				console.error("> Error serving " + request.url + " - " + err.message);
				response.writeHead(err.status, err.headers);
				response.end();
			} else { // The file was served successfully
				console.log("> " + request.url + " - " + res.message);
			}
		});
	}
}).listen(port);

console.log("> node-static is listening on http://127.0.0.1:" + port);

