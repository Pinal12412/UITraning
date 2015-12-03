//If -Else and For Loop///

//exe7//
//function number(){
//	var x=parseInt(prompt("enter no."));
//	 for(i=x; i<=x+10; i++)
//	 {
//		 document.write(i);
//	 }
//}
//number();
//////bad codding
//function number(){
//	var x=parseInt(prompt("enter a no:"));
//////if(x<=1 && x>=10)	
//	for(i=1;i<=10;i++)
//	{
//////		if(x<=1 && x>=10)
//		document.write(i+"</br>");
//	break;
//		}
////	break;
//	
//	     for(i=11;i<=20;i++)
//	{
////        	if(x<=11 && x>=20)
//        document.write(i+"</br>");
//	break;
//	}
////	     for(i=21;i<=30;i++)
////	 	{
////	         	if(x<=21 && x>=30)
////	 	        document.write(i+"</br>");
////	 	}
////	     for(i=31;i<=40;i++)
////	 	{
////	         	if(x<=31 && x>=40)
////	 	        document.write(i+"</br>");
////	 	}
////	     for(i=41;i<=50;i++)
////	 	{
////	         	if(x<=41 && x>=50)
////	 	        document.write(i+"</br>");
////	 	}
//		}
//	
//
//
//number();
///end

//exe 10//
//function number(){
//	var x=parseInt(prompt("enter a no:"));
////if(x<=1 && x>=10)	{
//	for(i=1;i<=10;i++)
//	{
//		document.write(i+"</br>");
//
//		}
//		
//	//break;
//	return;
////}
//	
//	
//	     for(i=11;i<=20;i++)
//	{
//	   	
//        document.write(i+"</br>");
//	
//	}
//	
//}
//
//number();
///////
//exe11
//function number(){
//	var i=parseInt(prompt("enter a number:"));
//	if (i<50 || i>200)
//		{alert("Valid Number");
//		}
//	 if (i>=50 && i<=200)
//	 {
//		alert("This is a good number");
//	}
//	else
//		{
//		alert("It is an invalid number");
//		}
//}
//number();

//exe12
//function number(){
//	var i=parseInt(prompt("enter a number between 1 to 5:"));
//	if (i==1)
//		{
//		alert("one");
//		}
//	else if (i==2)
//		{
//		alert("Two!!");
//		}
//	else if (i==3)
//		{alert("Three!!");
//		}
//	else if (i==4)
//		{
//		alert("Four");
//		}
//	else if (i==5)
//		{alert("Five");
//		}
//	else
//		{alert("Please enter valid no.");
//		}
//}
//number();

//exe 13
//function number(){
//	var i=parseInt(prompt("enter a number"));
//	if (i>=6 && i<=10)
//		{alert("Please enter a proper no:");}
//	else 
//		{alert("enter a valid no:");}
//}
//number();

//exe14//
//function number(){
//	var i=parseInt(prompt("enter a no:"));
//	var x=i%2;
//	     for (i=0;i<=20; i=i+2)
//		 {
//	    	 if (x==0)
//			  {document.write(i);
//			  }
//		 }
//	   }
//number();
///exe 14//
//function number(){
//	var i=parseInt(prompt("enter a no:"));
//	var x=i%2;
//	var a=i;
//	if (x==0)
//		{
//	     for (i=a;i<=a+20; i=i+2)
//	
//			  {document.write(i+"</br>");
//			  }
//		 }
//	else
//		for(i=a; i<=a+20;i=i+2)
//			{document.write(i+"</br>");}
//}
//number();
//
//exe15
function number(){
	var i=parseInt(prompt("enter a no >=12 to get previous 5 even/odd nos:"));
	for(var x=0;x<5;x++)
		{
		i-=2;
			document.write("<br> " + i);
		
		}
	
	/*var x=i%2;
	var a=i;
	if (x==0)
		{
	for (i=a; i<=a-10; i=i-2)
		
	{
		document.write(i+"</br>");
	}
		}*/
}
number();