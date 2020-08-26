'use strict'

class peer {
	constructor(){
		this.publickey =null;
		this.allowedips =[];
		this.endpoint = null;
		this.persistentkeepalive = null;
	}

	set_pubkey(key){
		this.publickey = key;
	}

	get_pubkey(){
		return this.publickey;
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
		this.endpoint = endpoint;
	}

	set_persistentkeepalive(time){
		this.persistentkeepalive = time;
	}
}

module.exports = peer;
