$(document).ready(function(){

	//FOUNDATION
	$(document).foundation();

	//PAGE LOAD ANIMATIOIN
	$('.animsition').animsition({
		loadingParentElement: 'html',
		inClass: 'fade-in',
		outClass: 'fade-out',
		inDuration: 1200,
		outDuration: 1200
	});

	//MENU CLASSES
	"use strict";

	$('.mainnav > ul > li:has( > ul), .mobilenav > ul > li:has( > ul)').addClass("dropdown-icon");

	$('.mainnav > ul > li > ul:has(:has(ul)) > li, .mobilenav > ul > li > ul:has(:has(ul)) > li').addClass('heading');

	$('.mainnav > ul > li > ul:not(:has(ul))').addClass('dropdown');

	$('.mobilenav > ul > li > ul:not(:has(ul))').addClass('dropdown');

	$('.mobilenav').find('.has-children').children('a').after('<button class="drop-button"><i class="nucleo icon-minimal-right"></i></button>');

	$('.mainnav > ul > li').hover(function(e) {
	    $(this).children('ul').stop(true, false).toggleClass('active-hover');
	    e.preventDefault();
	});

	$('.mobilenav > ul > li > button').click(function(e) {
		$(this).toggleClass('open');
		$(this).next('ul').slideToggle(400, 'easeOutCubic');
	});

	//MOBILE MENU
	(function ($){
		var controller = new slidebars();
		controller.init();

		$( '.mobile-icon' ).on( 'click', function ( event ) {
			event.stopPropagation();
			controller.toggle( 'slidebar' );
		});

		// Close any
		$( document ).on( 'click', '.js-close-any, .mobilemenu a', function ( event ) {
			$('.hamburger').removeClass('is-active');
			if ( controller.getActiveSlidebar() ) {
				// event.preventDefault();
				event.stopPropagation();
				controller.close();
			}
		});

		// Add close class to canvas container when Slidebar is opened
		$( controller.events ).on( 'opening', function ( event ) {
			$( '[canvas]' ).addClass( 'js-close-any' );
			$('body').addClass('is-open');
		});

		// Add close class to canvas container when Slidebar is opened
		$( controller.events ).on( 'closing', function ( event ) {
			$( '[canvas]' ).removeClass( 'js-close-any' );
			$('body').removeClass('is-open');
		});

	})( jQuery );

	//MOBILE HAMBURGER
	var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

	var hamburgers = document.querySelectorAll(".hamburger");
	if (hamburgers.length > 0) {
		forEach(hamburgers, function(hamburger) {
			hamburger.addEventListener("click", function() {
				this.classList.toggle("is-active");
			}, false);
		});
	}

	//MODALS
	$('[data-fancybox]').fancybox({
		animationEffect: 'zoom', // "false" "zoom" "fade" "zoom-in-out"
		animationDuration: 500,
		zoomOpacity: 'auto',
		transitionEffect: 'slide', // "false" "fade' "slide' "circular' "tube' "zoom-in-out' "rotate'
		transitionDuration: 500,
		slideClass: '',
		baseClass: '',
		protect: true,
		arrows: true,
		infobar: true,
		toolbar: true,
		keyboard : true,
		fullScreen: {
			autoStart: false,
		},
		touch: {
			vertical: true,  // Allow to drag content vertically
			momentum: true   // Continue movement after releasing mouse/touch when panning
		},
		slideShow: {
			autoStart: false
		},
		thumbs: {
			autoStart: false,   // Display thumbnails on opening
			hideOnClose: true     // Hide thumbnail grid when closing animation starts
		},
		hash: true,
		smallBtn: false,
		buttons: [
			// 'slideShow',
			// 'fullScreen',
			'thumbs',
			// 'share',
			// 'download',
			// 'zoom',
			'close'
		],
		iframe : {
			preload : false
		},
	});

	//SMOOTH SCROLLING
	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#search"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, 'easeInOutExpo', function() {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
			}
		}
	});

	//HOME SLIDER
	var slider = $('.slider');
	if(slider.length) {
		slider.slick({
			adaptiveHeight: false,
			arrows: true,
			dots: true,
			dotsClass: 'slick-dots',
			cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
			speed: 1000,
			swipe: true,
			fade: true,
			swipeToSlide: true,
			touchMove: true,
			touchThreshold: 10,
			edgeFriction: .1,
			autoplay: true,
			autoplaySpeed: 5000,
			centerMode: false,
			focusOnSelect: false,
			draggable: true,
			infinite: true,
			scrolling: false
		});

		$('.slick-initialized .slick-current .slide-content').addClass('fadeIn');

		slider.on('afterChange', function (event, slick, currentSlide) {
			$('.slick-active .slide-content').addClass('fadeIn');
			$('.slick-active .slide-content').removeClass('fadeOut');
		});

		slider.on('beforeChange', function (event, slick, currentSlide) {
			$('.slide-content').addClass('fadeOut');
		});
	}


	//headroom
	var headroom = document.querySelector('#header');
	var headroom = new Headroom(headroom, {
		offset : 50,
		tolerance: {
			down : 5,
			up : 0
		},
		classes: {
			// when element is initialised
			initial: 'headeroom',
			// when scrolling up
			pinned: 'headroom--pinned',
			// when scrolling down
			unpinned: 'headroom--unpinned',
			// when above offset
			top: 'headroom--top',
			// when below offset
			notTop: 'headroom--not-top',
			// when at bottom of scoll area
			bottom: 'headroom--bottom',
			// when not at bottom of scroll area
			notBottom: 'headroom--not-bottom'
		}
	});
	headroom.init();

	//BACK TO TOP
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.back-top').fadeIn();
			$('.back-top').addClass('fadeInUp');
			$('.back-top').removeClass('fadeOutDown');
		} else {
			$('.back-top').fadeOut();
			$('.back-top').removeClass('fadeInUp');
			$('.back-top').addClass('fadeOutDown');
		}
	});

	$('.back-top').click(function(){
		$('html, body').animate({scrollTop : 0},1400, 'easeInOutExpo');
		return false;
	});

	// social media sharing scroll
	$(window).scroll(function(){
      if ($(this).scrollTop() > 1000) {
        $('#share-post-side').addClass('fixed');
      } else {
        $('#share-post-side').removeClass('fixed');
      }
  });
	// $(window).scroll(function(){
	// 	var scrollBottom = $(window).scrollTop() + $(window).height();
	// 		if ($(this).scrollBottom() > 4000) {
	// 			$('#share-post-side').addClass('fixed');
	// 		} else {
	// 			$('#share-post-side').removeClass('fixed');
	// 		}
	// });
	$(document).scroll(function() {
    checkOffset();
	});
	function checkOffset() {
    if($('#share-post-side').offset().top + $('#share-post-side').height() >= $('.newsletter-form-block').offset().top - 10)
        $('.fixed').css('position', 'absolute');
    if($(document).scrollTop() + window.innerHeight < $('.newsletter-form-block').offset().top)
        $('.fixed').css('position', 'fixed'); // restore when you scroll up
	}

	// Tabs
	$(document).ready(function(){

		$('ul.tabs li').click(function(){
			var tab_id = $(this).attr('data-tab');
			if ($('ul.tabs li all')){
				$('.tab-content').addClass('current');
			}
			$('ul.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');
			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		})
		$('.toggle_tabs').click(function () {
				$('.tab-content').each(function () {
						if ( ($(this).hasClass('current')) && ( $(this).hasClass('active') === false) ) {
								$(this).removeClass('current');
						} else {
								$(this).addClass('current');
						}
				});
		});
	})


  // Move classes on mobile
	var width = $(window).width(), height = $(window).height();
	if ((width <= 600)) {

		//articles on resource page
		$('#article-carousel .flickity-viewport .flickity-slider .carousel-cell .article-post').appendTo('.resource-article-section');
		$('#article-carousel').remove();
		$('.resource-article-section').addClass('column');
		$('.resource-article-section > .article-post').slice(-3).remove();
		$('.resource-article-button').appendTo('.resource-article-section');
		$('.article-resource-section .section-content').addClass('column');

		//Books on resource page
		$('.book-section').addClass('column');
		$('.book-section div').removeClass('column');
		$('section.book-section div.resource-book-section').appendTo('section.book-section');
		$('section.book-section div.large-1').remove();
		$('.resource-book-section').removeClass('resource-book-section');
		$('.book-section').removeClass('columns');
		$('.resource-book-button').appendTo('.book-section');
		$('.large-8 .book-section a.button.resource-book-button').remove();
		$('.resource-book-button').css('position', 'relative');

		//podcasts on resource page
		$('.podcast-section').addClass('column');
		$('section.podcast-section div.resource-podcast-posts').appendTo('section.podcast-section');
		$('section.podcast-section div.large-1').remove();
		$('.featured-podcast-post').addClass('podcast-post').removeClass('featured-podcast-post');
		$('.featured-podcast').removeClass('columns');
		$('.resource-podcast-button').appendTo('.resource-podcast-posts');

		//videos on resource page
		$('.video-resource-section').addClass('column');
		$('section.video-resource-section div.large-1').remove();
		$('#video-carousel .flickity-viewport .flickity-slider .carousel-cell .featured-video').appendTo('.resource-video-section');
		$('#video-carousel').remove();
		$('.resource-video-button').appendTo('.resource-video-section');
		$('div.resource-video-section article.featured-video').removeClass('columns');
		$('.resource-video-section').addClass('column');
		$('.video-post .post-content .post-meta').appendTo('.video-post .post-content');
		$('.video-post .post-content .post-meta:last-child').remove();
		$('.video-post .categories').appendTo('.video-post .post-content .post-meta');
		$('.video-post .post-meta .categories:last-child').remove();
		$('.featured-video-post .categories').appendTo('.featured-video-post .post-content .post-meta');

		//service detail page
		$('.service-read-more').appendTo('div.service-detail-header-text');
		$('.service-page-section').prependTo('.services-page .main-section');
		// $('.split-right-h2').prependTo('.split-section-right');

		//Home Page Split Section
		$('.advisor-section .advisor-section-content').appendTo('.advisor-section');
		//Home Page Split Section
		$(elem).detach().appendTo('#nonSelected');

	} else if ((width <= 1200)) {
		//Home Page Split Sections
		$('#2.split-section .split-section-left').prependTo('#2.split-section .content-block');
		$('#4.split-section .split-section-left').prependTo('#4.split-section .content-block');
	} else if ((width >= 600)) {
		$('.service-page-section .large-4').unwrap();
		$('.services-section .large-4').unwrap();
	}


});
