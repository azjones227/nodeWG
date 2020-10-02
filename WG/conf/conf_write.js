const fs = require('fs')

/*var data = { Interface:
   { Address: '172.24.0.3/32',
     PrivateKey: '0JMSY0Rf9TsT9JAfM4/QMX8PvuNCejNUM0vUtJC6GHo=',
     ListenPort: '51820',
     PostUp:
      [ 'iptables -t nat -A POSTROUTING -m iprange --src-range 192.168.0.0-192.168.255.255 -o wg0 -j MASQUERADE',
        'iptables -t nat -A POSTROUTING -m iprange --src-range 172.16.0.0-172.23.255.255 -o wg0 -j MASQUERADE',
        'ip route add 10.0.0.0/8 dev wg0' ] },
  Peer:
   [ { PublicKey: 'AsS7aikCUrXpdfSvwFnMs0yUaoQ7ZCkoUVOmNdl7NS8=',
       AllowedIPs: '172.24.0.2/32, 10.2.0.0/16',
       Endpoint: '718it.biz:51820',
       PersistentKeepalive: '25' },
     { PublicKey: 'QZCvR3N1CdUabC2xWfc1lmYKHfSiXYs1UoVINIMftws=',
       Endpoint: 'gg-pve-0.wgnode.com:51820',
       AllowedIPs: '172.24.0.1/32, 10.1.0.0/16' },
     { PublicKey: 'm7Ldqa+DaJj1sCt14vRwoBPCLuQ2GzFgu9CF6EU/GAg=',
       Endpoint: 'ron.theta42.com:51871',
       AllowedIPs: '172.24.0.4/32, 10.4.0.0/16' } ] }*/

function confWrite(data, confFile) {
	let output ='';
	console.log('init output = \" \"')
	let count = 0;
	console.log('init count = 0')

	for(let section in data) {
		console.log('entering first parse loop')

		if(Array.isArray(data[section])) {
			console.log('entering array: ' + section )
			for (let i = 0; i < data[section].length; i++){
				output += '\n'
				output += '[' + section + ']\n'
				output += sectionParse(data[section][i])
			}

		} else {
			output += '[' + section + ']\n'
			console.log('added new section heading' + section)
					output += sectionParse(data[section])
		}
		output +='\n'
	}
	fs.writeFileSync(confFile, output)
}

function sectionParse(section){
	result = ''
	for(let item in section) {
		if (Array.isArray(section[item])){
			for(let j = 0; j < section[item].length; j++) {
				result += item + ' = ' + section[item][j] + '\n'
			}

		} else {result += item + ' = ' + section[item] + '\n'}
	}
	return result;
}

//confWrite(data)

module.exports = confWrite;