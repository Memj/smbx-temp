  function showData(){
    //get URL paramaters
	var url_string = window.location.href;
	var url = new URL(url_string);
	var showLocation = url.searchParams.get("cf_location"); 
    
    if(showLocation == "Orlando"){
      document.getElementById("lp-pom-text-878").style.display = "block";
      document.getElementById("lp-pom-text-875").style.display = "none";
    } else if(showLocation == "Atlanta"){
      document.getElementById("lp-pom-text-898").style.display = "block";
      document.getElementById("lp-pom-text-875").style.display = "none";
    } else if(showLocation == "Miami"){
      document.getElementById("lp-pom-text-880").style.display = "block";
      document.getElementById("lp-pom-text-875").style.display = "none";
    } else if(showLocation == "Charlotte"){
      document.getElementById("lp-pom-text-883").style.display = "block";
      document.getElementById("lp-pom-text-875").style.display = "none";
    } else if(showLocation == "Boston"){
      document.getElementById("lp-pom-text-884").style.display = "block";
      document.getElementById("lp-pom-text-875").style.display = "none";
    } else if(showLocation == "Philly"){
      document.getElementById("lp-pom-text-885").style.display = "block";
      document.getElementById("lp-pom-text-875").style.display = "none";
    } else if(showLocation == "Chicago"){
      document.getElementById("lp-pom-text-886").style.display = "block";
      document.getElementById("lp-pom-text-875").style.display = "none";
    } else if(showLocation == "NYC"){
      document.getElementById("lp-pom-text-887").style.display = "block";
      document.getElementById("lp-pom-text-875").style.display = "none";
    } else if(showLocation == "Denver"){
      document.getElementById("lp-pom-text-888").style.display = "block";
      document.getElementById("lp-pom-text-875").style.display = "none";
    } else if(showLocation == "Los Angeles"){
      document.getElementById("lp-pom-text-889").style.display = "block";
      document.getElementById("lp-pom-text-875").style.display = "none";
    } else if(showLocation == "Las Vegas"){
      document.getElementById("lp-pom-text-890").style.display = "block";
      document.getElementById("lp-pom-text-875").style.display = "none";
    } else if(showLocation == "Phoenix"){
      document.getElementById("lp-pom-text-891").style.display = "block";
      document.getElementById("lp-pom-text-875").style.display = "none";
    } else if(showLocation == "San Diego"){
      document.getElementById("lp-pom-text-894").style.display = "block";
      document.getElementById("lp-pom-text-875").style.display = "none";
    } else if(showLocation == "Dallas"){
      document.getElementById("lp-pom-text-895").style.display = "block";
      document.getElementById("lp-pom-text-875").style.display = "none";
    } else if(showLocation == "Houston"){
      document.getElementById("lp-pom-text-896").style.display = "block";
      document.getElementById("lp-pom-text-875").style.display = "none";
    }
  }
  
  window.onload = showData;