const fs = require('fs')

var data = fs.readFileSync('./test.conf','utf-8').split('\n');

//console.log(data)

function getfileconf(data) {
	let conf = {};
	let lastsection = ''
	data.forEach(function(value) {
		console.log(value)
		console.log(lastsection)
		if (value.search(/\[(\w+)\]/i) === 0) {
			console.log('found a section')
			if(value.slice(1, value.length-1) === conf[lastsection] && Array.isArray(conf[lastsection]) != true) {
				console.log('making an array')
				conf[value.slice(1, value.length-1)] = toarray(conf[value.slice(0, value.length-1)])
			} else {
				console.log('making a new section')
				conf[value.slice(1, value.length-1)] = {}
			}
			if (lastsection != value.slice(0, (value.length-1))){
				console.log('im changing the last used section')
				lastsection = value.slice(0, (value.length-1))
				console.log(lastsection)
			}

		} else if (value.search(/ = /i) != -1) {
			let attribute = value.split(' = ')

			if (attribute[1].search(/, /i) != -1) {
				console.log(attribute[1])
			}
            conf[lastsection][attribute[0]] = attribute[1];
		} else {
			console.log('i have failed to place the data')
		}
		console.log(conf)
	});
	
}

function toarray(data) {
	let temp = [];
	temp.push(data);
	console.log(temp);
	return temp;
}

getfileconf(data);