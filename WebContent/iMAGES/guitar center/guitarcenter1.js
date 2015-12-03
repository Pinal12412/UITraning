var allpro;
var i;
function xmldoc(){

var xmlhttp = new XMLHttpRequest();
var url = "iMAGES/guitar center/guitarcenter.json";

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState==4 &&xmlhttp.status==200){
		var myArr =JSON.parse(xmlhttp.responseText);
//		console.log(myArr);
		allpro=myArr.allProducts;
		console.log(allpro);
		showinfo(allpro, 0);
//		console.log(detail1);
			}
}
xmlhttp.open("GET",url,true);
xmlhttp.send();

}
function showinfo(allpro, i){
	document.getElementById("img1").src= allpro[i].image_path;
	document.getElementById("detail1").innerHTML=allpro[i].product_description;
	document.getElementById("detail2").innerHTML = allpro[i].shipping_details
	+ "<br>" + "Stock Availabilities:" + allpro[i].stock_availability
	+ "<br>" + "No. of items are:" + allpro[i].no_of_items
	+ "<br>" + "price:" + allpro[i].price;
	document.getElementById("detail3").innerHTML = allpro[i].customer_reviews;
	
}
var index = 0;
function nextele(){
	 if (index < allpro.length){
		 
		 index++;
		 showinfo(allpro, index);
	 }
	 else {
		 index = 0;
	 }
}

function preele(){
	if (index >=0) {
		
		index--;
		showinfo(allpro, index);
	}
	else {
		index = allpro.length - 1;
	}
}

function getinfo(){
		window.location.href="guitar2.html?i="+index;
}





