//function displayQuotes(){
//	var quote = ["abc","def","fgh","hij","klm","nop","qrs","tuv","wxy","zzz"];
//	document.write(quote);
//	alert(quote.length);
//	}
//displayQuotes();
//exe3//
//function friends(){
//	var name = ["rosey","reena","kajal","rashi","jyoti","raj","shreya","rinku","sweta","neha"];
//	alert(name.length);
//	name.pop();
//	document.write("list of friends names:"+"</br>")
//	document.write(name+"</br>");
//	document.write(name.sort());
	//alert(name[1]);
//	document.write(name.shift());
//	alert(name.length);
	
//	console.log(name.length);
//	document.write("list of reverse names:"+"</br>"+name.reverse());
//	console.log(name[8]);
//}
//friends();

//exe4//
//function friends(){
//	var name = ["rosey","reena","kajal","rashi","jyoti","raj","shreya","rinku","sweta","neha"];
//	name.splice(2,0,"seena");
//	document.write(name+"</br>");
	//console.log(name.length);
//	console.log(name[5]);
//	name.slice(2,3,"rikta","keya");//////not working
//	document.write(name);
//	var name1=prompt("enter a name you want to add:");
//	name.push(name1);
//	name.push(prompt("name1"));
//	document.write(name+"</br>");
//	console.log(name.length);
//	name.unshift("meenu");
//	document.write("new name string:"+name);
	
//}
//friends();

//exe5
//function month(){
//	var mon=["Jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
//	alert(mon.length);
//	mon.pop();
//	mon.reverse();
//   console.log(mon[8]);
//	mon.shift();
//	mon.sort();
//	mon.push("winter");
//	console.log(mon.length);
//	mon.unshift("winter");
//	mon.splice(2,1,"birthday month");
//	console.log(mon.length);
//	console.log(mon[2]);
//	mon.slice(3,0,"summermonths","vacation");
//	document.write("List of English Months:"+mon+"</br>");
			
 //   alert(mon.length);
//}
//month();
//function gMonth(){
//	var gmon=["kart","mag","pos","maha","fgn","vai","jet","asd","sav","bad","aso"];
////	document.write("List of Gujarati Months:"+gmon+"</br>");
//	var mon=["Jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
//	var months=mon.concat(gmon);
//	for(i=0;i<months.length;i++){
//	alert(months[i]);
//	
//	
//	}
////	document.write("List of all months:"+months+"</br>");
//	
//}
//gMonth();

//exe6///
//function days(){
//	var day=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//	for (i=0;i<day.length;i++)
//		{
//		console.log(day[i]);
//		}
//}
//days();

//exe7//
//function days(){
////	var day=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//	var value=prompt("Enter a valid day");
//	var a=value;
//	//if (a=day[i])
//		for (i=0;i<day.length;i++)
//			{
//			document.write(day[i]);
//			}
	      
	///with if-else
	
	
//	if (value=="Monday")
//		{console.log("Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday");}
//	else if(value=="Tuesday")
//		{console.log("Wednesday,Thursday,Friday,Saturday,Sunday");}
//	else if(value=="Wednesday")
//	{console.log("Thursday,Friday,Saturday,Sunday");}
//	else if(value=="Thursday")
//	{console.log("Friday,Saturday,Sunday");}
//	else if(value=="Friday")
//	{console.log("Saturday,Sunday");}
//	else if(value=="Saturday")
//	{console.log("Sunday");}
//	else if(value=="Sunday")
//	{console.log("last day of a week");}
//	else
//		{console.log("enter a valid day");}
//		
//}
//days();

////exe9/10///

//function favMonths(){
//	var mon=["Jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
//	var spmon=["fmonth","feb","gmonth","summer","jun","jul","aug","fall","diwali","nov","dec"];
//	
//	   for (i=0;i<mon.length;i++){
//		   for (j=0;j<spmon.length;j++){
//			   if (mon[i]===spmon[j])
//				   {
//				   document.write("<br>it's match value= = " +mon[i] + "  ========   " +spmon[j]);
//				   }
//		   }
//	   }
//	
//}
//favMonths();

//practice//

var cars=["bmw","toyota","audi"];

function car(){

//cars.push("honda");
//document.write(cars);
//alert(cars);
//cars.pop();
//document.write(cars);
//var x=cars[2];
document.write(cars);
//var x=cars.replace(1,2,"good");
//document.write(cars);


}
car();
function nlist(){
	cars.push("Nice");
	document.write(cars);
}
