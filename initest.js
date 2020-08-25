const fs = require('fs')
	, ini = require('ini')

//var conf = ini.parse(fs.readFileSync('./test.conf','utf-8'))
var test = ini.encode((fs.readFileSync('./test.conf','utf-8')), section= 'Peer')
//console.log(conf)
console.log(test)