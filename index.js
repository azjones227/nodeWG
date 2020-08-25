'use strict'

const { exec } = require("child_process")
const fs = require('fs')

class interface {
		this.name = "wg0"
		this.Address = "10.3.0.1";
		this.DNS = "10.3.0.2";
		this.MTU = optional;
		this.Table = optional;
		this.scripts = [
			'PreUp = <<script>>',
			'PostUp = <<script>>',
			'PreDown = <<script>>',
			'PostDown = <<script>>'
			];
		this.SaveConfig = false;
	}
	
class peer {
		this.publickey ="<<pubkey>>";
		this.presharedkey = "optional";
		this.allowedips =["0.0.0.0","::/0"];
		this.endpoint = "192.167.27.50:51280";
		this.persistentkeepalive = "0 to 65535";
		}

function shellrun(command){
	exec(command,(error, stdout, stderr) =>{
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
	});
}

//shellrun("wg genkey | tee privatekey | wg pubkey > publickey")
