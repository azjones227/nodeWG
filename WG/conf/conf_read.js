const fs = require('fs')


//console.log(data)

function confRead(filename) {
	//console.log('initialize conf & lastsection');
	let conf = {};
	let currentsection = '';
	var data = fs.readFileSync(filename,'utf-8').split('\n');

	for(let i = 0; i < data.length; i++){

		if (data[i].startsWith('[') === true){
			console.log('found a section');
			let name = data[i].slice(1, data[i].length-1);

			if(Array.isArray(conf[name]) === true) {
				console.log('adding to existing array');
				conf[name].push({});
				currentsection = conf[name][conf[name].length-1];
			}

			if(conf[name] && Array.isArray(conf[name]) === false) {
				console.log('making an array on section ' +name)
				conf[name] = toarray(conf[name])
				conf[name].push({})
				currentsection = conf[name][conf[name].length-1]
			}

			if(!conf[name]){
				console.log('making a new section')
				conf[name] = {}
				currentsection = conf[name]
			}
			console.log(currentsection)

		}

		if(['#', '/'].includes(line[0])) continue;

		if(data[i] != '') {
			console.log('found an attribute')
			let attribute = data[i].split(' = ')
			console.log('this is the attribute: ' + attribute[0])
			console.log('this is the value: ' + attribute[1])

			if(Array.isArray(currentsection[attribute[0]]) === true){
				currentsection[attribute[0]].push(attribute[1])
			}

			if(currentsection[attribute[0]] && Array.isArray(currentsection[attribute[0]]) === false){
				currentsection[attribute[0]] = toarray(currentsection[attribute[0]]);
				currentsection[attribute[0]].push(attribute[1])
			}

			if(!currentsection[attribute[0]]){
				currentsection[attribute[0]] = attribute[1]
			}

		} /*else {
			console.log('encountered blank line')
		}*/
	}

	console.log(conf);
	return conf;
}


function toarray(data) {
	let temp = [];
	temp.push(data);
	return temp;
}

//test = confRead(data);

module.exports = confRead;