/*exe1
$(document).ready(function(){
	$("button").click(function(){
		$(".p1").hide();
	});
		
	});*/

//exe2
/*$(document).ready(function(){
	 $("button").dblclick(function(){
		 $("#test").hide();
	 });
});*/

//exe3
/*$(document).ready(function(){
	$("button").click(function(){
		$("*").hide();
	});
});*/

//exe4
/*$(document).ready(function(){
	$("button").click(function(){
	$("[href]").hide();
	});
});*/

//exe5
//part1
/*$(document).ready(function(){
	$("button.hide").click(function(){
		$("tr:odd").hide();
	});
});*/
//part2
/*$(document).ready(function(){
	$("button#color").click(function(){
		$("tr:even").css("background-color", "yellow");
	});
});*/

//exe 6 Mouse Event
/*$(document).ready(function(){
	$("p").mouseenter(function(){
		alert("you have entered in  p");
	});
});
*/
/*$(document).ready(function(){
	$("p").mouseleave(function(){
		alert("you have leave p");
	});
});*/

/*$(document).ready(function(){
	 $("p").mousedown(function(){
		 alert("Mouse down over p");
	 });
});*/
/*$(document).ready(function(){
	$("p").mouseup(function(){
		alert("mouse up over p");
	});
});*/
/*$(document).ready(function(){
	$("p").hover(function(){
		alert("Now you have entered in p");
	},
	function(){
		alert("Now you leave p");
	});
});

$(document).ready(function(){
	$("p").on("click",function(){
		$(this).css("color","red");
	});
});
*/
//exe7 focus & blur
/*$(document).ready(function(){
	$("input").focus(function(){
		$(this).css("background-color","yellow");
	});
	
});*/
/*$(document).ready(function(){
	$("input").blur(function(){
		$(this).css("border","1px solid red");
	});
});*/
/*$(document).ready(function(){
	$("#dv").on({
		mouseenter:function(){
			$(this).css("background-color","yellow");
		},
	mouseleave:function(){
		$(this).css("background-color","blue");
	},
	click:function(){
		$(this).css("background-color","green");
	}
	});
});*/

// exe8 JQuery Methods
/*$(document).ready(function(){
	$("#hide").click(function(){
		$("#dv").hide(3000);
	});
});

$(document).ready(function(){
	$("#show").click(function(){
		$("#dv").show(2000);
	});
});*/
/*$(document).ready(function(){
	$("#togl").click(function(){
		$("#dv").toggle(2000);
	});
});*/
/*$(document).ready(function(){
	$("#fout").click(function(){
		$("#dv").fadeOut(3000);
	});
});
$(document).ready(function(){
	$("#fin").click(function(){
		$("#dv").fadeIn(3000);
	});
});
$(document).ready(function(){
	$("#ftoggle").click(function(){
		$("#dv").fadeToggle(3500);
		});
});
$(document).ready(function(){
	$("#fadto").click(function(){
		$("#dv").fadeTo("slow",0.4);
	});
});*/
//exe 9 slide effect

/*$(document).ready(function(){
	$("#dv1").click(function(){
		$("#dv2").slideDown(5000);
	});
});
$(document).ready(function(){
	$("#dv1").click(function(){
		$("#dv2").slideUp(4000);
	});
});*/
/*$(document).ready(function(){
	$("#dv1").click(function(){
		$("#dv2").slideToggle(4000);
	});
});*/

//exe 10 animation effect

/*$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({left: '250px',height: '+=80px', width:'+=80px', opacity:'0.4'});
    });
});*/
/*$(document).ready(function(){
	$("button").click(function(){
		var div = $("#dv");
		div.animate({height:'+=160px',opacity:'0.8',fontSize:'40px'},1000);
		div.animate({width:'+=160px', opacity:'0.4',fontSize:'60px'},1000);
		div.animate({height:'-=160px', opacity:'0.8'});
		div.animate({width:'-=160px',fontSize:'12px'});
	});
});*/
/*$(document).ready(function(){
	$("#dv1").click(function(){
		$("#dv2").slideDown(8000);
			}),
			$("button").click(function(){
				$("#dv2").stop();
			});
});
*/
/*$(document).ready(function(){
	$("button").click(function(){
		$("#dv").hide(4000,function(){
			alert("Now block will disappear");
		});
	});
});*/
/*$(document).ready(function(){
	$("button").click(function(){
		$("#dv").css("background-color","blue").animate({height:'+=150px',width:'+=150px',opacity:'0.8'})
		.animate({height:'-=150px',width:'-=150px'}).slideUp(2000);
	});
});*/

