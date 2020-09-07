'use strict'

const { exec } = require("child_process")
const fs = require('fs')

//class wireguard{}

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
