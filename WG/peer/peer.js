'use strict'

class peer {
	constructor(p_data){
		this.PublicKey ='null';
		this.AllowedIPs =[];
		this.Endpoint = 'null';
		this.PersistentKeepalive = 0;
		this.configurePeer(p_data)
	}

	set_pubkey(key){
		this.PublicKey = key;
	}

	get_pubkey(){
		return this.PublicKey;
	}

	set_presharedkey(pskey){
		this.presharedkey = pskey;
	}

	get_presharedkey(){
		return this.presharedkey;
	}

	add_allowedip(ip){
		this.allowedips.push(ip);
	}

	get_allowedips(){
		return this.allowedips;
	}

	set_endpoint(endpoint){
		this.Endpoint = endpoint;
	}

	set_persistentkeepalive(time){
		this.PersistentKeepalive = time;
	}

	configurePeer(p_data){
		for (let item in p_data) {
			peer[item] = p_data[item]
		}
		return peer;
	}
}

module.exports = peer;
