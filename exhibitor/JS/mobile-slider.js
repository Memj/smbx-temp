	  // jQuery 2.2.4 requierd
  // CDN link here - https://code.jquery.com/
$(function() { 
  // Add a box to the page and nest the elements inside (can include boxes with grouped content)
  // The first element that is nested in the containing box will be what shows on page load

  // Add ID of box containing elements. 
  var container = $("#lp-pom-box-358");

  // Add the amount of time before the element switches. EX: 2000 = 2 seconds
  var time = 2000; 
  
  // code to select and centre elements 
  container.children().css({
                        'top': '50%',
                        'left': '50%',
                        'transform': 'translate(-50%, -50%)'
                           });
  var allEls = container.children().not(":eq(0)");
  var notFirst = allEls.not(":eq(0)");
  notFirst.css('display', 'none');
     
  // Function to cycle through the elements in the containing box and show/hide them  
  function ShowEls(el, delay) {
    $(el[0]).fadeIn(300)
	    .delay(delay)
	    .fadeOut(300)
	    .promise()
	    .done(function() {
	      var putBack = el.splice(0, 1);
	      if (el.length >= 1) {
	        ShowEls(el, delay);
	        allEls.push(putBack[0]);	             
	      }
	    });
    }

  ShowEls(allEls, time); 

});