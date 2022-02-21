const toggleButton = document.getElementsByClassName("nav-toggle")[0];
const navBarLinks = document.getElementsByClassName("nav-item");
toggleButton.addEventListener("click", function () {
  for (var i = 0; i <= navBarLinks.length; i++) {
    navBarLinks[i].classList.toggle("active");
  }
});
