let fs = require('fs');

let _config = false;
let _package = false;

//check for 2 instances if same or not
//return true when same false when not same
function equals(a,b){
	if(a==b)
		return true;
	else
		return false;
}

//function to converts minutes to MM
function minToMs(min){
	return min*60*1000;
}

//set the config status
function setConfig(config){
	_config = config;
}

//return the current package
function getPackage(){
	if(_package)
	{
		return _package;
	}
	//_package = JSON.parse( fs.readFileSync(__dirname + '/../package.json', 'utf8') );
	return _package;
}
