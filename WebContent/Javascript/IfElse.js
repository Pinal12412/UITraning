//function setValue(fName,iName,batmanage){
//	//alert("Customer is:"+fName+iName+batmanage);
//	checkPerson("hina",25);
//	if (age==batmanage)
//	{alert("He is a Batman!")}
//	else
//	{
//		alert("he is a Joker");
//  }    
//}
////function setCustInfo(name,i){
////	alert("The Name Is Set As:"+name);
////	batman_age=i;
////}
////function displayCustInfo(name){
////	alert("Name Is Display As:"+name);
////	return name+" "+batman_age;
////}
//
//function checkPerson(name,age){
//	
//}
//var batman_age=27;
//var age=27;
////setCustInfo("Boby");
//
//setValue("","soni",27);
////displayCustInfo("Soni");

/*exe 5*/
//function setValue(fName,iName,batmanage){
//	
//	
//	
//}
//
//function checkPerson(name,age){
//	var age=prompt("Please enter your age:");
//	if (age<=2)
//		{
//		alert("No Charge");
//		}
//		
//	else if(age>2 && age<=14)
//				{
//		          alert("10% Discount");
//				}
//	else if(age>14 && age<=55)
//		{
//		alert("Regular Price");
//		}
//	else if(age>55)
//	    {
//		alert("20% Discount");
//	    }
//			}
//checkPerson();


/* exe 6*///////////////////////////////////////////////////////////
//function checkPerson(name,age){
//	var age=prompt("Please enter your age:");
//	if (age%2==0)
//		{
//		alert("Even Number");
//    	}
//	else 
//		{
//		alert("Odd Number");
//		}
//}
//checkPerson();

/*exe 7*////////////////////////////////////////////////////////
//function ATM(amount){
//	var amount=prompt("Enter an amount you want to withdraw:");
//	if (isNaN(amount))
//		{
//		alert("Enter a numeric value");
//		}
//	else if (amount%20==0)
//		{
//		alert("Your Amount is ready");
//		}
//	else 
//		{
//		alert("Please enter multiples of 20");
//		}
//}
//ATM();

/*execises of If - Else Statement *//////////////////////////////////
/*1*/
//function personAge(age){
//	var age=prompt("enter your age:");
//	if (age<=14){
//		alert("Not Allowed");
//	}
//	else if ((age>14) && (age<65)){
//		alert("Regular Price");
//	}
//	else if(age==50){
//		alert("Special Discount!!");
//	}
//}
//personAge();

/*2*/
//function user(age){
//	var age=prompt("Please enter your age to get a coupon");
//	if (age==14){
//		alert("Coupon 1");
//	}
//	else if(age==21){
//		alert("Coupon 2");
//	}
//	else if(age==30){
//		alert("Coupon 3");
//	}
//	else if(age==50){
//		alert("Coupon 4");
//		}
//	else {
//		alert("No Coupon");
//	}
//}
//user();

/*3*/
//function menu(day){
//	var day=prompt("Enter a day to get menu:");
//	if (day=="monday"){
//		alert("Mondays, we surve Pasta");
//		}
//	else if(day=="tuesday"){
//		alert("Tuesdays, we serve Falafal");
//	}
//	else if(day=="wednesday"){
//		alert("Wednesdays, we serve Lazania");
//	}
//	else if(day=="thursday"){
//		alert("Thursdays, we serve Noodles");
//	}
//	else if (day=="friday"){
//		alert("Fridays, we serve Pizza");
//	}
//	else if (day=="saturday"){
//		alert("Saturdays, we serve Burger");
//	}
//	else if (day=="sunday"){
//		alert("Sundays, we serve Taco");
//	}
//	else {
//		alert("Enter a valid day");
//	}
//     } 
//menu();

/*4*/
//function oscarsAward(year){
//	var year=prompt("Enter a year:");
//	if (year==2003){
//		alert("Dil To Pagal Hai won the oscars");
//	}
//	else if(year==2004){
//		alert("Muhabatain won the oscars");
//	}
//	else if(year==2005){
//		alert("DDLJ won the oscars");
//	}
//	else if(year==2006){
//		alert("Jab We Met won the oscars");
//	}
//	else if(year==2007){
//		alert("Dhoom3 won the oscars");
//	}
//	else if(year==2008){
//		alert("Run won the oscars");
//	}
//	else if(year==2009){
//		alert("Jab Tak Hai Jaan won the oscars");
//	}
//	else if(year==2010){
//		alert("Raaz won the oscars");
//	}
//	else if(year==2011){
//		alert("Chennai Express won the oscars");
//	}
//	else if(year==2012){
//		alert("Savariya won the oscars");
//	}
//	else if (year==2013){
//		alert("Piku won the oscars");
//	}
//	else{
//		alert("Please enter a year between 2003 to 2014");
//	}
//}
//oscarsAward();
/*5*/
function studentResult(grade){
	var grade=prompt("Please enter your grade");
	
	if (grade==A++){
		alert("Excellent!!!");
	}
	else if(grade==A){
		alert("Good Job!!");
	}
	else if (grade==-A){
		alert("Average");
		}
	else {
		alert("Need to do a lot of Practice");
	}
}
studentResult();