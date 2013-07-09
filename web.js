var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var index_contents=new Buffer(1024);
    fs.readFileSync("index.html", function (err, data) {
	if (err) throw err;
	index_contents.write(data);
    });
    response.send(index_contents.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {

    console.log("Listening on " + port);
});
