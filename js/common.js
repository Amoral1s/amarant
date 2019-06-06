$(document).ready(function(){

$(function () {
    $(document).on('mousemove', function (e) {
        $('#logo').css({
            left: -e.pageX / 30 + 350,
            top: -e.pageY / 30 + -10
        });
        
    });
});

$(".toggle, .close").click(function() {
        if ($(".mobile").is(":visible")) {
        $(".mobile").slideUp(600);

        } else {
                $(".mobile").slideDown(600);
        };
});


	$(".toggle").click(function() {
        $(".toggle").addClass('open-toggle');
        $(".close").addClass('open-x');
       });
       
	$(".close").click(function() {
        $(".toggle").removeClass('open-toggle');
        $(".close").removeClass('open-x');
       });

});