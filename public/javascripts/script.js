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


// (function() {
//     'use strict';
//     var player = {
//         "id": "1e8501e",
//         "name": "Main Website ",
//         "type": "large",
//         "stream": {
//             "station ": "s25ffa1bef",
//             "output": null,
//             "streaming_url": "https:\/\/streaming.radio.co\/s25ffa1bef"
//         },
//         "theme": {
//             "width": 400,
//             "background_colour": "#fcfcfc",
//             "text_colour": "#7e7f7b",
//             "accent_colour": "#ddbf2c",
//             "rounded_corners": true
//         },
//         "settings": {
//             "autoplay": true,
//             "artwork": true
//         },
//         "embed_url": "https:\/\/embed.radio.co\/player\/1e8501e.html",
//         "social": {
//             "twitter": false,
//             "facebook_share": false,
//             "embed": false,
//             "template": "Radio.co"
//         }
//     };
//     var i = document.getElementById('embedFrame');
//     var style = "border:none;";
//     var width = player.theme.width;
//     if (window.screen.width < 400) {
//         width = '100%';
//     }
//     i.src = player.embed_url;
//     i.width = width;
//     if (player.theme.rounded_corners) {
//         style += 'border-radius:8px;';
//     }
//     i.setAttribute('style', style);
//     var s = document.getElementsByTagName('script');
//     s = s[s.length - 1];
//     if (s.parentNode.nodeName === 'HEAD') {
//         window.onload = function() {
//             document.body.appendChild(i);
//         };
//     } else {
//         s.parentNode.insertBefore(i, s);
//     }
//     window.addEventListener('message', function(e) {
//         var eventName = e.data[0];
//         var data = e.data[1];
//         if (eventName === player.id + '.setHeight') {
//             i.style.height = data + 'px';
//         }
//     }, false);
//     i.addEventListener('load', function() {
//         var targetUrl = player.embed_url.split('/').splice(0, 3).join('/');
//         setTimeout(function() {
//             i.contentWindow.postMessage(JSON.stringify(['parent', location]), targetUrl);
//         }, 1000);
//     });
// }());

