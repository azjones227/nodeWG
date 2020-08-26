const fs = require('fs')

var data = fs.readFileSync('./test.conf','utf-8').split('\n');

console.log(data)

function confParse(data){
	for line in data {
		switch (line){
			case '':
				break;

			case ''
		}
	}
}

//function JSONtoconf()