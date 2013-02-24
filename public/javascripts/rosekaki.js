$(document).ready(function() {

    var height = $(window).height()
    ,   margin = 200
    ,   logo = $('#logo')
    ,   subLogo = $('#logo-sub')
    ,   greenBlocker = $('#green-blocker')
    ,   redBlocker = $('#red-blocker')
    ,   nav = $('#nav')
    ,   fixed = false;

    $('#block-1').height( height - margin );

    //Smooth scrolling
    $('.scrollpage').click(function() {

        var elementClicked = $(this).attr("href");

        var destination = $(elementClicked).offset().top;

        $('html:not(:animated),body:not(:animated)')
            .animate({
                scrollTop: destination - 80 
            }, 1200
             , function() {
                 window.location.hash = elementClicked;
             });
        
        return false;
    }); 


    $(window).scroll(function() {
	
	//parallax

        var scrollTop = getScrollTop()
        ,   logoOffset = logo.offset().top
        ,   navOffset = Math.min( 0, (scrollTop *0.2) - 50);

        subLogo.css({
            'top' : (scrollTop * 0.6 + 88) + 'px'
        });

        logo.css({'top' : (scrollTop * 0.6) + 'px'});

        nav.css({'top' : navOffset + 'px' });
	
    });

    function getScrollTop(){ 

	if ( typeof pageYOffset != 'undefined'){
	    return pageYOffset;
	} else {
	    var b = document.body //IE 'quirks'
	    ,   d = document.documentElement; //IE with doctype
	    d = ( d.clientHeight )? d : b;
	    return d.scrollTop;
	}
    }

});
