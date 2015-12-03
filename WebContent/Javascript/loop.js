///exemples for Loop///
/* exe 1*/
//function number(i){
//	var i="";
//	for (i=0; i<=30; i++){
//	document.write("<option>"+i+"</option>" );
//	}
//}
//number();
//*exe 2*//
//function number(){
//	
//	for(i=10;i>=1;i--)
//		
//	document.write(i+"</br>");
//	}
//
//number();
////*exe 3*
//function number(){
//	
//	for(i=12 ; i<=33; i++)
//		
//	document.write(i+"</br>");
//
//
//}
//
//number();

//*exe4*//
//function number(){
//	for (i=1; i<=30;i=i+2)
//console.log(i);
//}
//number();

//*exe5*////
//function number(){
//	for (i=0;i<=30;i=i+2)
//		console.log(i);
//}
//number();

//*exe6*//
// function number(){
//	for(var i=1;i<=100;i++)
//		{  
//			for(var a=2;a<=i;a++)
//				{
//						if(i%a==0){
//								if(a==i){
//									document.write("<br>prime Number = " + a);
//							}
//								break;
//							}
//				
//				}
//		}
//	
//		}
//number(); 

//for-loop and If-Else//
/*exe7*/
//function number(){
//	var num=parseInt(prompt("enter a no."));
//	if(num==1)
//		for(num=1;num<=11;num++){
//document.write(num+"</br>");
//}
//	else if (num==2)
//		for(num=2; num<=12; num++){
//			document.write(num +"</br>");
//		}
//	else if(num==3)
//		for(num=3; num<=13;num++){
//			document.write(num + "</br>")
//		}
//	}
//	number();

/*or*/
//function number(){
//	var x=parseInt(prompt("enter no."));
//	 for(i=x; i<=x+10; i++)
//	 {
//		 document.write(i);
//	 }
//}
//number();
		 
function num(){
	var no=[12,43,76,98,23,45,21,56];
	var a=no.sort();
	document.write(a);
}
num();  





