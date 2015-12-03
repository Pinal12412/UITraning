function sunday(){
	var x="hello world, how are you? how was your vacation? did you seen fireworks, how was a park trip?";
	var y = x.length;
	var z = x.split(",");
	var q = x.split("?");
	var a = z[0];
	var b = z[1];
	var p = q[0];
	var r = q[1];
	var s = x.slice(5, 10);
	var h = x.indexOf("park");
	var n = x.lastIndexOf("how");
	var c = x.search("vacation");
	//document.write(a +"</br>" + b);
	document.write(s);
}
sunday();