// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Get the nav
var nav = document.getElementById("nav");
//get total height
//var h = document.documentElement.scrollHeight
//var offset = nav.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 30) {
    nav.classList.add("bg-light");
    nav.classList.remove("bg-transparent");
  } else {
    nav.classList.remove("bg-light");
    nav.classList.add("bg-transparent");
  }
}
