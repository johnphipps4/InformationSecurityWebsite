// have burger menu show up on reduction
function resizeWindow() {
    
    var x = document.getElementById("nav-bar");
    if (x.className === "xx") {
        x.className += " responsive";  
    } else {
        x.className = "xx"; 
    }
    

}
//choose which maps to open for device
function mapsSelector() {
  if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) || 
     (navigator.platform.indexOf("iPod") != -1) || 
     (navigator.platform.indexOf("iPad") != -1))
    window.open("maps://maps.google.com/maps?daddr=6.268571,-75.594666&amp;ll=");

  else /* else use Google */
    window.open("https://www.google.com/maps/dir//Cra.+79a+%2353b-116,+Medell%C3%ADn,+Antioquia/@6.2683483,-75.5971063,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8e442915095d5fd3:0xbf1af35ea0b6d458!2m2!1d-75.5949176!2d6.268343");
}

//hamburger menu support
$(document).ready(function(){
    $("#trigger").click(function() {
        $("#menu").toggleClass("active");
        $("#trigger").toggleClass("active");
        $('#overlay').toggle();
    });

    $("#overlay, #menu a").click(function() {
// 	    if menu is active then 
		$('#overlay').toggle();			
		$("#menu").toggleClass("active");
        $("#trigger").toggleClass("active");
// 	    $("#menu").toggleClass("active");
        });
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});