const fs = require('fs')

var data = fs.readFileSync('./test.conf','utf-8').split('\n');

console.log(data)

function getfileconf(data) {
	console.log('initialize conf & lastsection')
	let conf = {};
	let lastsection = ''

	data.forEach(function(value) {
		console.log('this is the current value:' + value)

		if (value.search(/\[(\w+)\]/i) === 0) {
			console.log('found a section, value.slice(1, value.length-1')
			let section = value.slice(1, value.length-1);
			console.log('this is the current section:' + section)

			if(section === lastsection && Array.isArray(conf[lastsection]) != true) {
				console.log('making an array, toarray(conf[section])')
				conf[section] = toarray(conf[section])

			} else {
				console.log('adding a new section to conf')
				conf[section] = {}
			}

			if (lastsection != section){
				console.log('changing the last used section, section > lastsection')
				lastsection = section;
				console.log(lastsection)
			}

		} else if (value.search(/ = /i) != -1) {
			console.log('found an attribute')
			let attribute = value.split(' = ')
			console.log('this is the attribute: ' + attribute[0])
			console.log('this is the value: ' + attribute[1])

			if (attribute[1].search(/\d\,\s/i) != -1){
				console.log('this attribute has multiple values' + attribute[0])
				attribute[1] = attribute[1].split(', ')
			}

			if (Array.isArray(conf[lastsection]) === true) {
				console.log('the destination is inside an array')
				conf[lastsection][conf[lastsection].length-1][attribute[0]] = attribute[1] //The Problem: how to place data in a specific spot in an array without knowing the location

			} else {
				console.log('the destination is stand alone')
				conf[lastsection][attribute[0]] = attribute[1];
			}

		} else {
			console.log('i have failed to place the data')
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