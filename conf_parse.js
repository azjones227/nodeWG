const fs = require('fs')

var data = fs.readFileSync('./test.conf','utf-8').split('\n');

//console.log(data)

function getfileconf(data) {
	let conf = {};
	let lastsection = ''
	data.forEach(function(value) {
		if (value.search(/\[(\w+)\]/i) === 0) {
			if(conf[value.slice(0, value.length-1)]) && (Array.isArray(conf[value.slice(0, value.length-1)]) != true) {
				conf[value.slice(0, value.length-1)] = toarray(conf[value.slice(0, value.length-1)])
			} else {
				conf[value.slice(0, value.length-1)] = {}
			}
			if (lastsection != value.slice(0, (value.length-1))){
				lastsection = value.slice(0, (value.length-1))
			}
		} else if (value.search(/ = /i) != -1) {
			let attribute = value.split(' = ')
			conf[lastsection][attribute[0]] = attribute[1];
		}
	});
	console.log(conf)
}

function toarray(data) {
	let temp = [];
	temp.push(data);
	return temp;
}
getfileconf(data);