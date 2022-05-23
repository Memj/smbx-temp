  // jQuery v 2.2.4 requierd
  // CDN link here - https://code.jquery.com/
  // Add a box to the page and nest the elements inside (can include boxes with grouped content)
  // The first element that is nested in the containing box will be what shows on page load	
$(function() { 
  // Add a box to the page and nest the elements inside (can include boxes with grouped content)
  // The first element that is nested in the containing box will be what shows on page load
  // Add ID of box containing elements. 
  var container = $("#lp-pom-box-835"); 
  
  // Add ID of right button
  var right = $("#lp-pom-image-824");
  
  // Add ID of right button
  var left = $("#lp-pom-image-823");
  
  var time = 300; 
  
  // code to select and centre elements 
  container.children().css({
                        'top': '50%',
                        'left': '50%',
                        'transform': 'translate(-50%, -50%)'
                           });
  var allEls = container.children().not(":eq(0)");
  var notFirst = allEls.not(":eq(0)");
  notFirst.css('display', 'none');
     
  // Functions to cycle through the elements in the containing box and show/hide them  
  function cycleRight(el, delay) {
    $(el[0]).fadeIn(500)
	    .delay(delay)
	    .fadeOut(500)
	    .promise()
	    .done(function() {
          $(el[1]).fadeIn(500);
	      var putBack = el.splice(0, 1);
	      allEls.push(putBack[0]);	             
	    });
    }
  
  function cycleLeft(el, delay) {
    $(el[0]).fadeIn(500)
	    .delay(delay)
	    .fadeOut(500)
	    .promise()
	    .done(function() {
          $(el.last()).fadeIn(500);
          var putBack = el.splice(-1, 1);
	      allEls.splice(0, 0, putBack[0]);
	    });
    }
  
  function cycleTimeRight() {
    cycleRight(allEls, time);
    $(right).off('click');
    setTimeout(function() {
      $(right).on('click', cycleTimeRight);
    }, time*3); 
  }
  
  function cycleTimeLeft() {
    cycleLeft(allEls, time);
    $(left).off('click');
    setTimeout(function() {
      $(left).on('click', cycleTimeLeft);
    }, time*3); 
  }
  
  $(right).click(function() {
    cycleTimeRight(); 
  });
  
  $(left).click(function() {
    cycleTimeLeft();
  });
});