/******************************************/
/** Scroll To Section Button **/
/******************************************/

$(document).ready(function(){

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

    var buttonToTop = $('.back-to-top-container');

    $(window).scroll(function() {    
        var scrolled = $(window).scrollTop(),
        documentHeight = $(document).height(),
        windowHeight = $(window).height(),
        halfWayPoint = (documentHeight - windowHeight) / 2
    
    
        if (scrolled >= halfWayPoint - 100) {
            $(buttonToTop).fadeIn(300);
        } else {
            $(buttonToTop).fadeOut(300);
        }
    });


/******************************************/
/** Back To Top Button **/
/******************************************/


    $('.back-to-top-container').click(function(e){
        e.preventDefault();
        var aSelector = $(this);
        $("html, body").animate({
            scrollTop: 0
        }, 1200);
    })
    
})





