// dropdown menu
$(function () {
  $('[data-toggle="popover"]').popover({html:true});
});

// typed.js
$(function(){
  $(".element").typed({
      strings: ["garden ^1500",
                "micro-farm ^1500",
                "money maker ^1500"
                ],
      typeSpeed: 5,
      loop: true
  });
});

// smooth scroll
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
