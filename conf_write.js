const fs = require('fs')

var data = { Interface:
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
       AllowedIPs: '172.24.0.4/32, 10.4.0.0/16' } ] }

function writeFileConf(data) {
	let output ='';
	let count = 0;
	for(var section in data) {
		if (count < 0) {
			output += '\n'
		}

		output += '[' + section + ']\n'

		for(var item in data[section]) {
			output += item + ' = ' + data[section][item] + '\n'
		}
		count++
	}
	console.log(output)
}

writeFileConf(data)