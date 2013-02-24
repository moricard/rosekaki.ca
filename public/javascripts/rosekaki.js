$(document).ready(function() {

    var divHeight = 500
    ,   footHeight = 48
    ,   b2h = 500
    ,   b3h = 700;

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

    var logo = $('#logo')
    ,   subLogo = $('#logo-sub')
    ,   greenBlocker = $('#green-blocker')
    ,   redBlocker = $('#red-blocker')
    ,   nav = $('#nav')
    ,   fixed = false
    ,   green = false
    ,   red = false
    ,   logoOrigin = logo.offset().top
    ,   left = -100;

    $(window).scroll(function() {
	
	//parallax

        var scrollTop = getScrollTop()
        ,   logoOffset = logo.offset().top;
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

        } else if ( fixed && scrollTop < logoOrigin ) {
            logo.css('position', 'relative');
            fixed = !fixed;
        }

        var navOffset = Math.min( left, scrollTop - 600);
        nav.css({'left' : navOffset + 'px'});
     	 /*
	
	var block2 = $('#block-2')
        ,   b2Top = block2.offset().top
        ,   b2Center = b2Top - ( $(window).height() - b2h ) / 2;

	if( scrollTop >= b2Center ){
	    $("#block-2 .txt").css('top', ((scrollTop - b2Center) * 0.3 + 100) + 'px');
	}

        if ( scrollTop >= b2Top + 90 ) {
            greenBlocker.css('visibility', 'visible');
        } else {
            greenBlocker.css('visibility', 'hidden');
        }
	
	
	var block3 = $('#block-3')
        ,   b3Top  = block3.offset().top
        ,   b3Center = b3Top - ( $(window).height() - b3h ) / 2;
	
	if(scrollTop >= b3Center ){
	    $("#block-3 .txt").css('top', ( (scrollTop - b3Center) * 0.4 + 100) + 'px');
	}

        if ( scrollTop >= b3Top ) {
            redBlocker.css('visibility', 'visible');
        } else {
            redBlocker.css('visibility', 'hidden');
        }
*/
	
	/*
	var b4Center = $("#block-4").offset().top - ( $(window).height() - divHeight )/2
	,   b4Bottom = $("#block-4").offset().top - $(window).height()
	,   b4Top = $("#block-4").offset().top + divHeight + footHeight;
	
	if(getScrollTop() > b4Bottom && getScrollTop() < b4Top){
	    $("#block-4 .txt").css('marginTop', ( (getScrollTop() - b4Center + footHeight) *0.3 ) + 'px');
	}
         */
	
    });

});
