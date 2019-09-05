//----------------------------------
//   File          : js/core/app/layout.js
//   Type          : Layout configuration JS file
//   Version       : 1.0.0
//   Last Updated  : April 4, 2017
//----------------------------------

// ---------------------------------
// Table of contents
// ---------------------------------
// 1. Handheld devices menu toggle
// 2. Material menu
// 3. Dropdown menu
// 4. Dropdown label menu
// 5. Megamenu
// 6. Iconic menu
// 7. Sidebar menu
// 8. Default menu (material)


jQuery(document).ready(function($) {
	'use strict';

	var totalWidth = $(window).width(),
		layout = $('.layout').css("font-family"),
		secondary_sidebar_width = 200;


	// ---------------------------------
	// 1. Handheld devices menu toggle
	// ---------------------------------
    $(".left-toggle-switch").hammer().on("click touchstart", function(e) {
        e.preventDefault();
        if ($("body").hasClass("left-aside-toggle")) {
            $("body").removeClass("left-aside-toggle");
        } else {
            $("body").addClass("left-aside-toggle");
        }
    });

    function AsideHeight() {
        var TopBarHeight = $('.main-nav').height(),
	        calc_wh = wh - TopBarHeight,
			menuMargin = $('header').outerHeight(),
			containerMargin = $('.main-nav').outerHeight(),
			menuHeight = wh - menuMargin;

        $(window).resize(function() {
            if($(window).width() < 801) {
                $(".menu").css({
                    "height": wh + "px"
                });
				$(".main-container").css('margin-top', containerMargin);
				//$(".user-profile").load("blocks/sidebar-user-profile.html");
				//$(".menu-container").load("blocks/menus/material-sidebar.html");
				$('.left-aside-container').slimscroll({
					height: calc_wh + 50,
					width: "250px"
					}).mouseover(function() {
					$(this).next('.slimScrollBar');
				});

				if($(window).width() == 800) {
					$(".container-sidebar").css({
						"height": "100%",
						"width": "200px",
						"position": "fixed",
						"float": "left"
					});

					$('.secondary-sidebar').slimscroll({
						height: calc_wh,
						width: "200px"
						}).mouseover(function() {
						$(this).next('.slimScrollBar');
					});

					$(".container-aside").css({
						"width": totalWidth - secondary_sidebar_width,
						"margin-left": secondary_sidebar_width,
						"float": "left"
					});
				}
            }

            else if(($(window).width() >= 1024)){

				// ---------------------------------
				// 2. Material menu
				// ---------------------------------
				if(layout == "material"){
			        $(".menu").addClass(" sidebar");
					//$(".user-profile").load("blocks/sidebar-user-profile.html");
					//$(".menu-container").load("blocks/menus/material-sidebar.html");
					$(".sidebar").css({
	                    "height": menuHeight ,
						"top": menuMargin
	                });
					$(".main-container").css('margin-top', containerMargin);
	                $('.sidebar .left-aside-container').slimscroll({
	                    height: menuHeight + 12,
	                    width: "200px"
	                    }).mouseover(function() {
	                    $(this).next('.slimScrollBar');
	                });
					var sidebar_width = 200;
			    }


				// ---------------------------------
				// 3. Dropdown menu
				// ---------------------------------
			    else if(layout == 'dropdown'){
			        $(".menu").addClass(" dd");
					$(".menu").css('top', menuMargin);
					$(".main-container").css('margin-top', containerMargin);
					$(".menu-container").load("blocks/menus/dropdown.html");
					var sidebar_width = 0;
			    }


				// ---------------------------------
				// 4. Dropdown label menu
				// ---------------------------------
			    else if(layout == 'dropdown_label'){
					$(".menu").addClass(" dd");
					$(".menu").css('top', menuMargin);
					$(".main-container").css('margin-top', containerMargin);
					$(".menu-container").load("blocks/menus/dropdown.html");
					var sidebar_width = 0;
			    }


				// ---------------------------------
				// 5. Megamenu
				// ---------------------------------
				else if(layout == 'megamenu'){
			        $(".menu").addClass(" megamenu");
					$(".menu").css('top', menuMargin);
					$("ul.main-menu").css('top', menuMargin);
					$(".main-container").css('margin-top', containerMargin);
					$(".menu-container").load("blocks/menus/megamenu.html");
					var sidebar_width = 0;
			    }


				// ---------------------------------
				// 6. Iconic menu
				// ---------------------------------
			    else if(layout == 'iconic'){
					$(".menu").addClass(" iconic");
					$(".main-container").css('margin-top', containerMargin);
					$(".menu-container").load("blocks/menus/iconic.html");
					$('ul.sidemenu-sub').slimscroll({
	                    height: menuHeight + 10,
	                    width: "200px"
	                    }).mouseover(function() {
	                    $(this).next('.slimScrollBar');
	                });
					var sidebar_width = 60;
			    }


				// ---------------------------------
				// 7. Sidebar menu
				// ---------------------------------
			    else if(layout == 'sidebar'){
			        $(".menu").addClass(" leftmenu");
					$(".menu-container").load("blocks/menus/material-sidebar.html");
					$(".main-container").css('margin-top', containerMargin);
					$(".leftmenu").css({
	                    "height": menuHeight +1,
						"top": menuMargin
	                });
	                $('.leftmenu .left-aside-container').slimscroll({
	                    height: menuHeight + 11,
	                    width: "200px"
	                    }).mouseover(function() {
	                    $(this).next('.slimScrollBar');
	                });
					var sidebar_width = 200;
			    }


				// ---------------------------------
				// 8. Default menu (material)
				// ---------------------------------
			    else if(layout == ''){
					$(".menu").addClass(" leftmenu");
					$(".menu-container").load("blocks/menus/material-sidebar.html");
					$(".main-container").css('margin-top', containerMargin);
					$(".leftmenu").css({
	                    "height": menuHeight +1,
						"top": menuMargin
	                });
	                $('.leftmenu .left-aside-container').slimscroll({
	                    height: menuHeight + 11,
	                    width: "200px"
	                    }).mouseover(function() {
	                    $(this).next('.slimScrollBar');
	                });
					var sidebar_width = 200;
			    }

				$(".container-sidebar").css({
					"height": "100%",
					"width": "200px",
					"position": "fixed",
					"float": "left"
				});

				$('.secondary-sidebar').slimscroll({
					height: calc_wh,
					width: "200px"
					}).mouseover(function() {
					$(this).next('.slimScrollBar');
				});

				$(".container-aside").css({
					"width": totalWidth - secondary_sidebar_width - sidebar_width,
					"margin-left": secondary_sidebar_width,
					"float": "left"
				});
            }
	    }).resize();
    }
	AsideHeight();
});
