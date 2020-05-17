function LayThread(name) {
	this.name = name;
	
	this.doHeavyJob = function () {
		postMessage(this.name + " start");
		for(var i = 0; i < 100000; i ++) i ++;
		postMessage(this.name + " end");
	}
}