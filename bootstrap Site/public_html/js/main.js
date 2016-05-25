$(document).ready(function() {
    setTimeout(function(){
       $('body').addClass('loaded');

    }, 2500);

    //function to smooth scroll to selected Div section
    $("a.navLink").on('click', function(event) {
        event.preventDefault();

        var hash = this.hash;

        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            window.location.hash = hash;
        });
    });
    //function to shrink navbar when scrolling down
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('small');
            $('#back-to-top').fadeIn();
        } else {
            $('nav').removeClass('small');
            $('#back-to-top').fadeOut();
        }
    });
    //function to scroll back to top when pressing button
    $('#back-to-top').click(function() {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');
});
