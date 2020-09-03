var interface = require(./interface/interface)
var peer = require(./peer/peer)
var write = require(./conf/conf_write)
var read = require(./conf/conf_read)

class wireguard {
	constructor() {
		this.interface = new interface
		this.peers = []
	}

	configureInterface(data){
		for(let item in data) {
			switch (item) {
				case 'PrivateKey':
					this.interface.set_privatekey(data[PrivateKey])

				case 'ListenPort':
					this.interface.set_listenport(data[ListenPort])

				case 'FwMark':
					this.interface.set_fwmark(data[FwMark])

				case 'Address':
					this.interface.set_address(data[address])

				case 'DNS':
					this.interface.set_dns(data[DNS])

				case 'MTU':
					this.interface.set_mtu(data[MTU])

				case 'Table':
					this.interface.set_table(data[Table])

				case 'PreUp':
				case 'PostUp':
				case 'PreDown':
				case 'PostDown':
					this.interface.add_script(item, data[item])

				case 'SaveConfig'
					this.interface.set_saveconfig(data[SaveConfig])

			}
		}
		return this;
	}

	getInterface(){
		return this.interface;
		//placeholder code
	}

	addpeer(data){
		//placeholder code
		peer = new peer
		this.peers.push()
	}
}

