$(document).ready(function(){

$(function () {
    $(document).on('mousemove', function (e) {
        $('.header__bg__img').css({
            left: -e.pageX / 10 + 1000,
            top: -e.pageY / 10 + 350
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


    $(".assort-button").click(function() {
    $(".table-wrap").addClass('table-open');
    });

    $(".table-close").click(function() {
    $(".table-wrap").removeClass('table-open');
    });

    $("#phonenum").mask("+7(999)999-99-99");
      
    
});
