//Scrolling with sliding animation 
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#nav-bar a, #menu a, #scroll-down-arrow").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
	  
      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//Scrolling Progress Bar 
$(document).ready(function() {

	var getMax = function() {
		return $(document).height() - $(window).height();
	}

	var getValue = function() {
		return $(window).scrollTop();
	}

	if ('max' in document.createElement('progress')) {
		var progressBar = $('progress');
		
		progressBar.attr({
			max: getMax()
		});

		$(document).on('scroll', function() {
			progressBar.attr({
				value: getValue()
			});
		});

		$(window).resize(function() {
			
			progressBar.attr({
				max: getMax(),
				value: getValue()
			});
		});

	} else {

		var progressBar = $('.progress-bar'),
			max = getMax(),
			value, width;

		var getWidth = function() {
			
			value = getValue();
			width = (value / max) * 100;
			width = width + '%';
			return width;
		}

		var setWidth = function() {
			progressBar.css({
				width: getWidth()
			});
		}

		$(document).on('scroll', setWidth);
		$(window).on('resize', function() {
			
			max = getMax();
			setWidth();
		});
	}
});

//Reactive header 
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 200);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}