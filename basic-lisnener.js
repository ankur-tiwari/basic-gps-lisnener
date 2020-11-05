var net    = require('net'); // to create a TCP server
const axios = require('axios'); //to hit curl request of our server
var moment = require('moment'); // time related opreation should be manage with this package

var HOST   = '0.0.0.0';//localhost
var PORT   = 5008;//port that allow on the server to communicate with device

var fs = require("fs");//to write logs in our file

console.log("############################ Listner Is Running ############################", HOST, PORT);

//create a TCP server to read data sending from the device
net.createServer(function(sock) {
    //if device connected and sending data on socket then you can find it here
    sock.on('data', function(data) {
        //converte any kind of data into human readable form with the help  utf8 charset
        var result = data.toString('utf8');
    	//check the console in terminal
    	console.log(result);
        //Read the device manual carefully and you can split string on the basic of that
    });

}).listen(PORT, HOST);

//function to write logs in our file
function write_log(write_content) {
	fs.appendFile('/var/www/logs/server-log.txt', write_content, function (err) {
		if (err) { throw err; }
	});
}
