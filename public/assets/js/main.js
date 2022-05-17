// Device detection
detectDevice = {
  isMobile: function() {
    return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/Mobile/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/BB10/i) || navigator.userAgent.match(/Nokia/i) || navigator.userAgent.match(/Windows Phone/i)?!0 : !1;
  },
  isTablet: function() {
    return navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Nexus/i) || navigator.userAgent.match(/Playbook/i)?!0 : !1;
  },
  isSafari: function() {
    return !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
  },
  isChrome: function() {
    return !!navigator.userAgent.match(/Version\/[\d\.]+.*Chrome/);
  }
};

function cycleImages(){
  //console.log('cycleImages');
  var $active = $('.gradients .active');
  var $next = ($active.next().length > 0) ? $active.next() : $('.gradients .gradient:first');
  $next.css('z-index',2);//move the next image up the pile
  $active.fadeOut(5000,function(){//fade out the top image
    $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
    $next.css('z-index',3).addClass('active');//make the next image the top one
  });
}

$(document).ready(function($) {

  var banner = Math.floor(Math.random() * 3) + 1;

  

  //console.log(banner);

  if ( banner == 1 ) {
    bannerEl = document.getElementById('banner-1');
  } else if ( banner == 2 ) {
    bannerEl = document.getElementById('banner-2');
  } else if ( banner == 3 ) {
    bannerEl = document.getElementById('banner-3');
  } else {
    bannerEl = document.getElementById('banner-1');
  }

  //console.log(bannerEl);

  //$(bannerEl).addClass('show');

  // Is mobile? 
  if ( detectDevice.isMobile() ) {
    // do something
  }


  $('body').removeClass('body--blur');


  $('.js-expand-container').on('click', function(event) {
    event.preventDefault();
    
    var section = $(this).closest(".js-section-crop");

    // Scroll smoothly to top of current section (find top of current section minus header height)
    if ( $('.js-site-header').hasClass('header--down') ) {
      sectionOffset = section.offset().top;
    } else {
      sectionOffset = section.offset().top - $('.js-site-header').height();
    }
    $('html,body').animate({ 
      scrollTop: sectionOffset
    }, 500);

    $(section).toggleClass("section--cropped");

    $(this).toggleClass('browser--scaled');
    $(this).toggleClass('is-expanded');
  });

  $('.js-section-crop').on('click', function(event) {
    event.preventDefault();
  });


  $('.js-menu-btn').on('click', function(event) {
    event.preventDefault();
    $('html, body').toggleClass('mobile-nav-open');
    $('.js-nav').toggleClass('nav--active');
  });

  function setZooms() {
    $('.js-browser-zoom').each(function(){
      var zoom = $(this);
      var zoomSection = $(this).closest('.js-section-crop');
      var zoomTop = $(zoomSection).outerHeight();
      
      if (zoomTop < 260) {
        zoomTop = zoomTop - 75;
      } else {
        zoomTop = zoomTop - 240;
      }
      //console.log(zoomTop);
      $(zoom).css('top', zoomTop);
    });
  }



  // Header
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var bannerHeight = $('.js-banner').outerHeight();
  var navbarHeight = $('.js-site-header').outerHeight();

  console.log(bannerHeight);

  $(window).on('scroll', function(event) {
    event.preventDefault();
    didScroll = true;
    hasScrolled();
  });

  function hasScrolled() {
      didScroll = false;
      var st = $(this).scrollTop();
      
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if ( !$('body').hasClass('js-noscroll')  ) {
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.js-site-header').removeClass('header--down').addClass('header--up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.js-site-header').removeClass('header--up').addClass('header--down');
            }
        }

        if (bannerHeight != undefined) {
          if ( st > bannerHeight - navbarHeight ) {
            //console.log('header fill');
            $('.js-site-header').removeClass('header--gradient').addClass('header--filled');
          } else {
            //console.log('header gradient');
            $('.js-site-header').removeClass('header--filled').addClass('header--gradient');
          }
        }
        
        
        lastScrollTop = st;
      }
  }
  

  // Check scroll pos onload and set header to be filled
  var scrollPos = $(this).scrollTop();
  if (scrollPos > lastScrollTop && scrollPos > navbarHeight){
    $('.js-site-header').addClass('header--filled');
  }

  // hide mobile nav on resize
  $(window).on('resize', function(){
    if ( $(window).width() > 768 ) {
      $('html, body').removeClass('mobile-nav-open');
      $('.js-nav').removeClass('nav--active');
    }
  });



  // Loads elements as they scroll into viewport
  $('.js-not-loaded').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).removeClass('not-loaded').addClass('loaded');
    } else {
      // element has gone out of viewport
    }
  });




  // TODO: clean this shit up!
  // Parallax 
  var parallaxImage = $('.js-parallax-image');
  //var parallaxSlideCaption = $('.js-slide-caption', parallaxImage);
  var parallaxRange = 200;


  // only execute paralax when images have loaded
  //$('.js-gallery-image').on('load', function(event) {
    
    $(window).on('scroll', function(){
      var scrollTop = $(window).scrollTop();
      // parallax 
      if ( parallaxImage.length ) {
        var parallaxImageOffset = parallaxImage.offset().top;
        var parallaxImageHeight = parallaxImage.outerHeight();
        parallaxImageOffset = parallaxImageOffset + parallaxImageHeight / 3;
        var parallaxCalc = 1 - (scrollTop - parallaxImageOffset + parallaxRange) / parallaxRange;
        // parallax slide caption opacity
        //parallaxSlideCaption.css({ 'opacity': parallaxCalc });
        // reset opacity calc to 1 or 0 when going out of bounds
        // if ( parallaxCalc > '1' ) {
        //   parallaxSlideCaption.css({ 'opacity': 1 });
        // } else if ( parallaxCalc < '0' ) {
        //   parallaxSlideCaption.css({ 'opacity': 0 });
        // }

        // content gallery image parallax effect
        var contentGalleryHeight = $('.js-banner').height();
        //$('.js-content-gallery .slide').css('height', contentGalleryHeight);
        //$('.js-content-gallery').addClass('content-gallery--cutoff');
        //$('.js-parallax-image').css('position', 'absolute');
        parallaxOffset = scrollTop * 0.3;
        parallaxOffset = parallaxOffset.toString();
        parallaxTransform = "translateY(" + parallaxOffset + "px)";
        parallaxBlur = "blur(" + parallaxOffset / 3 + "px)";
        $('.js-parallax-image').css('transform', parallaxTransform);
        if ( !detectDevice.isMobile() ) {
          $('.js-parallax-image').css('filter', parallaxBlur);
        }
      }
    });
    // on window resize unfix height of parallax and reset position absolute 
    // $(window).on('resize', function(event) {
    //   event.preventDefault();
    //   $('.js-parallax-image').css('position', 'static');
    //   $('.js-content-gallery').css('height', 'initial');
    // });
  //});


  // Masonry project grid
  function masonry_init() {
    $('.js-project-grid').masonry({
      columnWidth: '.js-project-grid-sizer',
      itemSelector: '.js-project-grid-item',
      percentPosition: true,
      transitionDuration: '0.2s'
    });
  }

  masonry_init();

  //window.onload = masonry_init;


  // Auto expand textarea height

  // Get textareas, resize on keydown
  var textarea = $('.js-input-textarea');
  textarea.on('keydown', function(event) {
    autosize($(this));
  });
               
  function autosize(textarea){
    setTimeout(function(){
      $(textarea).css('height', 'auto');
      var newHeight = $(textarea).prop('scrollHeight');
      newHeight += 2;
      newHeightString = newHeight + 'px';
      $(textarea).css('height', newHeightString);
    },0);
  }


  // TODO: this might be problematic
  // Next project links
  $('.js-next-project-link').on('click', function(event) {
    $('body').addClass('body--fadeout');

    if ( detectDevice.isChrome() ) {
      // allow standard link load
    } else if ( detectDevice.isSafari() ) {
      //console.log('yo');
      event.preventDefault();
      var nextProjectLink = $(this).attr('href');
      setTimeout(function(){ 
        location.href = nextProjectLink;
        $('body').removeClass('body--fadeout');
      }, 300);  
    }
    
  });



  // Morphing nav
  (function() { 
    var docElem = window.document.documentElement, didScroll, scrollPosition;

    // trick to prevent scrolling when opening/closing button
    function noScrollFn() {
      window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
    }

    function noScroll() {
      window.removeEventListener( 'scroll', scrollHandler );
      window.addEventListener( 'scroll', noScrollFn );
    }

    function scrollFn() {
      window.addEventListener( 'scroll', scrollHandler );
    }

    function canScroll() {
      window.removeEventListener( 'scroll', noScrollFn );
      scrollFn();
    }

    function scrollHandler() {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( function() { scrollPage(); }, 60 );
      }
    }

    function scrollPage() {
      scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
      didScroll = false;
    }

    scrollFn();

    // Mobile nav button
    var el = document.querySelector( '.js-mobile-nav' );
    
    new UIMorphingButton( el, {
      closeEl : '.icon-close',
      onBeforeOpen : function() {
        // don't allow to scroll
        noScroll();
      },
      onAfterOpen : function() {
        // can scroll again
        canScroll();
        // add class "noscroll" to body
        classie.addClass( document.body, 'noscroll' );
        classie.addClass( document.body, 'js-noscroll' );
        //$('body').addClass('noscroll');
        classie.addClass( document.body, 'body--blur' );
        // add scroll class to main el
        classie.addClass( el, 'scroll' );
      },
      onBeforeClose : function() {
        // remove class "noscroll" to body
        classie.removeClass( document.body, 'noscroll' );
        classie.removeClass( document.body, 'js-noscroll' );
        classie.removeClass( document.body, 'body--blur' );
        // remove scroll class from main el
        classie.removeClass( el, 'scroll' );
        // don't allow to scroll
        noScroll();
      },
      onAfterClose : function() {
        // can scroll again
        canScroll();
      }
    } );


    // CTA buttons
    [].slice.call( document.querySelectorAll( '.js-cta-button' ) ).forEach( function( bttn ) {

      new UIMorphingButton( bttn, {
        closeEl : '.icon-close',
        onBeforeOpen : function() {
          // don't allow to scroll
          noScroll();
        },
        onAfterOpen : function() {
          // can scroll again
          canScroll();
          // add class "noscroll" to body
          classie.addClass( document.body, 'noscroll' );
          classie.addClass( document.body, 'js-noscroll' );
          //$('body').addClass('noscroll');
          // add scroll class to main el
          classie.addClass( bttn, 'scroll' );
          attachForm();
        },
        onBeforeClose : function() {
          // remove class "noscroll" to body
          classie.removeClass( document.body, 'noscroll' );
          classie.removeClass( document.body, 'js-noscroll' );
          // remove scroll class from main bttn
          classie.removeClass( bttn, 'scroll' );
          // don't allow to scroll
          noScroll();
        },
        onAfterClose : function() {
          // can scroll again
          canScroll();
        }
      } );

      bttn.addEventListener('click', function(event) {
        event.preventDefault();
      });
    } );



    // AJAX contact form
    // Get the form.
    var $form = $('.js-form-contact');

    $form.submit(function(e) {
      e.preventDefault();

      var formURL = $form.attr('action');
      var formData = $form.serialize();

      // Get the messages div.
      var $formMessages = $('.js-form-messages');

      // $.post($form.attr("action"), $form.serialize()).then(function() {
      //   $(formMessages).removeClass('error')
      //                  .addClass('success')
      //                  .text("Thanks for getting in touch. We will contact you soon.");
      // });

      $.ajax({
        type: 'POST',
        url: formURL,
        data: formData
      })
      .done(function(response) {
        console.log('done');
        // Make sure that the formMessages div has the 'success' class.
        $formMessages.removeClass('error');
        $formMessages.addClass('success');
        // Set the message text.
        $formMessages.text("Thanks! Your enquiry has been received and we'll get back to you very soon.");
        // Clear the form.
        // $('.js-input-about').val('');
        // $('.js-input-details').val('');
        // close overlay after 3 seconds
        setTimeout(function(){
          $('.js-overlay-close').trigger('click');
        }, 3000);
      })
      .fail(function(data) {
        console.log('fail');
        // Make sure that the formMessages div has the 'error' class.
        $formMessages.removeClass('success');
        $formMessages.addClass('error');
        // Set the message text.
        if (data.responseText !== '') {
          $formMessages.text(data.responseText);
        } else {
          $formMessages.text('Oops! An error occured and your enquiry could not be sent.');
        }
      });
    });


    // TODO: this is necessary because something in morphing.js is attaching to all buttons inside overlay and preventing form submission :-(
    $('.js-btn-send-popup').on('click', function(event) {
      event.preventDefault();
      $('.js-form-contact').submit();
    });


    // Video
    var video = $('.js-video');
    var vid = document.getElementById('video');

    // var medVideoSrc = '/assets/video/holi_banner_1200.mp4';
    // var highVideoSrc = '/assets/video/holi_banner_1920.mp4';
    
    // var ww = $(window).width();
    // console.log(ww);

    // if ( ww < 1025 ) {
    //   // load no video
    // } else if ( ww < 1600 ) {
    //   $(vid).append('<source src="' + medVideoSrc + '" type="video/mp4">');
    // } else {
    //   $(vid).append('<source src="' + highVideoSrc + '" type="video/mp4">');
    // }
    
    // check video exists and load source
    if ( $(vid).length ) { 
      vid.onloadeddata = function() {
        //console.log('loaded');
        $(video).addClass('loaded');
      };
    }

  })();
});