window.onscroll = function() {myFunction()};

var navbar = document.getElementById("scroll");
var sticky = navbar.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
  navbar.classList.add("sticky")
} else {
  navbar.classList.remove("sticky");
}

}
document.querySelector("#newArrivals").addEventListener("click",function(){
  window.location.href="NEWARRIVALS.html"
})
document.querySelector("#bestSellers").addEventListener("click",function(){
  window.location.href="bestsellers.html"
})
document.querySelector("#logo").addEventListener("click",function(){
  window.location.href="index.html"
})
