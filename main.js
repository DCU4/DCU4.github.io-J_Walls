
$(function(){	
	var instance = new TypeIt('#text-rotate', {
     strings: ["creator.", "producer.", "designer.", "human.",],
     speed: 150,
     breakLines: false,
     autoStart: false,
     lifeLike:false,
     loop:true,
     nextStringDelay:2000,
     loopDelay:2000
});


$(".music-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#music").offset().top
    }, 2000,'swing');
});

$(".about-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000, 'swing');
});


$(".contact-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000, 'swing');
});

$(".front-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#front-page").offset().top
    }, 2000, 'swing');
});
});
