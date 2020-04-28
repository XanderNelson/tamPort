
  var tamHead = document.getElementsByClassName('tamHead');
  var instance = new simpleParallax(tamHead,{
    orientation: 'right',
    scale: 2,
    overflow: 'true'
  });

  var workImages = document.querySelectorAll('#section2 .scroll');
  var instance2 = new simpleParallax(workImages,{
    scale: 1.3
  });
  var gitPage = document.querySelectorAll('#gitPage');
  var instance3 = new simpleParallax(gitPage,{
    scale: 2
  });

  function myFunction(x){
    if(x.matches){
      instance.destroy();
    }
  }

  $('#imageBox').magnificPopup({
      items: [
        {src: 'img/image1.jpg'},
        {src: 'img/image2.jpg'},
        {src: 'img/image3.jpg'},
        {src: 'img/image4.jpg'},
        {src: 'img/image5.jpg'},
        {src: 'img/image7.jpg'},
        {src: 'img/tamp1.jpg'},
        {src: 'img/tamp2.jpg'},
        {src: 'img/tamp3.jpg'},
        {src: 'img/tamp4.jpg'},
        {src: 'img/tamp5.jpg'},
        {src: 'img/tamp7.jpg'},
        {src: 'img/drone1.jpg'},
        {src: 'img/drone2.jpg'},
        {src: 'img/drone3.jpg'},
        {src: 'img/drone4.jpg'},
        {src: 'img/drone5.jpg'},
        {src: 'img/drone6.jpg'},
        {src: 'img/drone7.jpg'},
        {src: 'img/tamp6.jpg'},

      ],
      gallery: {
        enabled: true
      },
      type: 'image' // this is default type
  });

  $('#futureMotionOpen').magnificPopup({
    items: [
      {src: 'https://vimeo.com/411596270',
      type: 'iframe'},
      {src: 'img/fMotion1.jpg'},
      {src: 'img/fMotion2.jpg'},
      {src: 'img/fMotion3.jpg'},
      {src: 'img/fMotion4.jpg'},
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  	});
    $('#infinityTableOpen').magnificPopup({
      items: [
        {src: 'https://www.youtube.com/watch?v=8uJ2JnUpCuQ',
        type: 'iframe'},
        {src: 'img/table1.jpg'},
        {src: 'img/table3.jpg'},
        {src: 'img/table2.jpg'},
        {src: 'img/table4.jpg'},

      ],
      gallery: {
        enabled: true
      },
      type: 'image'
    	});

  var x = window.matchMedia("(max-width: 1000px)");
  myFunction(x);


  var motionPath = anime({
  targets: '#initials path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
  duration: 50000,
  direction: 'normal',
  update: function(anim) {
     var currProgress = Math.round(anim.progress);
     if(currProgress == 16) {
       motionPath.pause();
     }
    }
  });


// had some line randomize js help from https://codepen.io/juliangarnier/pen/ZeEpgd
var pathEls = document.querySelectorAll('#section4 path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  var workPaths = anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(5000, 8000),
    // delay: anime.random(0, 2000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}
$("#section4 path").css("stroke", "#182E3A");
$("#section4 path").css("stroke-width", "1");




// scroll navigation
jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');

    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});
// end dot scroll navigation

// background video function
(function () {

  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    // autoplay: false,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'tamHome3.mp4',
        type: 'video/mp4'
      },
      {
        src: 'tamHome3.mp4',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
});
