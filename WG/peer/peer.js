'use strict'

class peer {
	constructor(){
		this.PublicKey ='null';
		this.AllowedIPs =[];
		this.Endpoint = 'null';
		this.PersistentKeepalive = 0;
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
}

module.exports = peer;
