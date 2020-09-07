'use strict'

class wg_interface {
	constructor(){
		this.Address = 'null';
		this.PrivateKey = 'null';
		this.ListenPort = 0;
	}

	set_address(address){
		this.address = address
	}

	get_address(){
		return this.address;
	}

	set_privatekey(key){
		this.privatekey = key;
	}

	get_privatekey(){
		return this.privatekey;
	}

	set_listenport(port){
		this.listenport = port;
	}

	get_listenport(){
		return this.listenport;
	}

	set_DNS(dns){
		this.dns = dns;
	}

	get_DNS(){
		return this.dns
	}

	set_mtu(mtu){
		this.mtu = mtu;
	}

	get_mtu(){
		return this.mtu
	}

	set_table(table){
		this.table = table;
	}

	get_table(){
		return this.table;
	}

	add_script(script){
		if(!this.scripts){
			this.scripts = [];
		}
		this.scripts.push(script);
	}

	get_scripts(){
		return this.scripts
	}

	set_SaveConfig(bool){
		if (bool != true && bool != false){
			console.log('INVALID INPUT: true or false only')
			return;
		}
		this.SaveConfig = bool;
	}

	get_SaveConfig(){
		return this.SaveConfig;
	}

	set_fwmark(mark){
		this.fwmark = mark
	}

	get_fwmark(){
		return this.fwmark
	}
}

module.exports = wg_interface;