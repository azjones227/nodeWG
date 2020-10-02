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

	getPeer(pubkey, opt){
		let index = null
		let result = {}
		for(let i = 0; i < this.conf.Peer.length; i++){
			//console.log(this.conf.Peer[i])
  			if (this.conf.Peer[i]['PublicKey'] === pubkey){
  				//console.log('found the key')
  				result = this.conf.Peer[i];
  				index = i;
  			}
		}
		if (opt === 'd'){
			this.conf.Peer.splice(index, 1)	

		} else {
			return result;
		}
	}

	deletePeer(pubkey){
		this.getPeer(pubkey,'d')
	}

	editPeer(pubkey, p_data){
		let target = this.getPeer(pubkey)
		for(let item in p_data){
			if (p_data[item]===null){
				delete target[item];
			} else {
				target[item] = p_data[item]
			}
		}
	}

	updateInterface(i_data){
		for (let item in i_data){
			if(i_data[item]===null){
				delete this.conf.Interface[item]
			} else {
				this.conf.Interface[item] = i_data[item]
			}
		}
	}

	writeConfFile(){
		write(this.conf, this.confFile)
	}
}

//testing
result = new Wireguard('test0')

//trying to access different variables
//console.log(result.interface)
//console.log(result.confFile)
//console.log(result.conf.Interface)
//console.log(result.conf.Peer)

//testing peer functions
//getTest = result.getPeer('AsS7aikCUrXpdfSvwFnMs0yUaoQ7ZCkoUVOmNdl7NS8=')
//console.log(getTest)

//result.deletePeer('AsS7aikCUrXpdfSvwFnMs0yUaoQ7ZCkoUVOmNdl7NS8=')
//result.editPeer('m7Ldqa+DaJj1sCt14vRwoBPCLuQ2GzFgu9CF6EU/GAg=',{ Endpoint: null,
       //AllowedIPs: '172.24.0.4/32, 10.8.8.8/16' })

//console.log(result.conf.Peer)

/*result.updateInterface({ Address: '179.29.9.9/32',
     PrivateKey: 'mynewprivatekey',
     ListenPort: '99999',
     PostUp: 'I changed this to prove a point' })*/

//console.log(result.conf.Interface)

result.writeConfFile()
