
var allpr;

var x,y,z,index1;

function formvalidation(){
	 x= document.getElementById("fnm").value;
	if (x == "" || isNaN(x) == false){
		alert("Please enter a valid FirstName");
	}
	 y = document.getElementById("lnm").value;
	if (y == "" || isNaN(y) == false){
		alert("Please enter a valid LastName");
	}
	 z = document.getElementById("cno").value;

	
	document.getElementById("cfnm").value=x;
	document.getElementById("clnm").value=y;
	document.getElementById("ccno").value=z;
	document.getElementById("cemail").value = document.getElementById("email").value;
	
}

function getdata(){
	
	var geturl=window.location.href;
	console.log(geturl);
	//http://localhost:8088/UITraning/guitar2.html?i=2
	
	var arr=geturl.split("?");
	console.log(arr);
	var indexArr=arr[1].split("=");
	console.log(indexArr);
	index1=indexArr[1];
	console.log(index1);

	var xmlhttp = new XMLHttpRequest();
	var url = "iMAGES/guitar center/guitarcenter.json";
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			
			var myArr =JSON.parse(xmlhttp.responseText);
			console.log(myArr);
			allpr=myArr.allProducts;
			console.log(allpr);
			document.getElementById("pic1").src= allpr[index1].image_path;
			document.getElementById("info2").innerHTML=allpr[index1].product_description;
			
				}
	
	

	}
	
}
function buyguitar(){
	window.location.href="guitar3.html?ind="+index1+",fname="+x+",lname="+y;
}


