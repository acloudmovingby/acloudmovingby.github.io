/*$(document).ready(function () {
  $("#test-box").on("click", function () {
    console.log("box clicked");
    $("#test-box").addClass(".animation-class");
  });
});*/
var clicked = false;

console.log("begin script");
/*document.getElementById("test-box").onclick = function () {
  console.log("box clicked");
};
/*
document.getElementById("test-box").onclick = function () {
  myFunction();
};

function myFunction() {
  console.log("box clicked");
  /*document.getElementById("test-box").innerHTML = "YOU CLICKED ME!";
  console.log(document.getElementById("test-box").className);
  if (clicked) {
    document.getElementById("test-box").className = "click-box-init";
    clicked = false;
  } else {
    document.getElementById("test-box").className += " animation-class";
    clicked = true;
  }
  //$("#test-box").addClass(".animation-class");
}*/

document.getElementById("have-you-1").onclick = function () {
  myFunction();
};

function myFunction() {
  console.log("box clicked");
  /*document.getElementById("test-box").innerHTML = "YOU CLICKED ME!";*/
  var switchButton = document.getElementById("have-you-1");
  var timeAdverb = document.getElementById("time-adverb")
  console.log("className: " + switchButton.className);
  if (clicked) {
    /* //original with animation class 
    switchButton.classList.remove("animation-class");*/
    switchButton.classList.remove("color-text");

    switchButton.innerHTML = "Have you been";
    timeAdverb.innerHTML = "";
    clicked = false;
  } else {
    /* //original with animation class 
    switchButton.classList.add("animation-class");*/
    switchButton.classList.add("color-text");

    switchButton.innerHTML = "Did you go";

    timeAdverb.className += " fade-in-animation";
    timeAdverb.innerHTML = " in 2016";
    clicked = true;
  }
  //$("#test-box").addClass(".animation-class");
}