/*(function($) {
    $(function() {
        let $element = $("#fadeInIcon");
        $element.hide();
        setInterval(function() {
            $element.fadeIn(500);
        }, 100);
    });    
})(jQuery);*/

/*(function($) {
    let $element = $("#fadeInIcon");
    $element.hide();
    $element.fadeIn(500, function(){ $(this).hide(); });
})(jQuery);*/

(function($) {
    $(function() {
        let $element = $("#fadeInIcon");
        let $element2 = $("#fadeInText");
        $element2.hide();
        setInterval(function() {
            $element.fadeOut(700, function(){
                $element.fadeIn(700);
            });
        }, 100);
        setTimeout(function() {
            $element2.fadeIn(1500);
        }, 1500);
    });
})(jQuery);

/*(function($) {
    $(function() {
        setInterval(function() {
            $element.animate({
                top: 20
            }, 700, function() {
                $element.animate({
                    bottom: 20
                }, 700);
            });
        }, 100);
    });
})(iQuery);*/