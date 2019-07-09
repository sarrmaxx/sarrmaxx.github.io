alert("Let's Learn About the Dangers of Plastic in our Oceans");

function bigImg(x){
   x.style.heigth = "600px";
   x.style.width = "600px";
}

function originalImg(x){
  x.style.height = "400px";
  x.style.width = "400px";
}

function myFunction() {
  var x = document.getElementById("text");
  if (x.style.display == "none") {
  x.style.display = "block";
  } else {
  x.style.display = "none";
  }
}
