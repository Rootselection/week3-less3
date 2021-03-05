new WOW().init();
$(function(){
    var mixer = mixitup('.gallery__content');
});

    $(".nav, a, .footer").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 700);
	});



$('.slider').slick({
    dots: true,
    arrows: false,
});

$('.menu__btn').on('click', function(){
    $('.header__top').toggleClass('header__top--active');
});




    var scrollBottom = $(window).scrollTop() + $(window).height();

$(window).scroll(function(){
      if($(this).scrollTop() > 120) {
        $(".header__top").css("background","#00B2A0");
        $(".header__top").css("padding-top","0");
        $(".header__top").css("padding-bottom","0");
        $(".header__top").css("box-shadow","0 0 5px black");
        $(".header__top-inner").css("align-items","center");
        $(".nav").css("box-shadow","0 0 5px black");

       } else if (scrollBottom  > 120) {
        $(".header__top").css("background","transparent");
        $(".header__top").css("padding-top","35px");
        $(".header__top").css("padding-bottom","40px");
        $(".header__top").css("box-shadow","0 0 0 black");
        $(".nav").css("box-shadow","0 0 5px black");
      }
    });


