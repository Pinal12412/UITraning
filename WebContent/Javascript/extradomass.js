	////extra assignment on DOM/////
/*que 1
function change(){
	var x = document.getElementById("para").style.display= "none";
    }		
		
function change1(){
	var x=document.getElementById("para").style.color="red";
	}	  
function change2(){
	var x = document.getElementById("para").style.color="blue";
}	
function change3(){
	var x= document.getElementById("para").innerHTML;
}*/
//que 2
/*function text(){
	var x = document.getElementById("txt1").value;
    document.getElementById("txt2").value = x;
    txt1.value="";
  
 }*/
/*    que3
  function rbtncheck(){
	var x = document.getElementById("rbtn1").chacked;
	var y = document.getElementById("rbtn2").chacked;
	  if(x == true || y == true){
		  alert("got it!!");
	  }
	  else{
		  alert("Please check atleast one box");
	  }
}*/
//que 4
/*function change(){
	var x=document.getElementById("mytxt").value;
	var y=document.getElementById("mydiv");
		if (x == "black"){
			y.style.border = "1px solid black";
	}
		else if(x == "red") {
			y.style.border = "1px solid red";
		}
		else 
			alert("please enter a valid color");
			
}
*/
//que5
/*function ckbtn(){
	var text1 = document.getElementById("txt1").value;
	var text2 = document.getElementById("txt2").value;
	if (text1 != "" ) {
		document.getElementById("rbtn1").checked= true;
	}
		else if(text2 != ""){
			document.getElementById("rbtn2").checked=true;
		}
		else{
			alert("please enter only in one text box");
		}
}
*/
/*Que 6 
function check(){
	 var x = document.getElementById("fname").value;
	 var y = document.getElementById("fname").value;
	 var z = document.getElementById("age").value;
	 var a = document.getElementsByClassName("rbtn");
	 var s = document.getElementById("sbt").value;
	 var b = document.getElementById("cbox").value;
	  if (x == "" ){
		  alert("enter valid text");
	  }
	  else if (y == ""){
		  alert("enter a valid text");
	  }
	  else if (z == "" || z == NaN){
		  alert("enter a valid number");
	  }
	  else if (a[0].checked == false && a[1].checked == false){
		  alert("please check atleast one box");
	  }
	  else if (s == "None"){
		  alert("select a state");
	  }
	  else if (b.checked == false){
		  alert("please check a box");
	  }
	  else {
		  alert("form submitted!!!");
	  }
 }*/
//que 8
function comcolor(){
	var dt = new Date();
	var ndt = dt.toLocaleDateString();
//	var onlydt = dt.getDate();
	var tx = document.getElementById("txt").value;
	for (i=0; i<10; i++){
		if(i%2 == 0){
			document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML + "<input type='text' style='background-color:red'>" + ndt + tx;
			}
		else{
			
	document.getElementById("div1").innerHTML = document.getElementById("div1").innerHTML +="<input type='text' style='width:260px; background-color:blue'>" + ndt +" " + tx ;
	//txt.value = "";
}
	}
}
/*que9
function result(){
	var txt= document.getElementById("tx1").value;
	document.getElementById("div1").innerHTML = txt ;
	//tx1.value = "";
	tx1.value = "";
}
function revresult(){
	var dv = document.getElementById("div1").innerHTML;
	document.getElementById("tx2").value = dv;
	div1.innerHTML = "";
}*/
/*que 10
function check(){
	var rbtn = document.getElementById("radio");
	if (rbtn.checked == true){
	alert("checked");
	}
	var chkBox = document.getElementById("ckbox");
	if (chkBox.checked == true){
		alert("checked");
	}
	var dlist = document.getElementById("ddlist").value;
	 alert(dlist);
}*/
/*que 11
function display(){
	var txt1 = document.getElementById("fname").value;
	var txt2 = document.getElementById("lname").value;
	var txt3 = document.getElementById("age").value;
	var r = document.getElementsByClassName("radio");
	if (txt1 != NaN){
		alert("string");
	}
//	else if (txt2 == NaN){
//		alert("number");
//	}
	else if (txt3 == ""){
		alert("null");
	}
	else if (r[0].checked || r[1].checked){
		 alert("checked");
		}
	else {
		alert("form has been successfully submited");
	}
}*/
/*que 12
  function image(){
	var i = document.getElementById("imag").src;
	
	var tx = document.getElementById("txt").value;
	document.getElementById("fdiv").innerHTML=tx.value;
	}
*/

/* practice
  function coment(){
	var text1=document.getElementById("txt").value;
	var x = new Date();
	var h= x.getHours();
	var m= x.getMinutes();
	 document.getElementById("fdiv").innerHTML = document.getElementById("fdiv").innerHTML+=  h +":" + m + text1+ "<br>";
	txt.value="";
	
	}
function over(){
	var a= document.getElementById("fdiv").value;
	document.getElementById("fdiv").style.visibility="hidden";
}*/


///////       Math & Date         ///////
//function conversion(){
//	var f = document.getElementById("temp").value;
//	  	
//	var x = (f - 32) * 5/9 ;
//	var c = Math.round(x);
//	document.write(c);
//	if (f == null || f == " ")
//	{
//	document.getElementById("temp").style.borderColor = "red";
//	prompt("enter a valid number");
//	}
	 
//}
// que 2
/*function menu(){
  var d = new Date();
  var days = ["Sunday's special Pasta","Monday's special Lazannia","Tuesday special TACOS","Wednesday special pizza"," Thursday's special sendwich","Friday's special Pav Bhaji","Saturday's special Burger"];
  var x = days[d.getDay()];
  alert(x);
  }*/

///////Timing///////
/*function imgdisp(){
	var img = document.getElementById("imag").src;
}*/