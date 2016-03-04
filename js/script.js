$(function(){
	"use strict"

	var topoffset=0
	var wheight = $(window).height(); //height of window

	//set height of main page 
	$('.page#main').css('height', wheight);
	$('.particles-js-canvas-el').css('height', $('#about').height());
	//adjust height of .fullheight elements on window resize
	$(window).resize(function() {
		wheight = $(window).height(); //get the height of the window
		$('.page#main').css('height', wheight); //set to window tallness  
	});

	 //Activate Scrollspy
	$('body').scrollspy({target: '.navbar', offset: 100});

	// add inbody class
	var hash = $(this).find('li.active a').attr('href');
	if(hash !== '#main') {
		$('header navbar-brand').addClass('inbody-img');
		$('header nav').addClass('inbody');
	} else {
		$('header navbar-brand').removeClass('inbody-img');
		$('header nav').removeClass('inbody');
	}

	// Add an inbody class to nav when scrollspy event fires
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
		var hash = $(this).find('li.active a').attr('href');
	    if(hash !== '#main') {
	    // if ($(window).scrollTop() > 20){
			$('header nav').addClass('inbody');
	    } else {
			$('header nav').removeClass('inbody');
	    }
	});

	//Use smooth scrolling when clicking on navigation
	$('.navbar a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') === 
			this.pathname.replace(/^\//,'') && 
			location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-topoffset+2
		        }, 500);
		    	return false;
			} //target.length
	    } //click function
	}) //smooth scrolling
})