const fs = require('fs')

var data = fs.readFileSync('./test.conf','utf-8').split('\n');

console.log(data)

function conftoJSON(data){
	
}

//function JSONtoconf()