//JQuery HTML
//exe 11
/*$(document).ready(function(){
    $("button").click(function(){
        alert("Text: " + $("#para").text());
    });
    $("button").click(function(){
        alert("HTML: " + $("#para").html());
    });
});

*/
/*$(document).ready(function(){
	$("button").click(function(){
		alert("first name is"+""+$("#fnm").val());
	});
});*/
/*$(document).ready(function(){
	$("button").click(function(){
		alert("The Website is"+""+$("#oln").attr("href"));
	});
});*/
/*$(document).ready(function(){
	$("button").click(function(){
		$("#para").text("Hello Everyone!");
	});
});
$(document).ready(function(){
	$("button").click(function(){
		$("#para").html("<b>Hello World</b>");
	});
});
$(document).ready(function(){
	$("button").click(function(){
		$("#fnm").val("Himani Patel");
	});
});*/
/*$(document).ready(function(){
	$("button").click(function(){
		$("#para").text(function(i,origText){
			return "old text" + origText + "new text : Hello World!"
		});
	});
});
$(document).ready(function(){
	$("button").click(function(){
		$("#para").html(function(i, origText){
			return "old html:" + origText +"new html:hello<b> world</b>"
		});
	});
});*/
/*$(document).ready(function(){
	$("button").click(function(){
		$("#oln").attr("href","http://www.aol.com");
	});
});
$(document).ready(function(){
	$("button").click(function(){
		$("#oln").attr({"href":"http://www.aol.com",
			             "title":"aol"});
	});
});*/
/*$(document).ready(function(){
	$("button").click(function (){
		$("#para").append("How Are You!");
		$("#para").prepend("Good Morning!");
	});*/
/*$(document).ready(function(){
	$("button").click(function(){
		$("#para").after("some text after div");
		$("#para").before("some text before div");
	});
});*/
/*$(document).ready(function(){
	$("button").click(function(){
		$("#dv").remove();
	});
});*/
/*$(document).ready(function(){
	$("button").click(function(){
		$("#dv").empty();
	});
});*/
/*$(document).ready(function(){
	$("button").click(function(){
		$("p").remove("#para");
	});
});
*/
/*$(document).ready(function(){
	$("button").click(function(){
		$("p").removeClass("para");
	});
});*/
/*$(document).ready(function(){
	$("button").click(function(){
		alert("div color:" + $("#dv").css("background-color"));
	});
});*/
/*$(document).ready(function(){
	alert("height: "+ $("#dv").height());
	alert("width: " +$("#dv").width());
});
$(document).ready(function(){
	var x = "";
	x = "height is" + $("#dv").height();
	$("#dv").text(x);
});
$(document).ready(function(){
	var mes = "";
	mes = "innerheight of div is:" + $("#dv").innerHeight();
	$("#dv").html(mes);
});*/
/*$(document).ready(function(){
	var txt = "";
	txt = "outerheight of div is:" + $("#dv").outerHeight();
	txt = "outerwidth of div is:" + $("#dv").outerWidth();
	$("#dv").text(txt);
});*/
/*$(document).ready(function(){
	$("button").click(function(){
		alert("text:" +$("#dv").outerHeight(true));
	});
});*/
/*$(document).ready(function(){
	$("button").click(function(){
		$("p").siblings().css({"background-color":"yellow","border":"1px solid red"});
	});
});
$(document).ready(function(){
	$("button").click(function(){
		$("h1").siblings("p").css({"color":"blue","border":"1px dotted red"});
	});
});*/
/*$(document).ready(function(){
	$("button").click(function(){
		$("h2").next().css({"background-color":"yellow","border":"1px solid blue"});
	});
});*/
/*$(document).ready(function(){
	$("button").click(function(){
		$("h1").nextUntil("h2").css({"background-color":"red"});
	});
});*/
$(document).ready(function(){
	$("button").click(function(){
		$("h3").prevUntil("p").css({"background-color":"yellow","border":"1px solid blue" });
	
	});
});