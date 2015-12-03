var str3;
var allpro;

	function finaldata(){
	var finalurl=window.location.href;
	
	var str=finalurl.split("?");
	var str1=str[1].split(",");
	var str2=str1[0].split("=");
    str3=str2[1];
	console.log(str3);
	
	
	
	var xmlhttp = new XMLHttpRequest();
	var url = "iMAGES/guitar center/guitarcenter.json";
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			var array =JSON.parse(xmlhttp.responseText);
			console.log(array);
			allpro=array.allProducts;
			console.log(allpro);
			document.getElementById("pic3").src= allpro[str3].image_path;
			
			
				}
	
	}
	}