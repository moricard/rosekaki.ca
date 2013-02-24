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
        $('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination - 200 }, 1200, function() {
            window.location.hash = elementClicked;
        });
        
        return false;
    }); 


    $(window).scroll(function() {
	
	//parallax

        var scrollTop = getScrollTop()
        ,   logoOffset = logo.offset().top
        ,   navOffset = Math.min( 120, (scrollTop *0.2) - 50);

        subLogo.css({
            'top' : (scrollTop * 0.6 + 88) + 'px'
        });

        if ( !fixed ) {
            logo.css({'top' : (scrollTop * 0.6) + 'px'});
            if (scrollTop >= logoOffset ){
                logo.css({
                    'position' : 'fixed'
                    , 'top'      : 0
                });            
                fixed = !fixed;
            }

        } else if ( fixed && scrollTop < 500 ) {
            logo.css('position', 'relative');
            fixed = !fixed;
        }

/*
        if ( !(fixed = (scrollTop >= logoOffset)) ) {
            logo.css({'top' : (scrollTop * 0.6) + 'px'});
        } else if ( fixed && scrollTop < 450 ) {
            logo.css('position', 'relative');
        } else if ( scrollTop >= 450){
            logo.css('position','fixed')
                .css('top', 0);
        }
        console.log(fixed);
*/
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
