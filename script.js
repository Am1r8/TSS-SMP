$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

// scrollFun
jQuery.fn.niceScroll = function() {
    $(this).click(function(e) {
        var h = $(this).attr('href'),
            target;

        if (h.charAt(0) == '#' && h.length > 1 && (target = $(h)).length > 0) {
            var pos = Math.max(target.offset().top, 0);
            e.preventDefault();
            $('body,html').animate({
                scrollTop: pos
            }, 'slow', 'swing');
        }
    });
};
$('.scroll').niceScroll();

function showAlert() {
    var myText = "Our Server IP is: " + "smptss.ddns.net";
    alert(myText);
}
