//var wg_interface = require('./wg_interface/wg_interface')
//var peer = require('./peer/peer')
var write = require('./conf/conf_write')
var read = require('./conf/conf_read')

class Wireguard {
	constructor(iface, confObj) {
		this.interface = iface
		this.confFile = `/etc/wireguard/${iface}.conf`
		let readConf = read(this.confFile) || {}
		this.conf = {...readConf, ...confObj || {}}
	}
 
 	createPeer(p_data){
		this.conf.peer.push(p_data)
	}

	getPeer(pubkey){
		this.conf.Peer.forEach(function(item, index, array) {
			result = {}
			//console.log(item)
  			if (item['PublicKey'] === pubkey){
  				console.log('found the key')
  				result = item;
  			}
		})
		return result;
	}
}

result = new Wireguard('test0')
getTest = result.getPeer('AsS7aikCUrXpdfSvwFnMs0yUaoQ7ZCkoUVOmNdl7NS8=')


// trying to access different variables
//console.log(result.interface)
//console.log(result.confFile)
//console.log(result.conf.Interface.Address)
//console.log(result.conf.Peer)
console.log(getTest)