// Fade in Products
$(document).ready(function () {
    $('.slide').click(function () {
        $(this).fadeOut(200);
        $(this).next('div').delay(250).fadeIn(200);
    });
    $('.desc').click(function () {
        $(this).fadeOut(200);
        $(this).prev().delay(250).fadeIn(250);
    });
});

// lightbox popup for services
$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});	
});

$(document).ready(function(){
    $('.protection-span').click(function(){
        $(this).next('div').slideToggle(250);
    })
})

$(document).ready(function(){
  $(".popup-with-form").click(function () {
		var action = $(this).data('value');
		$('input[name=discern]').val(action);
  });
});


// AJAX supoort for php email
$(function () {

        $('form').on('submit', function (e) {

          e.preventDefault();

          $.ajax({
            type: 'post',
            url: 'php/contact.php',
            data: $(this).serialize(),
            success: function (results) {
              alert(results);
              this.reset()
            }
        });
    });
});


// security of recaptcha
window.onload = function() {
    var $recaptcha = document.querySelector('#g-recaptcha-response');

    if($recaptcha) {
        $recaptcha.setAttribute("required", "required");
    }
};

