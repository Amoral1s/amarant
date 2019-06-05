$(document).ready(function(){
  
  $(function () {
    $(document).on('mousemove', function (e) {
        $('.header__wrap1').css({
            left: -e.pageX / 20 + 600,
            top: -e.pageY / 20 + 250
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
