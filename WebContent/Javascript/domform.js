/*Que 1
function change(){
	 var x = document.getElementById("fname").value;
	 var y= document.getElementById("lname").value;

	    if (x==""||x==null ||isNaN(x)==false ) {
	    	document.getElementById("fname").style.backgroundColor = "red";
	        alert("FirstName must be filled out");
	        
	       }
	    if(y=="" || isNaN(y) == false){
	    	document.getElementById("lname").style.color = "red";
	    	alert("LastName must be filled out");
	    }
	 }*/
/*que 2
function check(){
	var x = document.getElementsByClassName("rbtn");
	//var y= document.getElementByClassName("rbtn");
	
	  if(x[0].checked==false && x[1].checked==false)
		  {
		  alert("please check an option");
		  }
	  
}
*/
/*//que 3
function state(){
	var x = document.getElementById("sbt").value;
		if (x == "None")
		{
		alert("select a state");
		
		}
		else{}
}*/

 //que 4
/*function checkbx(){
	 var x= document.getElementById("cbox").checked;
	 if (x == false){
		 alert("Please check the box");
	 }
		 
		 }*/

 
 
 
///****************DOM & Events*********************////
//que1
/*function temprature(){
	var f= document.getElementById("temp").value;
	
	var c = (f - 32)*5/9;
	var d = Math.round(c);
	document.write(d);
	if (f == null || f == "")
		{
		document.getElementById("temp").style.borderColor = "red";
		prompt("enter a valid number");
		}

}*/

//que2
//function page(){
//	alert("Welcome to my blog");
//}

//que3 & 4

/*function hide(){
	var x = document.getElementById("mydiv");
	var y = x.style.display = "none";
}

function show(){
	var x = document.getElementById("mydiv");
	var y = x.style.display = "block";
}*/

/*Que 5
function onmsover(){
	var x = document.getElemementById("ulist");
	var y = x.style.display = "block";
}

function onmsout(){
	var x = document.getElementById("ulist");
	var y = x.style.display = "none";
}
*/
/*Que 6
function pageload(){
	var x = document.getElementById("main_one");
	var y = document.getElementById("main_two");
	var z = document.getElementById("main_three").style.display = "none";
	var a = x.style.visibility = "hidden";
	var b = y.style.display = "none";
}
*/
/*//que7
function checkbx(){
	var a= document.getElementsByClassName("box");
	
	for(i=0;i<a.length;i++)
	{
		if(a[i].checked==true)
	{
	  a[i].checked=false;
	}
//		else{
//			a[i].checked=true;
//		}	
	}
}
*/
/*que 8
function valid(){
	var x = document.getElementsByClassName("box");
	  for (i=0; i<x.length; i++){
		  if(x[i].checked==false){
			  alert("Please select all of these boxes");
			  return;
		  }
		  
	  }
}*/

//Que9
/*var pro_link="http://www.pro-tekconsulting.com";
   function addlink(){

	var y = document.getElementsByClassName("link1");
	console.log(y.length);
	var present="yes";

	for (i=0; i<y.length; i++){
		 if (y[i].href==pro_link){
			 present="no";
			 break;
		 }
	}
	if(present=="yes"){
		document.getElementById("add").disabled=false;
	}
		
}
function checkurl(){
	var y = document.getElementsByClassName("link1");
  var pro_link="http://www.pro-tekconsulting.com";
  var inns=document.getElementsByClassName('link1').innerHTML=pro_link;
  document.write(inns);
   
}*/
//   que 10
var firstname, lastname;
function input(){
	 firstname= document.getElementById("fname").value;
	 lastname= document.getElementById("lname").value;
   var y= document.getElementById("txt1").innerHTML=firstname;
   var z=document.getElementById("txt2").innerHTML=lastname;
   
	
	
	
}
	
