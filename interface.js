class interface {
	this.name = "wg0"
	this.Address = "10.3.0.1";
	this.DNS = "10.3.0.2"; //optional
	this.MTU = null; //optional
	this.Table = null; //optional
	this.scripts = []; //optional
	this.SaveConfig = false; //optional

	set_name(name){
		this.name = name;
	}

	get_name(){
		return this.name;
	}

	set_address(address){
		this.Address = address
	}

	get_address(){
		return this.Address;
	}

	set_DNS(DNS){
		this.DNS = DNS;
	}

	get_DNS(){
		return this.DNS
	}

	set_MTU(MTU){
		this.MTU = MTU;
	}

	get_MTU(){
		return this.MTU
	}

	set_Table(table){
		this.Table = table;
	}

	get_Table(){
		return this.Table;
	}

	add_script(script){
		this.scripts.append(script);
	}

	get_scripts(){
		return this.scripts
	}

	set_SaveConfig(bool){
		this.SaveConfig = bool;
	}

	get_SaveConfig(){
		return this.SaveConfig;
	}
}