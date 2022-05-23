  const city = document.getElementById("cf-check-plural").innerText;
  const appendedS = document.getElementById("cf-remove-s");
  const lastChar = city[city.length -1];
  if (lastChar == "S" || lastChar == "s"){
    appendedS.innerHTML = "";
    console.log("TRUE");
  } else{
    console.log("FALSE");
  }