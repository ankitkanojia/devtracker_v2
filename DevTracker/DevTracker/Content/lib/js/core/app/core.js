//----------------------------------
//   File          : js/core/app/core.js
//   Type          : Main JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Preloader
// 2. Charts color configuration
// 3. HTML blocks import
// 4. Main container height calculation
// 5. Empty Placeholder
// 6. Scroll to top
// 7. Top search bar
// 8. Header elements
// 9. Tooltips
// 10. Popovers
// 11. Panel reload
// 12. Panel close
// 13. Panel collapse
// 14. Code block (pre)
// 15. Affix menu
// 16. Active nav on click
// 17. Smoothscroll animation
// 18. Uniform JS
// 19. Thumbnails
// 20. Lighbox
// 21. Select2


// ---------------------------------
// 1. Preloader
// ---------------------------------
//<![CDATA[
$(window).load(function() {
    $('#status').delay(500).fadeOut();
    $('#preloader').delay(1000).fadeOut('slow');
    $('body').delay(1500).css({ 'overflow': 'visible' });
});
//]]>
'use strict';
var docHeight = $(window).height();
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


jQuery(document).ready(function($) {

	//----------------------------------
	// 3. HTML blocks import
	//----------------------------------
	//$(".apps-dropdown .dropdown-menu").load("blocks/navbar/apps-dropdown.html");
	//$(".notifications .dropdown-menu").load("blocks/navbar/notifications-dropdown.html");
	//$("#right_sidebar").load("blocks/rightbar/rightbar.html");


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
	$('.panel-heading, .header-content, .panel-body, .panel-footer').has('> .elements').append('<a class="elements-toggle"><i class="icon-more"></i></a>');
	$('.elements-toggle').on('click', function() {
        $(this).parent().children('.elements').toggleClass('visible');
    });


	//----------------------------------
	// 9. Tooltips
	//----------------------------------
	$('[data-popup="tooltip"]').tooltip();

	// Custom color
	$('[data-popup=tooltip-custom]').tooltip({
		template: '<div class="tooltip"><div class="bg-teal"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>'
	});


	//----------------------------------
	// 10. Popovers
	//----------------------------------
	$('[data-popup="popover"]').popover();

	// Custom solid color
	$('[data-popup=popover-solid]').popover({
		template: '<div class="popover solid"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	});


	//----------------------------------
	// 11. Panel reload
	//----------------------------------
	$('.panel [data-action=reload]').on("click",function (e) {
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


	//----------------------------------
	// 12. Panel close
	//----------------------------------
	$('.panel [data-action=close]').on("click",function (e) {
        e.preventDefault();
        var $panelClose = $(this).parent().parent().parent().parent().parent();
		//alert($panelClose);
        containerHeight(); // recalculate page height
        $panelClose.fadeOut(500, function() {
            //$(this).remove();
			$(this).css('display', 'none');
        });
    });


	//----------------------------------
	// 13. Panel collapse
	//----------------------------------
	$('.panel-collapsed').children('.panel-heading').nextAll().hide();
    $('.panel-collapsed').find('[data-action=collapse]').children('i').addClass('rotate-180');
    $('.panel [data-action=collapse]').on("click",function (e) {
        e.preventDefault();
        var $panelCollapse = $(this).parent().parent().parent().parent().nextAll();
        $(this).parents('.panel').toggleClass('panel-collapsed');
        $(this).toggleClass('rotate-180');
        containerHeight();
        $panelCollapse.slideToggle(150);
    });


	//----------------------------------
	// 14. Code block (pre)
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
	// 15. Affix menu
	//----------------------------------
	var $affixElement = $('div[data-spy="affix"]');
    $affixElement.width($affixElement.parent().width());


	//----------------------------------
	// 16. Active nav on click
	//----------------------------------
	var selector = '.navigation li';
	$(selector).on('click', function(){
		$(selector).removeClass('active');
		$(this).addClass('active');
	});


	//----------------------------------
	// 17. Smoothscroll animation
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
	// 18. Uniform JS
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

	// Contextual colors
	// Primary
	$(".control-primary").uniform({
		radioClass: 'choice',
		wrapperClass: 'border-primary text-primary'
	});

	// Danger
	$(".control-danger").uniform({
		radioClass: 'choice',
		wrapperClass: 'border-danger text-danger'
	});

	// Success
	$(".control-success").uniform({
		radioClass: 'choice',
		wrapperClass: 'border-success text-success'
	});

	// Warning
	$(".control-warning").uniform({
		radioClass: 'choice',
		wrapperClass: 'border-warning text-warning'
	});

	// Info
	$(".control-info").uniform({
		radioClass: 'choice',
		wrapperClass: 'border-info text-info'
	});

	// Custom color
	$(".control-custom").uniform({
		radioClass: 'choice',
		wrapperClass: 'border-indigo-200 text-indigo-200'
	});


	//----------------------------------
	// 19. Thumbnails
	//----------------------------------
	$(".hover").mouseleave(
	    function () {
	    	$(this).removeClass("hover");
	    }
	);


	//----------------------------------
	// 20. Lighbox
	//----------------------------------
	$('.venobox').venobox();


	//----------------------------------
	// 21. Select2
	//----------------------------------
	$('.select').select2();
});
