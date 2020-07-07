/******************************************/
/** Scroll To Section Button **/
/******************************************/

if($(window).width() > 1){
    $(".scroller").click(function(e){
        e.preventDefault();
        console.log("works");
        var aSelector = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(aSelector).offset().top
        }, 1200);
    })
} 

