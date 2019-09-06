//----------------------------------
//   File          : js/core/app/core.js
//   Type          : Main JS file
//   Version       : 2.0.0
//   Last Updated  : August 7, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Preloader
// 2. Charts color configuration
// 3. Rightbar settings
// 4. Main container height calculation
// 5. Empty Placeholder
// 6. Scroll to top
// 7. Top search bar
// 8. Header elements
// 9. Code block (pre)
// 10. Smoothscroll animation
// 11. Uniform JS
// 12. Thumbnails
// 13. Select2
// 14. Card close
// 15. Card collapse
// 16. Card reload
// 17. Lighbox


// ---------------------------------
// 1. Preloader
// ---------------------------------

$(window).load(function() {
	$('#status').delay(2000).fadeOut();
	$('#preloader').delay(2500).fadeOut('slow');
	$('body').delay(3000).css({'overflow':'visible'});
})

var docHeight = $(window).height()
	wh = $(window).outerHeight();


//----------------------------------
// 2. Charts color configuration
//----------------------------------
function rgb2hex(rgb){
	rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
	return (rgb && rgb.length === 4) ? "#" +
	("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
	("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
	("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

var chart_bg = rgb2hex($('#jquery_vars .chart-bg').css("color")),
	chart_gridlines_color = rgb2hex($('#jquery_vars .chart-gridlines-color').css("color")),
	chart_legends_text_color = rgb2hex($('#jquery_vars .chart-legends-text-color').css("color")),
	chart_grid_text_color = rgb2hex($('#jquery_vars .chart-grid-text-color').css("color")),
	chart_data_color_option1 = rgb2hex($('#jquery_vars .chart-data-color-option1').css("color")),
	chart_data_color_option2 = rgb2hex($('#jquery_vars .chart-data-color-option2').css("color")),
	chart_data_color_option3 = rgb2hex($('#jquery_vars .chart-data-color-option3').css("color")),
	chart_data_color_option4 = rgb2hex($('#jquery_vars .chart-data-color-option4').css("color")),
	chart_data_color_option5 = rgb2hex($('#jquery_vars .chart-data-color-option5').css("color")),
	chart_data_color_option6 = rgb2hex($('#jquery_vars .chart-data-color-option6').css("color")),
	chart_data_color_option7 = rgb2hex($('#jquery_vars .chart-data-color-option7').css("color")),
	chart_data_color_option8 = rgb2hex($('#jquery_vars .chart-data-color-option8').css("color"));

var colors = [chart_data_color_option1, chart_data_color_option2, chart_data_color_option3, chart_data_color_option4, chart_data_color_option5, chart_data_color_option6, chart_data_color_option7, chart_data_color_option8];
var colors_reverse = [chart_data_color_option8, chart_data_color_option7, chart_data_color_option6, chart_data_color_option5, chart_data_color_option4, chart_data_color_option3, chart_data_color_option2, chart_data_color_option1];
var colors_inverse = [chart_data_color_option3, chart_data_color_option4, chart_data_color_option7, chart_data_color_option8];
var colors_main = [chart_data_color_option1, chart_data_color_option2, chart_data_color_option5, chart_data_color_option6];


//----------------------------------
// 3. Rightbar settings
//----------------------------------
function open_rightbar() {
	$(window).resize(function() {
		if(($(window).width() < 500)){
			document.getElementById("right_sidebar").style.width = "100%";
		}
		else if($(window).width() > 500) {
			document.getElementById("right_sidebar").style.width = "300px";
		}
	}).resize();
}
function close_rightbar() {
	document.getElementById("right_sidebar").style.width = "0";
}

var navbarHeight = $('.main-nav').outerHeight();

$('.rightbar-wrapper').slimscroll({
	height: $(window).outerHeight(),
	width: "100%"
}).mouseover(function() {
	$(this).next('.slimScrollBar');
});

$('.chat-wrapper').slimscroll({
	height: $(window).outerHeight() - 120,
	width: "100%"
}).mouseover(function() {
	$(this).next('.slimScrollBar');
});

$(".friend").on("click",function () {
	$(".rightbar-wrapper").css({ 'display': "none" });
	$("#conversation").fadeIn('slow');
});

$("#back").on("click",function () {
	$("#conversation").css({ 'display': "none" });
	$(".rightbar-wrapper").fadeIn('slow');
});


jQuery(document).ready(function($) {

	//----------------------------------
	// 4. Main container height calculation
	//----------------------------------
	function containerHeight() {
	    var availableHeight = $(window).height();
	}
	containerHeight();


	//----------------------------------
	// 5. Empty Placeholder
	//----------------------------------
	$('input,textarea').focus(function(){
	   	$(this).data('placeholder',$(this).attr('placeholder'))
			.attr('placeholder','');
	}).blur(function(){
	   	$(this).attr('placeholder',$(this).data('placeholder'));
	});


	//----------------------------------
	// 6. Scroll to top
	//----------------------------------
	if($.fn.scrollUp){
        $.scrollUp({
            scrollName: 'scrollTop',
            topDistance: '600',
            topSpeed: 300,
            animation: 'fade',
            animationInSpeed: 200,
            animationOutSpeed: 200,
            scrollText: '<i class="icon-arrow-up12"></i>',
            activeOverlay: false
        });
    }


	//----------------------------------
	// 7. Top search bar
	//----------------------------------
    $(".btn-top-search").hammer().on("click touchstart", function(e) {
        e.preventDefault();
        if ($(".top-search-bar").hasClass("search-bar-toggle")) {
            $(".top-search-bar").removeClass("search-bar-toggle");
        } else {
            $(".top-search-bar").addClass("search-bar-toggle");
        }
    });

    $(document).on('click touchstart', function(e) {
		if ($(e.target).closest(".menu").length === 0 && $(e.target).closest(".left-toggle-switch").length === 0) {
            $("body").removeClass("left-aside-toggle");
        }
		if ($(e.target).closest(".top-search-bar").length === 0 && $(e.target).closest(".btn-top-search").length === 0) {
            $(".top-search-bar").removeClass("search-bar-toggle");
        }
    });


	//----------------------------------
	// 8. Header elements
	//----------------------------------
	$('.card-header, .header-content, .card-block, .card-footer').has('> .elements').append('<a class="elements-toggle"><i class="icon-more"></i></a>');
	$('.elements-toggle').on('click', function() {
        $(this).parent().children('.elements').toggleClass('visible');
    });


	//----------------------------------
	// 9. Code block (pre)
	//----------------------------------
	var pre = document.getElementsByTagName('pre'),
		pl = pre.length;
	for (var i = 0; i < pl; i++) {
		pre[i].innerHTML = '<span class="line-numbers-rows"></span>' + pre[i].innerHTML;
		var num = pre[i].innerHTML.split(/\n/).length;
		for (var j = 0; j < num; j++) {
			var line_num = pre[i].getElementsByTagName('span')[0];
			line_num.innerHTML += '<span>' + (j + 1) + '</span>';
		}
	}


	//----------------------------------
	// 10. Smoothscroll animation
	//----------------------------------
	$('a[href*=#]:not([data-toggle="tab"],[data-toggle="collapse"])').bind('click.smoothscroll',function (e) {
		e.preventDefault();
		var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top-60
		}, 500, 'swing', function () {
		});
	});


	//----------------------------------
	// 11. Uniform JS
	//----------------------------------
	$(".file-styled-basic").uniform({
		fileButtonHtml: 'Browse'
	});

	$(".styled, .multiselect-container input").uniform({
		radioClass: 'choice'
	});
	$(".file-styled").uniform({
		wrapperClass: 'bg-blue',
		fileButtonHtml: '<i class="icon-plus3"></i>'
	});

	$(".file").fileinput({
		uploadExtraData: {kvId: '10'}
	});


	//----------------------------------
	// 12. Thumbnails
	//----------------------------------
	$(".hover").mouseleave(
	    function () {
	    	$(this).removeClass("hover");
	    }
	);


	//----------------------------------
	// 13. Select2
	//----------------------------------
	$('.select').select2();


	//----------------------------------
	// 14. Card close
	//----------------------------------
	$('.card-close').on('click',function() {
		$(this).closest('.card').fadeOut();
	});


	//----------------------------------
	// 15. Card collapse
	//----------------------------------
	$('.card-collapsed').find('[data-action=collapse]').children('i').addClass('rotate-180');
	$('.card [data-action=collapse]').on("click",function (e) {
		e.preventDefault();
		$(this).parents('.card').toggleClass('card-collapsed');
		$(this).toggleClass('rotate-180');
		containerHeight();
	});


	//----------------------------------
	// 16. Card reload
	//----------------------------------
	$('.card [data-action=reload]').on("click",function (e) {
		e.preventDefault();
		var block = $(this).parent().parent().parent().parent().parent();
		$(block).block({
			message: '<i class="icon-spinner2 spinner icon-2x"></i><h4>Loading</h4><h6>Please wait</h6>',
			overlayCSS: {
				backgroundColor: '#fff',
				opacity: 0.9,
				cursor: 'wait',
				'box-shadow': '0 0 0 1px #ddd'
			},
			css: {
				border: 0,
				padding: 0,
				backgroundColor: 'none'
			}
		});
		window.setTimeout(function () {
		   $(block).unblock();
		}, 2000);
	});


	$(".styled, .multiselect-container input").uniform({
		radioClass: 'choice'
	});

	if (Array.prototype.forEach) {
		var elems = Array.prototype.slice.call(document.querySelectorAll('.switchery'));
		elems.forEach(function(html) {
		  var switchery = new Switchery(html);
		});
		} else {
		var elems = document.querySelectorAll('.switchery');
		for (var i = 0; i < elems.length; i++) {
		  var switchery = new Switchery(elems[i]);
		}
	}
});


//----------------------------------
// 17. Lighbox
//----------------------------------
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});
