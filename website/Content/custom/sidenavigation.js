 
if ($.fn.navAccordion) {
    $('.sidebar-accordion').each(function () {
        $(this).navAccordion({
            eventType: 'click',
            hoverDelay: 100,
            autoClose: true,
            saveState: false,
            disableLink: true,
            speed: 'fast',
            showCount: false,
            autoExpand: true,
            classExpand: 'acc-current-parent'
        });
    });
}

var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
$(".sidebar ul.sidebar-accordion li a").each(function () {
    if ($(this).attr("href") === pgurl || $(this).attr("href") === '') {
        $(this).addClass(" active");
        $(this).parent().parent().css("display", "block");
        $(this).parent().parent().parent().addClass(" active");
        $(this).parent().parent().parent().parent().css("display", "block");
        $(this).parent().parent().parent().parent().parent().addClass(" active");
    }
});
$(".leftmenu ul.sidebar-accordion li a").each(function () {
    if ($(this).attr("href") === pgurl || $(this).attr("href") === '') {
        $(this).addClass(" active");
        $(this).parent().parent().css("display", "block");
        $(this).parent().parent().parent().addClass(" active");
        $(this).parent().parent().parent().parent().css("display", "block");
        $(this).parent().parent().parent().parent().parent().addClass(" active");
    }
});
 