//var wg_interface = require('./wg_interface/wg_interface')
//var peer = require('./peer/peer')
var write = require('./conf/conf_write')
var read = require('./conf/conf_read')

class Wireguard {
	constructor(interface, confObj) {
		this.interface = interface || throw new Error('Interface Required!')
		this.confFile = `/etc/wireguard/${interface}.conf`
		let readConf = read(this.confFile) || {}
		this.conf = {...readConf, ...confObj || {}}
	}
 
 	createPeer(p_data){
		this.conf.peer.push(p_data)
	}
}

result = new Wireguard('test0')
console.log(result.interface)
console.log(result.confFile)
console.log(result.conf)