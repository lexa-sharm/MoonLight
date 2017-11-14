(function ($) {
var hwSlideSpeed = 700;
var hwTimeOut = 3000;
var hwNeedLinks = true;

$(document).ready(function(e) {
	$('.slide').css(
		{"position" : "absolute",
		 "top":'0', "left": '0'}).hide().eq(0).show();
	var slideNum = 0;
	var slideTime;
	slideCount = $("#slider .slide").size();
	var animSlide = function(arrow){
		clearTimeout(slideTime);
		$('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
		if(arrow == "next"){
			if(slideNum == (slideCount-1)){slideNum=0;}
			else{slideNum++}
			}
		else if(arrow == "prew")
		{
			if(slideNum == 0){slideNum=slideCount-1;}
			else{slideNum-=1}
		}
		else{
			slideNum = arrow;
			}
		$('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
		$(".control-slide.active").removeClass("active");
		$('.control-slide').eq(slideNum).addClass('active');
		}
// if(hwNeedLinks){
// var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
// 	.prependTo('#slider');		
// 	$('#nextbutton').click(function(){
// 		animSlide("next");
// 		return false;
// 		})
// 	$('#prewbutton').click(function(){
// 		animSlide("prew");
// 		return false;
// 		})
// }
	var $adderSpan = '';
	$('.slide').each(function(index) {
			$adderSpan += '<span class = "control-slide">' + index + '</span>';
		});
	$('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
	$(".control-slide:first").addClass("active");
	$('.control-slide').click(function(){
	var goToNum = parseFloat($(this).text());
	animSlide(goToNum);
	});
	var pause = false;
	var rotator = function(){
			if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
			}
	$('#slider-wrap').hover(	
		function(){clearTimeout(slideTime); pause = true;},
		function(){pause = false;
		 //rotator();
		});
	rotator();
});
})(jQuery);




jQuery(document).ready(function($){
 
/* prepend menu icon */
$('#nav-wrap').prepend('<div id="menu-icon"></div>');
 
/* toggle nav */
$("#menu-icon").on("click", function(){
$(".nav").slideToggle();
$(this).toggleClass("active");
});


// $(window).resize(function(){
// 	slide_resize()

// });

// $(window).load(function(){
// 	slide_resize() 	
// });

});

// function slide_resize(){
// 	var h = $('#slider .slide img:first-child').height();

	

// 	if(h >= 150){
// 		$('#slider').css({height:h+'px'});
// 		$('#slider-wrap').css({height:h+'px'});
// 	}else{
// 		$('#slider-wrap').css({height:'200px'});
// 	}
// }