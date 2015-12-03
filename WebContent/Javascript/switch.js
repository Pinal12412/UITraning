////exemples of switch statements////
/*1*/
//function coupon(age){
//	var age=prompt("Enter your right age to get a coupon:");
//	switch(age){
//	case "14":
//		alert("coupon 1");
//		break;
//	case "21":
//		alert("coupon 2");
//		break;
//	case "30":
//	   alert("coupon 3");
//	   break;
//	case "50":
//		alert("coupon 4");
//		break;
//	default:
//		alert("no coupon");
//	}
//}
//coupon();

/*2*/

//function menu(day){
//	var day=prompt("Enter a valid day to get a menu:");
//	switch(day){
//	case "monday":
//		alert("Mondays, we serve Pasta");
//		break;
//	case "tuesday":
//		alert("Tuesdays, we serve Lazannia");
//		break;
//	case "wednesday":
//		alert("Wednesdays, we serve noodles");
//		break;
//	case "thursday":
//		alert("Thursdays, we serve Pizza");
//		break;
//	case "friday":
//		alert("Fridays, we serve Falafal");
//		break;
//	case "saturday":
//		alert("Saturdays, we serve Burger");
//		break;
//	case "sunday":
//		alert("Sundays, we surve Taco");
//		break;
//		default :
//			alert("Enter valid day");
//	}
//	
//}
//menu();

/*3*/
//function oscarAward(year){
//	var year=prompt("Enter a year to know which movie won an oscars award");
//	switch(year){
//	case "2003":
//		alert("DDLJ won an award");
//		break;
//	case "2004":
//		alert("Dil To Pagal Hai won an award");
//		break;
//	case "2005":
//		alert("Tum Bin won an award");
//		break;
//	case "2006":
//		alert("Muhabatain won an award");
//		break;
//	case "2007":
//		alert("Raja Hindustani won an award");
//		break;
//	case "2008":
//		alert("Hum Tum won an award");
//		break;
//	case "2009":
//		alert("Raaz won an awaed");
//		break;
//	case "2010":
//	case "2011":
//	case "2012":
//		alert("Yash raj Chopra's movie won an award");
//		break;
//	case "2013":
//		alert("Chennai Express won an award");
//		break;
//	case "2014":
//		alert("Dhoom4 won an award");
//		break;
//	default:
//		alert("enter a year between 2003 to 2014");
//	}
//}
//oscarAward();

/*4*/
function student(grade){
	var grade=prompt("enter your grade to get comments:");
	switch(grade){
	case "A++":
		alert("Excellent!!!");
		break;
	case "A":
		alert("Good Job!!!");
		break;
	case "A-":
		alert("Average");
		break;
	default:
		alert("Need to do a lot of practice");
		}
}
student();
