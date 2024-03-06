function swapDivs() {
  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");

  if (div1.style.display === "none") {
    div1.style.display = "block";
    div1.style.opacity = "1";
    div2.style.opacity = "0";
    setTimeout(function(){ div2.style.display = "none"; }, 2000);
  } else {
    div2.style.display = "block";
    div2.style.opacity = "1";
    div1.style.opacity = "0";
    setTimeout(function(){ div1.style.display = "none"; }, 2000);
  }
}