var wg_interface = require('./wg_interface/wg_interface')
var peer = require('./peer/peer')
var write = require('./conf/conf_write')
var read = require('./conf/conf_read')

class Wireguard {
	constructor() {
		this.wg_interface = new wg_interface
		this.peers = []
	}

	configureInterface(data){
		for (let item in data) {
			this.wg_interface[item] = data[item]
		}
	}

	getInterface(){
		return this.wg_interface;
		//placeholder code
	}

	createPeer(){
		peer = new peer
		configurePeer(p_data)
		return peer;
	}
	


	addpeer(p_data){
		//placeholder code
		peer = createPeer(p_data)
		this.peers.push()
	}
}

i_data = { Address: '172.24.0.3/32',
     PrivateKey: '0JMSY0Rf9TsT9JAfM4/QMX8PvuNCejNUM0vUtJC6GHo=',
     ListenPort: '51820',
     PostUp:
      [ 'iptables -t nat -A POSTROUTING -m iprange --src-range 192.168.0.0-192.168.255.255 -o wg0 -j MASQUERADE',
        'iptables -t nat -A POSTROUTING -m iprange --src-range 172.16.0.0-172.23.255.255 -o wg0 -j MASQUERADE',
        'ip route add 10.0.0.0/8 dev wg0' ] }

p_data = { PublicKey: 'AsS7aikCUrXpdfSvwFnMs0yUaoQ7ZCkoUVOmNdl7NS8=',
       AllowedIPs: '172.24.0.2/32, 10.2.0.0/16',
       Endpoint: '718it.biz:51820',
       PersistentKeepalive: '25' }        

wg0 = new Wireguard
console.log('new wireguard created')
console.log(wg0)

wg0.configureInterface(data)
console.log('inteface configured')
console.log(wg0)