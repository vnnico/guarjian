// Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Change Navbar color while scrolling
window.addEventListener("DOMContentLoaded", function () {
  let navbar = document.querySelector("#navbar");
  let scrolled = window.scrollY > 10;

  if (scrolled) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});

window.addEventListener("scroll", function () {
  let navbar = document.querySelector("#navbar");
  let scrolled = window.scrollY > 0;

  if (scrolled) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});

//  Login Validation

function loginValidation() {
  let fullname = document.getElementById("fullname").value;
  let address = document.getElementById("address").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message").value;
  let checkbox = document.getElementById("checkbox");

  if (fullname === "") {
    alert("Fullname Should be Required!");
    return;
  }

  if (address === "") {
    alert("Address Should be Required!");
    return;
  }

  if (email === "") {
    alert("Email Should be Required!");
    return;
  }
  if (password === "") {
    alert("Password Should be Required!");
    return;
  }

  if (message === "") {
    alert("Message Should be Required!");
    return;
  }

  if (!checkbox.checked) {
    alert("Please Check the checkbox!");
    return;
  }
}
