$(function () {
    // initialize WOW for element animation
    new WOW().init();

    $(function () {
            $(window).on("load resize", function () {
                $(".fill-screen").css("height", window.innerHeight);
            });
        });

        $('body').bind('click', function(e) {
           if($(e.target).closest('.navbar-collapse').length == 0) {
               $('.navbar-collapse').collapse('hide'); 
           }
        });

        $('.navbar-collapse').click('li', function() {
            $('.navbar-collapse').collapse('hide'); 
        });


$(document).ready(function () {
    $("#gallery").nanoGallery();
	changeColor("container", 32, 32, 32, 255, 255, 255);
});

});